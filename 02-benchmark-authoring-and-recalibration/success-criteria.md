# Success Criteria & Rubric

I would write the scoring rules before I looked at the model answer. Otherwise it is too easy to start moving the standard around based on what the model happened to do.

## Version 1 — 100 points

| Area | Points | What I am looking for |
|---|---:|---|
| FAA source use | 20 | Uses official FAA sources and makes that clear |
| Field accuracy | 35 | Requested fields match the FAA record I used for the golden answer |
| Missing information | 15 | Does not make up a value when the FAA field is blank or unavailable |
| Instruction following | 15 | Gives all requested fields and leaves out owner/address information |
| Source support | 15 | I can tell which source supports the information being reported |
| **Total** | **100** | |

### Version 1 scoring

**90–100:** Strong pass. Correct, complete, properly sourced and no filling in missing information.

**75–89:** Pass. Maybe a smaller omission or source-labeling problem, but nothing that changes the answer.

**60–74:** Borderline. Some correct research, but important information is wrong, missing or not well supported.

**Below 60:** Fail. Wrong source, wrong aircraft, made-up values or the task wasn't completed.

## Things I would treat as serious problems

- Using a third-party aircraft site when the prompt specifically requires FAA sources.
- Pulling the record for the wrong N-number.
- Filling a blank FAA field from somewhere else and presenting it like it came from the FAA.
- Including the owner's name or address after being told not to.
- Giving a citation that doesn't actually support the field or claim.

A response can be beautifully written and still have one of those problems.

---

# Version 2 — After recalibration

Once I add the interpretation questions, I would change the scoring. I don't want to keep giving most of the points for simple retrieval when that isn't the hardest part of the new task.

| Area | Points | What I am looking for |
|---|---:|---|
| Current record accuracy | 20 | Correct current FAA registration fields |
| Reference data | 15 | Uses the aircraft/engine reference information correctly and doesn't claim it proves more than it does |
| Evidence questions | 30 | Gets the Supported / Not Supported / Cannot Determine questions right and explains why |
| FAA source use | 15 | Uses official FAA information and keeps the different source types straight |
| Blank fields | 10 | Understands that a field can legitimately be blank |
| Instruction following | 10 | Complete answer, correct labels and no owner/address information |
| **Total** | **100** | |

## What I expect on the evidence questions

### 1. Is the aircraft currently registered in the United States?

If the current FAA record shows a valid/current registration status, **Supported** makes sense. I want the model to use the current registration record for that answer, not a general aircraft reference page.

### 2. Was the aircraft manufactured in the same year the current registration certificate was issued?

The model needs to compare the actual dates. I don't want it assuming those two dates should match just because they both appear in the record.

### 3. Does the engine reference prove the exact engine currently installed on this aircraft?

This is where I want the model to be careful.

Reference information associated with a make/model is not automatically proof that I could walk up to this exact aircraft today and find that exact engine installed in it.

If the model turns reference data into a fact about the current physical aircraft without evidence, I would take off substantial points.

### 4. Does a blank permissible field mean the FAA record is wrong?

**Not Supported.** FAA documentation allows some information to be blank. Blank does not automatically mean error.

## Right label, wrong reason

I would score the reasoning separately from the final label.

If the model says **Not Supported** but gives a reason that doesn't make sense, I wouldn't give full credit just because it happened to choose the right label.

On the other hand, I also wouldn't treat a small wording issue the same as making up a fact when the model clearly understood the evidence.

## The golden answer doesn't have to be copied word for word

I care about whether the model gets the same facts and reaches the same supported conclusions, not whether it uses my exact sentence structure.

I would allow different wording and organization as long as the facts match the FAA record I locked for the task, the sources really support the claims and the model handles uncertainty correctly.

## Locking the answer

FAA registration information can change, so I would save the date I pulled the record and the exact values I used for the golden answer.

If the live FAA record changes later, that shouldn't suddenly make a model response that was correct on the test date wrong.