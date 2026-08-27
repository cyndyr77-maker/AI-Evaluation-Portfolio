# Case Study 3 — Reviewer QA & Calibration

> **Portfolio reconstruction:** This exercise was created to demonstrate reviewer-level QA and calibration methods used in professional AI evaluation work. It does not reproduce proprietary submissions, guidelines, or client content.

## What this case study demonstrates

Reviewer QA is not simply checking whether another evaluator gave the same score I would have given.

The real question is:

**Did the evaluator apply the standard correctly, consistently, and without introducing personal assumptions?**

This case study shows two evaluators scoring the same model output differently. The disagreement is then analyzed to determine whether the problem comes from evaluator error, rubric ambiguity, or both.

## Scenario

A model is asked to summarize a short business policy into three bullets for employees.

The source policy states:

- expense reports must be submitted within 30 calendar days,
- receipts are required for individual expenses of $25 or more,
- manager approval is required for exceptions,
- the policy does not state that late submissions will automatically be denied.

The model response says:

> - Submit expense reports within 30 days.
> - Include receipts for expenses over $25.
> - Late reports will be denied unless your manager approves an exception.

Two evaluators disagree sharply on the score.

The response is concise and mostly aligned with the policy, but it introduces a consequence — automatic denial — that the source never states. The calibration problem is deciding how severe that unsupported addition should be.

## Files in this case study

- [`evaluator-disagreement.md`](evaluator-disagreement.md) — the model output and two conflicting reviewer scores.
- [`calibration-analysis.md`](calibration-analysis.md) — diagnosis of the disagreement and calibrated outcome.
- [`revised-guideline.md`](revised-guideline.md) — guideline language added to reduce future scoring inconsistency.

## Reviewer-QA principle

Calibration should not erase legitimate judgment. It should identify where evaluators are using different standards and make the evaluation boundary explicit enough that future decisions are more consistent.
