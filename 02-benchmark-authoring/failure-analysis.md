# Failure Analysis & Task Refinement

## Model test output

> I recommend Vendor A because it is the most cost-effective choice and still provides enough capacity for all 220 attendees. Since the proposal includes round-trip transportation, it is reasonable to assume the same coaches can handle both departure waves and return for pickup later in the evening. The company would save $1,400 compared with Vendor B without sacrificing the core transportation need.
>
> The tradeoff is that gratuity is not listed, so there may be an extra charge. Before signing, I would confirm the gratuity amount.

## Score

| Criterion | Score | Max |
|---|---:|---:|
| Recommendation | 7 | 20 |
| Evidence use | 8 | 25 |
| Operational reasoning | 8 | 20 |
| Required elements | 17 | 20 |
| Uncertainty handling | 5 | 15 |
| **Total** | **45** | **100** |

**Result: Fail**

---

# What failed

The response looks practical on the surface. It mentions capacity, savings, a tradeoff, and a contracting question. The core problem is that it resolves missing information in Vendor A's favor without evidence.

The sentence below contains the central failure:

> "it is reasonable to assume the same coaches can handle both departure waves and return for pickup later in the evening"

The prompt does not confirm how Vendor A intends to operate the vehicles between the outbound and return portions of the event.

## Failure category 1 — Unsupported assumption

The model converts an unresolved operating detail into a favorable assumption and then uses that assumption to support its recommendation.

This is more serious than a minor factual embellishment because it changes the decision.

## Failure category 2 — Price-only optimization

The answer gives strong weight to the $1,400 savings but does not adequately account for the fact that Vendor B is the only proposal that explicitly confirms both outbound waves and the complete return-service window.

## Failure category 3 — Incomplete uncertainty handling

The answer notices that gratuity is missing but overlooks the more consequential missing information: how Vendor A will support the required operating schedule.

This demonstrates why simply identifying **an** unknown is not enough. The model must identify the unknown that matters most to the task.

---

# Why the failure matters

In a real operating environment, a cheaper proposal can become the riskier option if the service plan is not actually confirmed.

The issue is not that Vendor A is necessarily unable to perform the work. The issue is that the model **does not know that it can** based on the evidence provided.

That distinction is the capability this benchmark is intended to measure.

---

# Task refinement after testing

## Initial version

An earlier draft of the benchmark asked only:

> Which vendor is best and why?

That version was too open-ended. A model could produce a generic comparison without demonstrating whether it understood the evidence boundary.

## Refined version

The final prompt adds:

> Base the recommendation only on the information provided.

It also requires:

- one recommendation,
- two reasons,
- one tradeoff,
- and one item that still needs confirmation.

These changes make the intended capability easier to observe and score.

## Why the task was not made more complicated

A benchmark should not become difficult through unnecessary detail. Adding more vendors, longer proposals, or irrelevant contract terms could increase cognitive load without improving measurement of the target behavior.

The refined task keeps the challenge focused on one question:

**Can the model make a useful recommendation without converting missing facts into convenient assumptions?**

---

# Validation considerations

Before treating this as a production benchmark item, I would validate it through repeated model and reviewer testing.

## Model validation

Test multiple model outputs to determine whether the item produces meaningful variation such as:

- selecting Vendor B for evidence-based reasons,
- selecting Vendor A based on price,
- selecting Vendor C while treating missing schedule confirmation incorrectly,
- refusing to recommend any vendor because information is incomplete,
- inventing common transportation practices.

If nearly every model passes for the same obvious reason, the item may not be sufficiently discriminating.

If strong models fail because the wording is confusing rather than because of the intended reasoning challenge, the task should be revised.

## Reviewer validation

Have multiple evaluators independently score the same outputs and compare disagreements.

Key calibration questions:

- Do reviewers agree on what counts as a material unsupported assumption?
- Do they distinguish "not confirmed" from "not available"?
- Do they apply the same standard when an assumption seems plausible?
- Are the scoring anchors specific enough to prevent writing quality from dominating the evaluation?

## Benchmark-authoring principle

A task is not finished when the prompt is written.

It is finished when the intended capability is observable, the failure modes are meaningful, the scoring standard is usable, and testing shows that the item measures what it was designed to measure.
