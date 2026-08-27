# Evaluator Disagreement

## Evaluation task

The model is asked to summarize the following policy into three employee-facing bullets without adding information that is not stated.

### Source policy

- Expense reports must be submitted within **30 calendar days**.
- Receipts are required for **individual expenses of $25 or more**.
- Exceptions require **manager approval**.
- The policy does **not** state an automatic consequence for late submissions.

### Model output

> - Submit expense reports within 30 days.
> - Include receipts for expenses over $25.
> - Late reports will be denied unless your manager approves an exception.

## Evaluator 1

**Score: 2/5 — Major issue**

Rationale:

> The response invents a denial policy that is not present in the source. Because employees could rely on the summary to understand what happens when they submit late, the unsupported consequence is materially misleading.

## Evaluator 2

**Score: 4/5 — Minor issue**

Rationale:

> The summary captures the key requirements. Saying late reports will be denied is a reasonable interpretation of a 30-day deadline, and the response still mentions manager approval for exceptions.

## Why this disagreement matters

The score difference is not just normal reviewer preference.

Evaluator 2 has introduced an additional rule:

> A deadline implies automatic denial after the deadline.

That rule does not appear in the source or the evaluation instructions.

The disagreement therefore raises two QA questions:

1. Is one evaluator applying the standard incorrectly?
2. Is the current guideline explicit enough about unsupported consequences?

Those questions are addressed in the calibration analysis.
