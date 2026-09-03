# Case Study 4 — Reviewer QA & Calibration

> **Portfolio note:** This is a reconstructed example showing how I approach reviewer QA and calibration without using proprietary submissions or project guidelines.

## The situation

A model is asked to turn a short expense policy into three employee-facing bullets.

The source says:

- expense reports are due within 30 calendar days;
- receipts are required for individual expenses of $25 or more;
- manager approval is required for exceptions;
- and it does **not** say that late reports are automatically denied.

The model writes:

> - Submit expense reports within 30 days.
> - Include receipts for expenses of $25 or more.
> - Late reports will be denied unless your manager approves an exception.

Two evaluators score the answer very differently.

One sees the made-up denial rule as a major issue. The other thinks it is a reasonable interpretation of the deadline and only takes off a little.

## Why I used this example

This is the kind of reviewer disagreement I think is worth calibrating because it isn't just two people preferring different wording.

The real question is whether a reviewer can give the model credit for something that seems logical but isn't actually in the source.

When I review another evaluator's work, I am not looking for them to give the exact score I would give every time. I want to know whether they used the project's standard correctly and consistently.

Sometimes the reviewer is wrong. Sometimes the guideline leaves too much room for interpretation. Sometimes both things are true.

## Files

- [`evaluator-disagreement.md`](evaluator-disagreement.md) — the two scores and why the reviewers disagreed.
- [`calibration-analysis.md`](calibration-analysis.md) — how I would work through it.
- [`revised-guideline.md`](revised-guideline.md) — what I would change in the guideline so the same issue is easier to score next time.

## What I want calibration to do

I don't expect reviewers to become robots or write identical rationales.

I just want them working from the same line.

If two reviewers disagree because one of them is filling in information from their own experience, that is different from two reviewers making a legitimate judgment call inside the rubric.