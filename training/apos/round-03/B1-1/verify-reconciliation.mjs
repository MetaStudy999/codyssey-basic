#!/usr/bin/env node
// Cross-repo B1-1 facts: fail closed on any disagreement. No dependencies.
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
const REPO = 'MetaStudy999/codyssey-basic-web-portfolio';
const PR = 15, RUN = 37774449939;
function insist(ok, code){if(!ok) throw Error(code);}
export function get(yaml,path){
  const [section,key] = path.includes('.') ? path.split('.') : [null,path];
  const lines=yaml.split(/\r?\n/);
  let scope=lines;
  if(section){
    const start=lines.findIndex(l=>l===section+':');
    insist(start>=0,'MISSING_SECTION:'+section);
    const end=lines.findIndex((l,i)=>i>start && /^\S/.test(l) && !l.startsWith('#'));
    scope=lines.slice(start,end<0?undefined:end);
  }
  const matches=scope.map(l=>l.match(new RegExp('^'+(section?'  ':'')+key+':\\s*(.*?)\\s*$'))).filter(Boolean);
  insist(matches.length===1 && matches[0][1]!=='','MISSING_OR_DUPLICATE:'+path);
  return matches[0][1].trim().replace(/^["']|["']$/g,'');
}
function eq(yaml,key,want,code){insist(get(yaml,key)===String(want),code);}
export function verify({control,source,registry,mainSha,pr,publicRun}){
  const sha=/^[a-f0-9]{40}$/;
  insist(sha.test(mainSha),'MAIN_SHA_INVALID');
  eq(control,'reconciliation.source_main_sha',mainSha,'MAIN_SHA_MISMATCH');
  eq(control,'mission_id','B1-1','CONTROL_MISSION_ID_MISMATCH');
  eq(source,'mission_id','B1-1','SOURCE_MISSION_ID_MISMATCH');
  eq(control,'canonical_repository',REPO,'CONTROL_REPO_MISMATCH');
  eq(control,'reconciliation.source_repository',REPO,'WITNESS_REPO_MISMATCH');
  eq(source,'repository',REPO,'SOURCE_REPO_MISMATCH');
  for(const [left,right,code] of [
    ['stable_topic','stable_topic','TOPIC_MISMATCH'],
    ['execution_round','execution_round','ROUND_MISMATCH'],
    ['execution_root','execution_root','ROOT_MISMATCH']]){
    eq(control,left,get(source,right),code);
  }
  eq(control,'stable_topic','web-portfolio','TOPIC_NOT_B1_1');
  eq(control,'execution_round','round-03-apos','ROUND_NOT_03');
  eq(control,'execution_root','training/round-03-apos','ROOT_NOT_ROUND03');
  const part=registry.match(/^  - id: B1-1\s*\n((?:^(?!  - id:).*\n?)*)/m)?.[1]??'';
  insist(/^\s{4}repository: MetaStudy999\/codyssey-basic-web-portfolio$/m.test(part)
    && /^\s{4}stable_topic: web-portfolio$/m.test(part),'REGISTRY_IDENTITY_MISMATCH');
  eq(control,'status','CLEAR','FALSE_CONTROL_CLEAR');
  eq(control,'tracks.core','CLEAR','FALSE_CORE_CLEAR');
  eq(control,'reconciliation.core_clear','PASS','FALSE_CLEAR_WITNESS');
  eq(control,'owner_start_approval','APPROVED','CONTROL_APPROVAL_MISMATCH');
  eq(control,'mission_execution','RUNTIME_PASS','CONTROL_EXECUTION_MISMATCH');
  eq(source,'mission_state','CLEAR','SOURCE_NOT_CLEAR');
  eq(source,'owner_start_approval','APPROVED','SOURCE_APPROVAL_MISMATCH');
  eq(source,'mission_execution','RUNTIME_PASS','SOURCE_EXECUTION_MISMATCH');
  eq(source,'clear_gate.status','PASS','CLEAR_GATE_NOT_PASS');
  eq(source,'clear_gate.remaining','[]','CLEAR_REMAINING_WORK');
  eq(source,'runtime.status','PASS','RUNTIME_STATUS_INVALID');
  eq(source,'runtime.result','PASS','RUNTIME_RESULT_INVALID');
  eq(source,'runtime.visual_review','PASS','VISUAL_NOT_PASS');
  eq(source,'runtime.source_mutation','false','SOURCE_MUTATION');
  const runtimeSha=get(source,'runtime.exact_candidate');
  insist(sha.test(runtimeSha),'RUNTIME_SHA_INVALID');
  eq(control,'reconciliation.runtime_candidate_sha',runtimeSha,'RUNTIME_SHA_MISMATCH');
  eq(control,'reconciliation.chromium_run_id',get(source,'runtime.run_id'),'RUNTIME_RUN_MISMATCH');
  eq(control,'reconciliation.source_pr',PR,'CONTROL_PR_ID_MISMATCH');
  insist(pr.number===PR && pr.state==='closed' && pr.merged===true,'SOURCE_PR_NOT_MERGED');
  insist(pr.base?.ref==='main' && pr.base?.repo?.full_name===REPO,'SOURCE_PR_BASE_MISMATCH');
  insist(pr.merge_commit_sha===mainSha,'PR_MERGE_SHA_MISMATCH');
  insist(publicRun.id===RUN && publicRun.head_sha===mainSha &&
    publicRun.head_branch==='main' && publicRun.event==='push' &&
    publicRun.status==='completed' && publicRun.conclusion==='success',
    'POST_MERGE_CI_MISMATCH');
  eq(control,'reconciliation.harness_status','QA_PENDING','PREMATURE_HARNESS_PROMOTION');
  eq(control,'reconciliation.presentation_status','NOT_STARTED','PREMATURE_PRESENTATION');
  eq(control,'reconciliation.bonus_status','NOT_VERIFIED','PREMATURE_BONUS');
  return {result:'CROSS_REPO_METADATA_PASS',source_main_sha:mainSha,source_pr:PR,
    post_merge_run:RUN,not_verified:['original artifact binary integrity','independent QA_SEC',
    'harness universal capability','bonus','presentation']};
}
async function api(url){
  const headers={'Accept':'application/vnd.github+json','User-Agent':'b1-1-control-check'};
  if(process.env.GITHUB_TOKEN) headers.Authorization='Bearer '+process.env.GITHUB_TOKEN;
  const r=await fetch(url,{headers,signal:AbortSignal.timeout(15000)});
  insist(r.ok,'API_UNAVAILABLE_'+r.status);
  return r.json();
}
export async function live(){
  const endpoint='https://api.github.com/repos/'+REPO;
  const [ref,pr,publicRun]=await Promise.all([
    api(endpoint+'/git/ref/heads/main'),api(endpoint+'/pulls/'+PR),
    api(endpoint+'/actions/runs/'+RUN)]);
  const mainSha=ref?.object?.sha;
  insist(typeof mainSha==='string' && /^[a-f0-9]{40}$/.test(mainSha),'INVALID_REMOTE_MAIN');
  const response=await fetch('https://raw.githubusercontent.com/'+REPO+'/'+mainSha+
    '/training/round-03-apos/mission.yml',{signal:AbortSignal.timeout(15000)});
  insist(response.ok,'SOURCE_YAML_UNAVAILABLE_'+response.status);
  const source=await response.text();
  const control=await readFile(new URL('./mission.yml',import.meta.url),'utf8');
  const registry=await readFile(new URL('../_registry/missions.yml',import.meta.url),'utf8');
  return verify({control,source,registry,mainSha,pr,publicRun});
}
if(process.argv[1] && fileURLToPath(import.meta.url)===resolve(process.argv[1])){
  live().then(v=>console.log(JSON.stringify(v,null,2))).catch(e=>{
    console.error('FAIL_CLOSED '+e.message);process.exitCode=1;});
}
