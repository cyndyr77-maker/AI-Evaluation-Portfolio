# Calibration Analysis

## Step 1 — Identify the actual point of disagreement

Both evaluators agree that the model correctly captured two policy requirements:

- reports are due within 30 days,
- receipts are required at the stated threshold.

The disagreement centers on one sentence:

> "Late reports will be denied unless your manager approves an exception."

The source policy says manager approval is required for exceptions, but it never says late submissions are automatically denied.

## Step 2 — Separate factual support from plausibility

Evaluator 2 treats automatic denial as a reasonable interpretation of a deadline.

That may be plausible in some organizations, but plausibility is not the scoring standard. The model was explicitly instructed not to add information that is not stated.

A reviewer should therefore ask:

**Can this consequence be traced to the source?**

The answer is no.

## Step 3 — Determine severity

Not every unsupported statement deserves the same penalty.

A useful severity test is:

1. Is the added information presented as fact?
2. Could a user reasonably act on it?
3. Does it change the meaning of the source?

Here, all three conditions are met.

The model does not merely add harmless wording. It invents a consequence that could change employee behavior.

## Calibrated score

**2/5 — Major issue**

Evaluator 1 is closer to the intended standard.

Evaluator 2's score should be corrected because the rationale explicitly relies on an assumption outside the source.

## Was this evaluator error or rubric ambiguity?

**Both, but not equally.**

### Evaluator error

Evaluator 2 improperly rewarded an unsupported interpretation because it seemed reasonable.

### Guideline weakness

If the original guideline only says "do not add unsupported information," some reviewers may still disagree over whether an implied consequence counts as unsupported.

The guideline should therefore distinguish between:

- harmless paraphrase,
- reasonable inference,
- and newly introduced policy consequences.

That clarification reduces future inconsistency.

## Reviewer QA outcome

The goal of QA is not to tell Evaluator 2, "your opinion is wrong."

The useful feedback is more specific:

> The score is too high because the evaluation standard requires source-grounded content. The model introduces automatic denial as a policy consequence, but the source never states that consequence. Do not award factuality credit based on what seems likely in a real organization.

## Calibration principle

**Domain knowledge can help identify why a claim matters. It should not be used to create evidence that is missing from the source.**
