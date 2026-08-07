# Mission Handoff

> Mission Workcell 완료 결과를 대표 Repository의 Serial Integration 단계로 전달하기 위한 사람용 요약 계약이다.

## 1. Mission

- Mission ID: `<B?-?>`
- Mission Repository: `<OWNER/REPO>`
- Control Tower Baseline SHA: `<SHA>`
- Mission Final Commit: `<SHA>`
- Pull Request: `<URL>`
- Merge Status: `<OPEN / MERGED / NOT-REQUIRED>`

## 2. Source Result

- Source Mode: `<MODE>`
- Source Confidence: `<HIGH / MEDIUM / LOW>`
- Mission Source: `<STATE + LOCATION>`
- Evaluation Source: `<STATE + LOCATION>`
- Remaining Source Gaps:
  - `<NONE or GAP>`

## 3. Final Verdict

- Execution Status: `<TODO / IMPLEMENTED / TESTED / PASS / NEEDS-RUNTIME / BLOCKED>`
- Learning Status: `<NOT-STUDIED / PRACTICED / EXPLAINABLE / MASTERED>`
- Current Gate: `<G1...G8>`
- Verdict: `<ACCEPT / PARTIAL / NEEDS-RUNTIME / BLOCKED / REJECT>`

## 4. Gate Result

| Gate | Status | Evidence / Note |
|---|---|---|
| G1 SOURCE | | |
| G2 BUILD | | |
| G3 TEST | | |
| G4 REVIEW | | |
| G5 RUNTIME | | |
| G6 EVIDENCE | | |
| G7 LEARN | | |
| G8 MERGE | | |

## 5. Requirement Summary

- Confirmed Requirements: `<N>`
- Passed: `<N>`
- Partial: `<N>`
- Failed: `<N>`
- Unverified due to Source Gap: `<N>`

### Outstanding Requirement

- `<NONE or ITEM>`

## 6. Validation

- Automated / Reliable Tests: `<PASS / FAIL / NOT-APPLICABLE>`
- Test Command(s): `<COMMAND>`
- BLOCKER: `<0+>`
- MAJOR: `<0+>`
- MINOR: `<0+>`

## 7. Runtime

- Runtime Required: `<YES / NO>`
- Runtime Owner: `<AI / HUMAN>`
- Runtime Result: `<PASS / NEEDS-RUNTIME / FAIL / N/A>`
- Runtime Notes: `<NOTE>`

## 8. Evidence

- Evidence Complete: `<YES / PARTIAL / NO>`
- Evidence Location: `<PATH/URL>`
- Missing Evidence: `<NONE or ITEM>`

## 9. Changes

### Main Changed Files

- `<PATH>` — `<WHY>`

### Architecture / Behavior Change

- `<SUMMARY>`

## 10. Learning

- Key Concepts Practiced: `<ITEMS>`
- Explainable Topics: `<ITEMS>`
- Remaining Learning Gap: `<NONE or ITEM>`

## 11. Risks / Backlog

- Required before representative integration: `<NONE or ITEM>`
- Advanced / Optional backlog: `<NONE or ITEM>`
- Cross-Mission conflict: `<NONE or DESCRIPTION>`
- Control Tower Drift: `<NONE or DESCRIPTION>`

## 12. Representative Repository Integration Request

- Integration Required: `YES`
- Integration Order: `<B1-1 → ... → B7-2 기준 위치>`
- Requested Control Tower Update:
  - `config/missions.yaml` status
  - current gate / gate states
  - learning status
- Do not directly edit generated README / progress / site JSON.

## 13. Reproduction

대표 통합 채팅이 결과를 재검증할 최소 절차:

```bash
<COMMANDS>
```

## 14. Final Handoff Statement

`<이 Mission이 대표 Repository에 반영 가능한지 한 문장으로 명확하게 작성>`
