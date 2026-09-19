# Illustrative scoring and recalibration

**Provenance:** The responses below are authored examples, not observed model outputs.

## Example A — Version 1
Response: exactly the Version 1 table in the [reference response](reference-response.md).

Score: 8 × 10 for fields + 10 for source labels + 10 for source discipline = **100/100**.

This demonstrates a passing answer. It does not prove that a particular model passed or that the task is easy.

## Example B — Version 2
Retrieval response: exactly the Version 1 table in the reference response.

Evidence responses:
1. Supported — S1 lists U.S. jurisdiction and active status on 2026-09-01.
2. Contradicted — S1 gives manufacture in 2016 and certificate issue in 2024.
3. Supported — S2's E2 reference proves the engine is installed.
4. Supported — a blank field means the record is invalid.
5. Insufficient evidence — S3 says registration status does not certify current airworthiness.

| Component | Score | Reason |
|---|---:|---|
| Eight retrieval fields | 40/40 | All correct |
| Claim 1 | 10/10 | Correct label and source-specific explanation |
| Claim 2 | 10/10 | Correct label and date comparison |
| Claim 3 | 0/10 | Reference information is overstated |
| Claim 4 | 0/10 | Contradicts the explicit optional-field rule |
| Claim 5 | 10/10 | Correct evidence boundary |
| Source discipline | 0/10 | Adds unsupported installation and validity claims |
| **Raw total** | **70/100** | |
| **Final total** | **59/100** | Installed-engine overclaim triggers the cap |

## What the example demonstrates
A response can retrieve all fields correctly and still fail the interpretation task. The rubric makes the consequence explicit before scoring.

## What it does not demonstrate
There is no measured failure rate, model ranking, or before/after improvement. Those require actual runs. A future test should also check whether independent reviewers apply the labels and point rules consistently.
