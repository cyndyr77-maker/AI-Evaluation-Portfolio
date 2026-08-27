# Success Criteria & Rubric

I would build the scoring standard before looking at the model response. That helps prevent the rubric from being adjusted after the fact to fit whatever answer the model happened to give.

## Version 1 rubric — 100 points

| Area | Points | Full-credit standard |
|---|---:|---|
| FAA source use | 20 | Uses official FAA sources and identifies them clearly |
| Field accuracy | 35 | Requested aircraft fields match the FAA record used for the answer key |
| Missing-data handling | 15 | Does not invent values when a requested field is blank or unavailable |
| Instruction following | 15 | Returns all requested fields and excludes owner/address information |
| Source-to-claim traceability | 15 | Makes it clear where the reported information came from |
| **Total** | **100** | |

### Version 1 pass standard

**90–100:** Strong pass. Accurate, complete, properly sourced, and no unsupported filling of missing fields.

**75–89:** Pass with a smaller omission or source-labeling problem that does not change the substance.

**60–74:** Borderline. Some correct retrieval, but important fields are wrong, missing, or weakly sourced.

**Below 60:** Fail. Uses the wrong source, materially misreports the aircraft, fabricates missing values, or does not complete the task.

## What I would count as a critical error in Version 1

- Using a third-party aircraft site as the primary evidence when the prompt requires FAA sources.
- Reporting a different aircraft because the N-number was misread.
- Filling a blank FAA field from an unapproved source and presenting it as FAA data.
- Including owner name/address information despite the instruction not to.
- Giving a citation that does not support the field it is attached to.

A fluent answer with one of those problems should not receive a high score.

---

# Version 2 rubric — Recalibrated task

The revised task adds interpretation, so I would change the weights rather than simply reuse the retrieval rubric.

| Area | Points | Full-credit standard |
|---|---:|---|
| Current-record accuracy | 20 | Correctly reports the requested current FAA registration fields |
| Reference-data use | 15 | Correctly uses the FAA aircraft/engine reference information without overstating what it proves |
| Evidence-check reasoning | 30 | Correctly labels and explains the four Supported / Not Supported / Cannot Determine statements |
| Source discipline | 15 | Uses official FAA evidence and keeps source types clear |
| Missing/blank-field handling | 10 | Recognizes that an allowed blank field is not automatically an error |
| Instruction following | 10 | Complete answer, no personal owner/address information, required labels included |
| **Total** | **100** | |

## Expected reasoning on the evidence checks

### 1. Current U.S. registration

If the current FAA record shows a valid/current registration status, **Supported** is appropriate. The explanation should point to the current registration record rather than to a general make/model reference.

### 2. Manufacture year equals current certificate-issue year

The model should not assume these dates are the same simply because both appear in the record. Unless the data itself establishes that relationship for the selected aircraft, the claim should be treated according to the actual values in the answer-key record.

The important scoring point is whether the model compares the fields rather than inventing a relationship between them.

### 3. Reference engine proves the exact engine currently installed

The model should be careful here. FAA reference information associated with an aircraft make/model is not automatically proof of the exact physical engine installed on an individual aircraft at the time of the query.

A response that turns reference data into an individual-aircraft inspection fact should lose substantial points for evidence reasoning.

### 4. Blank permissible field means the record is erroneous

**Not Supported.** FAA documentation explains that permissible information may be blank and that these blanks should not automatically be considered errors.

## Partial-credit approach

I would score the reasoning separately from the final label.

For example, a model could choose the right label for the wrong reason. That should not receive full credit. Likewise, a model that clearly understands the evidence boundary but makes a minor wording mistake should not be treated the same as a model that fabricates a fact.

## Golden-answer tolerance

The golden response should define the facts and reasoning that must be present, not force exact wording.

I would allow different organization, sentence structure, and citation placement as long as:

- the facts match the locked FAA record;
- the claims are supported by the cited source;
- uncertainty is handled correctly;
- and the required reasoning is present.

## Reproducibility rule

Because FAA registration data can change, I would save the retrieval date and the specific source values used to create the golden response. A future change in the live database should not retroactively make a previously correct model response wrong.
