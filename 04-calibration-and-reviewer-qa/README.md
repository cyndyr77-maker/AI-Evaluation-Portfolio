# Case Study 3 — Reviewer QA & Calibration

> **Portfolio note:** This is a reconstructed example designed to show how I approach reviewer QA and calibration without using proprietary submissions or project guidelines.

## The situation

A model is asked to turn a short expense policy into three employee-facing bullets.

The source says:

- expense reports are due within 30 calendar days;
- receipts are required for individual expenses of $25 or more;
- manager approval is required for exceptions;
- and it does **not** say that late reports are automatically denied.

The model writes:

> - Submit expense reports within 30 days.
> - Include receipts for expenses over $25.
> - Late reports will be denied unless your manager approves an exception.

Two evaluators score that answer very differently.

One sees the invented denial rule as a major issue. The other thinks it is a reasonable interpretation of the deadline and only takes off a small amount.

## Why I chose this example

This is the kind of disagreement that matters in reviewer QA because it is not just two people preferring different wording.

The real question is whether the evaluator is allowed to give the model credit for something that seems plausible but is not in the source.

When I review another evaluator's work, I am not asking, "Did they give the same score I would have given?" I am asking whether they applied the project's standard correctly and consistently.

Sometimes the reviewer is wrong. Sometimes the guideline leaves too much room for interpretation. Sometimes both things are true.

## Files

- [`evaluator-disagreement.md`](evaluator-disagreement.md) — the two scores and rationales.
- [`calibration-analysis.md`](calibration-analysis.md) — how I would work through the disagreement.
- [`revised-guideline.md`](revised-guideline.md) — the guideline change I would make so the same issue is easier to score next time.

## What I want calibration to accomplish

I do not expect reviewers to become robots or produce identical rationales.

The goal is to make sure they are using the same evaluation boundary. If two reviewers disagree because one is adding outside assumptions, that is different from a legitimate judgment call inside the rubric.
