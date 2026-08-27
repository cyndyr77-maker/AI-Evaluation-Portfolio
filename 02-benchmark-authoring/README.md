# Case Study 2 — Benchmark Authoring

> **Portfolio note:** This is a reconstructed benchmark exercise. It reflects the kind of task-development and evaluation work I have done, but it does not reproduce proprietary project material.

## What I wanted this task to test

For this example, I wanted to test something models do fairly often: fill in missing information because the missing answer seems obvious or likely.

The scenario uses conference transportation. Three coach vendors have submitted preliminary proposals for a 220-person group. None of the proposals is presented as obviously terrible, but they do not all confirm the same operating details.

The model still has to make a recommendation. The point is to see whether it can do that without turning an unknown into a fact.

## Why I used this scenario

This type of task is useful because a weak response can sound completely practical.

A model might say, for example, that the cheapest vendor is fine because four coaches have enough seats. That is true as far as capacity goes, but capacity is not the only issue. The group has two outbound departure waves and a specific return window. If the proposal does not confirm how that schedule will be covered, I do not want the model quietly assuming that it will work.

At the same time, I would not want the model to go too far in the other direction and say a vendor **cannot** provide something simply because the proposal does not mention it.

The distinction I am testing is:

**not confirmed ≠ confirmed, and not confirmed ≠ unavailable.**

## What is included

- [`benchmark-task.md`](benchmark-task.md) — the actual task and the capability I am trying to test.
- [`success-criteria.md`](success-criteria.md) — how I would score the answer and what I would count as a real failure.
- [`reference-response.md`](reference-response.md) — one example of a full-credit answer.
- [`failure-analysis.md`](failure-analysis.md) — a model answer that fails, why it fails, and how I would refine and validate the task after testing it.

## What matters to me in benchmark authoring

Writing the prompt is only part of the job.

I also want to know whether the task is actually testing the behavior I intended, whether there is enough information to score it fairly, whether multiple reviewers can apply the standard consistently, and whether a model is failing because of the targeted challenge rather than because I wrote a confusing prompt.
