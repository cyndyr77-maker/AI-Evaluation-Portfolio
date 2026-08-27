# Model Testing & Recalibration

This example is a little different from a standard failure analysis because the **first model response passes**.

That is intentional. It reflects an important part of benchmark authoring: sometimes the model gets the task right, and the next question is whether the task is still doing enough useful work.

## Test 1 — Model passes

Assume the model uses the FAA Aircraft Registry, returns the correct N-number, manufacturer, model, serial number, manufacture year, registration status, and expiration field, identifies the FAA source, leaves an unavailable field blank rather than inventing it, and does not include owner information.

### Example score

| Area | Score | Max |
|---|---:|---:|
| FAA source use | 20 | 20 |
| Field accuracy | 35 | 35 |
| Missing-data handling | 15 | 15 |
| Instruction following | 15 | 15 |
| Source-to-claim traceability | 15 | 15 |
| **Total** | **100** | **100** |

**Result: Pass**

There is nothing to "find wrong" with the response just because I am building a benchmark. If it meets the criteria, it passes.

## What I would do next

I would look at the purpose of the task and the results across multiple model runs.

If one model passes once, that does not automatically mean the task is too easy.

If several capable models consistently retrieve the fields correctly with little variation, however, I would ask whether the item is mostly testing database lookup rather than the harder evaluation capability I want.

That is where I would recalibrate.

## Recalibration decision

I would keep the FAA research requirement but add evidence interpretation.

The revised task asks the model to separate:

- the current aircraft registration record;
- FAA make/model and engine reference information;
- and conclusions that the available data does or does not support.

I also add a blank-field edge case based on the FAA's own documentation. The FAA notes that some permissible data may be blank and that those blanks should not automatically be considered errors.

That creates a better reasoning test without making the prompt artificially confusing.

---

# Test 2 — Example failure after recalibration

A model could retrieve all of the visible aircraft fields correctly and still fail the harder version with reasoning like this:

> The FAA reference record lists engine model X for this aircraft model, so the individual aircraft currently has engine model X installed. The blank supplemental field also appears to be a database error because a complete registration record should contain a value in every field.

The response may look well researched because it uses the FAA and gets the basic aircraft identity right.

I would still flag two problems.

## Failure 1 — Reference data is overstated

The model has moved from **reference information associated with an aircraft make/model** to a claim about the exact physical engine currently installed on one individual aircraft.

Unless the source used in the task establishes that fact, the conclusion goes beyond the evidence.

This is a more interesting failure than simply using the wrong website because the model has the right source but uses the source incorrectly.

## Failure 2 — Blank field is treated as an error

The FAA's database documentation explains that some permissible fields may be blank. The model therefore should not declare the record erroneous just because one of those fields has no value.

This tests whether the model actually read and applied the source documentation rather than assuming every blank is a data-quality problem.

## Example Version 2 score

| Area | Score | Max |
|---|---:|---:|
| Current-record accuracy | 20 | 20 |
| Reference-data use | 6 | 15 |
| Evidence-check reasoning | 12 | 30 |
| Source discipline | 15 | 15 |
| Missing/blank-field handling | 2 | 10 |
| Instruction following | 10 | 10 |
| **Total** | **65** | **100** |

**Result: Borderline / does not meet the strong-pass standard**

The important point is that I would not erase the work the model got right. It still receives full credit for current-record accuracy and source discipline. The failure is specifically in interpretation.

## What I would learn from the second test

If this type of error appears across models, the revised item is exposing the behavior I intended: the difference between **finding authoritative information** and **reasoning correctly about what that information proves**.

If reviewers disagree about the engine-reference question, I would revisit the rubric and FAA field documentation before blaming the reviewers. The answer key needs to be just as defensible as the model score.

If every model also passes Version 2, I could build another edge case. If nearly every model fails because the task requires undocumented aviation expertise, I have gone too far and would revise it back.

That back-and-forth is part of the work. Recalibration is not about making sure the model eventually fails. It is about getting the task to measure the capability I actually intended to test.
