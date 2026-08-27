# Evaluator Disagreement

## Task

The model has to summarize this policy into three employee-facing bullets **without adding information that is not stated**.

### Source

- Expense reports must be submitted within **30 calendar days**.
- Receipts are required for **individual expenses of $25 or more**.
- Exceptions require **manager approval**.
- The policy does **not** give an automatic consequence for submitting late.

### Model answer

> - Submit expense reports within 30 days.
> - Include receipts for expenses of $25 or more.
> - Late reports will be denied unless your manager approves an exception.

## Evaluator 1

**2/5 — Major issue**

> The response invents a denial policy that is not in the source. An employee reading this could reasonably believe automatic denial is the actual policy, so the added information is material.

## Evaluator 2

**4/5 — Minor issue**

> The response captures the main requirements. A 30-day deadline reasonably implies that late reports would be denied, and the model still mentions manager approval for exceptions.

## Why I would send this to calibration

The two-point difference is not really about writing quality. Both evaluators can see that most of the summary is correct.

The disagreement is over whether this statement is allowed:

> A 30-day deadline implies automatic denial after 30 days.

That rule is not in the source.

So I would want calibration to answer two things:

1. Did Evaluator 2 add an assumption that the evaluation standard does not allow?
2. Is the guideline clear enough about the difference between a harmless inference and a newly invented policy consequence?

That distinction matters more than simply deciding which reviewer "wins" the score disagreement.