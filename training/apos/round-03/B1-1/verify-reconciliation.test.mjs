import test from 'node:test';
import assert from 'node:assert/strict';
import {verify} from './verify-reconciliation.mjs';
const SHA='da8822cbbe54c47539f65571327e324ce675eeb4';
const CAND='95b5dd8283a611e27c0c0a9185060a213e53ada9';
function sample(){return {
  mainSha:SHA,
  control:[
    'mission_id: B1-1','canonical_repository: MetaStudy999/codyssey-basic-web-portfolio',
    'stable_topic: web-portfolio','execution_round: round-03-apos',
    'execution_root: training/round-03-apos','status: CLEAR','owner_start_approval: APPROVED',
    'mission_execution: RUNTIME_PASS','tracks:','  core: CLEAR','  bonus: NOT_STARTED','reconciliation:',
    '  source_repository: MetaStudy999/codyssey-basic-web-portfolio',
    '  source_main_sha: '+SHA,'  source_pr: 15','  core_clear: PASS',
    '  runtime_candidate_sha: '+CAND,'  chromium_run_id: 37582457341',
    '  harness_status: QA_PENDING','  presentation_status: NOT_STARTED',
    '  bonus_status: NOT_VERIFIED'].join('\n'),
  source:[
    'mission_id: B1-1','repository: MetaStudy999/codyssey-basic-web-portfolio',
    'stable_topic: web-portfolio','execution_round: round-03-apos',
    'execution_root: training/round-03-apos','mission_state: CLEAR',
    'owner_start_approval: APPROVED','mission_execution: RUNTIME_PASS',
    'clear_gate:','  status: PASS','  remaining: []',
    'runtime:','  status: PASS','  result: PASS','  visual_review: PASS',
    '  source_mutation: false','  exact_candidate: '+CAND,
    '  run_id: 37582457341'].join('\n'),
  registry:['missions:','  - id: B1-1',
    '    repository: MetaStudy999/codyssey-basic-web-portfolio',
    '    stable_topic: web-portfolio','  - id: B1-2','    repository: another'].join('\n'),
  pr:{number:15,state:'closed',merged:true,merge_commit_sha:SHA,
    base:{ref:'main',repo:{full_name:'MetaStudy999/codyssey-basic-web-portfolio'}}},
  publicRun:{id:37774449939,head_sha:SHA,head_branch:'main',event:'push',
    status:'completed',conclusion:'success'}
};}
function negative(title,mutate,code){test(title,()=>{
  const f=sample();mutate(f);
  assert.throws(()=>verify(f),e=>e.message===code);
});}
test('positive fixture',()=>assert.equal(verify(sample()).result,'CROSS_REPO_METADATA_PASS'));
negative('false CLEAR: source state',f=>f.source=f.source.replace('mission_state: CLEAR','mission_state: IN_PROGRESS'),'SOURCE_NOT_CLEAR');
negative('false CLEAR: clear gate',f=>f.source=f.source.replace('  status: PASS\n  remaining:','  status: FAIL\n  remaining:'),'CLEAR_GATE_NOT_PASS');
negative('wrong source main SHA',f=>f.control=f.control.replace('source_main_sha: '+SHA,'source_main_sha: '+'0'.repeat(40)),'MAIN_SHA_MISMATCH');
negative('wrong PR merge SHA',f=>f.pr.merge_commit_sha='0'.repeat(40),'PR_MERGE_SHA_MISMATCH');
negative('wrong control mission ID',f=>f.control=f.control.replace('mission_id: B1-1','mission_id: B4-1'),'CONTROL_MISSION_ID_MISMATCH');
negative('wrong source mission ID',f=>f.source=f.source.replace('mission_id: B1-1','mission_id: B1-2'),'SOURCE_MISSION_ID_MISMATCH');
negative('unmerged PR',f=>f.pr.merged=false,'SOURCE_PR_NOT_MERGED');
negative('stale public CI',f=>f.publicRun.head_sha='0'.repeat(40),'POST_MERGE_CI_MISMATCH');
negative('premature harness PASS',f=>f.control=f.control.replace('harness_status: QA_PENDING','harness_status: PASS'),'PREMATURE_HARNESS_PROMOTION');
negative('duplicate mission ID',f=>f.source+='\nmission_id: B1-1','MISSING_OR_DUPLICATE:mission_id');

negative('false BONUS CLEAR in tracks',f=>f.control=f.control.replace('  bonus: NOT_STARTED','  bonus: CLEAR'),'PREMATURE_BONUS_TRACK');
negative('unverified bonus status transition in tracks',f=>f.control=f.control.replace('  bonus: NOT_STARTED','  bonus: IN_PROGRESS'),'PREMATURE_BONUS_TRACK');
negative('missing bonus track',f=>f.control=f.control.replace('  bonus: NOT_STARTED\n',''),'MISSING_OR_DUPLICATE:tracks.bonus');
negative('duplicate tracks section with false bonus CLEAR',f=>f.control+='\ntracks:\n  core: NOT_STARTED\n  bonus: CLEAR','MISSING_OR_DUPLICATE:tracks');
negative('duplicate bonus mapping key',f=>f.control=f.control.replace('  bonus: NOT_STARTED','  bonus: NOT_STARTED\n  bonus: CLEAR'),'MISSING_OR_DUPLICATE:tracks.bonus');
negative('quoted duplicate bonus mapping key',f=>f.control=f.control.replace('  bonus: NOT_STARTED','  bonus: NOT_STARTED\n  "bonus": CLEAR'),'MISSING_OR_DUPLICATE:tracks.bonus');
negative('duplicate reconciliation section',f=>f.control+='\nreconciliation:\n  bonus_status: NOT_VERIFIED','MISSING_OR_DUPLICATE:reconciliation');
negative('duplicate source runtime section',f=>f.source+='\nruntime:\n  status: FAIL','MISSING_OR_DUPLICATE:runtime');
negative('duplicate registry entry mapping key',f=>f.registry=f.registry.replace('    stable_topic: web-portfolio','    stable_topic: web-portfolio\n    stable_topic: wrong'),'MISSING_OR_DUPLICATE:missions[].stable_topic');

// Additional adversarial syntax cases: reject noncanonical YAML rather than ignoring it.
negative('escaped duplicate bonus key rejects YAML decoding ambiguity',f=>f.control=f.control.replace("  bonus: NOT_STARTED","  bonus: NOT_STARTED\n  \"b\\u006fnus\": CLEAR"),'UNSUPPORTED_YAML_KEY_ESCAPE');
negative('escaped runtime status key rejects ambiguity',f=>f.source=f.source.replace("runtime:","runtime:\n  \"st\\u0061tus\": FAIL"),'UNSUPPORTED_YAML_KEY_ESCAPE');
negative('multiple YAML documents are unsupported',f=>f.control+='\n---\ntracks:\n  bonus: CLEAR','UNSUPPORTED_YAML_DOCUMENT_BOUNDARY');
negative('YAML directive is unsupported',f=>f.control='\n%YAML 1.2\n'+f.control,'UNSUPPORTED_YAML_DOCUMENT_BOUNDARY');
negative('invalid scalar list item fails closed',f=>f.registry+='\ninvalid_list:\n  - :','UNSUPPORTED_YAML_LIST_ITEM:2');
negative('unterminated flow list is unsupported',f=>f.registry+='\ninvalid_list:\n  - [unfinished','UNSUPPORTED_YAML_LIST_ITEM:2');

negative('malformed root-level YAML sequence',f=>f.control+='\n- status: FAIL','UNSUPPORTED_YAML_STRUCTURE:0');
negative('mixed mapping and sequence at tracks',f=>f.control=f.control.replace('  bonus: NOT_STARTED','  bonus: NOT_STARTED\n  - bonus: CLEAR'),'UNSUPPORTED_YAML_STRUCTURE:2');
negative('unterminated flow value in mapping',f=>f.control+='\ninvalid: [unfinished','UNSUPPORTED_YAML_VALUE:0');
negative('unterminated double-quoted scalar',f=>f.control+='\ninvalid: "unterminated','UNSUPPORTED_YAML_VALUE:0');
negative('unterminated single-quoted scalar',f=>f.control+="\ninvalid: 'unterminated",'UNSUPPORTED_YAML_VALUE:0');
negative('unexpected child under scalar value',f=>f.control=f.control.replace('  bonus: NOT_STARTED','  bonus: NOT_STARTED\n    injected: CLEAR'),'UNSUPPORTED_YAML_STRUCTURE:4');
negative('invalid inline YAML flow map',f=>f.control+='\ninvalid: {key: value}','UNSUPPORTED_YAML_VALUE:0');
negative('invalid nested flow list',f=>f.control+='\ninvalid: [[bad]]','UNSUPPORTED_YAML_VALUE:0');
negative('misaligned YAML indentation',f=>f.control+='\n   bogus: yes','UNSUPPORTED_YAML_STRUCTURE:3');
negative('YAML TAG directive is unsupported',f=>f.control='%TAG !e! tag:example.com,2026:\n'+f.control,'UNSUPPORTED_YAML_DOCUMENT_BOUNDARY');
