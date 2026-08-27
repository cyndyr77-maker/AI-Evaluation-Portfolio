# Case Study 1 — Rubric Design & Model Evaluation

> **Portfolio note:** I reconstructed this example to show the type of evaluation work I have done without using proprietary project content.

## The setup

For this example, a company is choosing a venue for a one-day leadership summit for **180 people**. The model has three proposals and needs to recommend one to senior leadership.

The important details are:

- The event budget is **$95,000** and has to cover venue, F&B, AV, parking, and service charges.
- The program needs a general session for 180 plus **three concurrent breakouts for 50 people each**.
- More than 40 attendees will be driving in and need parking with in-and-out access.
- The meeting rooms should be together. Some attendees may leave during the day and come back, so spreading sessions across a large property would create unnecessary movement.
- There is also a 45-room hotel block, but those rooms are being paid separately and are **not part of the $95,000 event budget**.
- Proposal A is the least expensive, but the breakout rooms are on two floors.
- Proposal B is $8,000 more than A, but the general session and breakouts are together and parking is complimentary.
- Proposal C has the strongest guestrooms, but it is already $12,000 over the event budget before parking.

The model is asked for **one recommendation, two reasons, one tradeoff, and one item to confirm before contracting**, using only the information provided.

## What makes this useful as an evaluation example

None of the individual facts are especially difficult. The challenge is deciding which facts should actually drive the recommendation.

A model can easily produce something that sounds professional while making a bad decision. For example, it might:

- choose A because it is cheapest and ignore the effect of having sessions on different floors;
- choose C because the guestrooms are better even though guestrooms are not part of the event budget;
- assume a venue will negotiate away an overage;
- invent parking or AV details that were never provided;
- or repeat all of the constraints without actually prioritizing them.

That is why I would not score this with one broad "good answer / bad answer" judgment.

## How I would evaluate it

I separated the score into six areas:

1. **Recommendation** — Did the model reach the best-supported decision?
2. **Constraint handling** — Did it correctly use the budget, room layout, parking, and guestroom information?
3. **Evidence discipline** — Did it stay within the facts provided?
4. **Instruction following** — Did it give the requested recommendation, reasons, tradeoff, and verification item?
5. **Business judgment** — Did it give the right amount of weight to the things that would affect the actual event?
6. **Communication** — Is the answer clear and useful for an executive audience?

I keep communication separate on purpose. A polished answer should still score poorly if the recommendation depends on made-up information or ignores a hard constraint.

## Files

- [`evaluation-rubric.md`](evaluation-rubric.md) — the rubric, scoring ranges, partial-credit rules, and score caps.
- [`model-response-analysis.md`](model-response-analysis.md) — two sample model responses and how I would score them.

## What I am trying to capture

The question I care about is not, "Does this sound like a good recommendation?"

It is, "Can I trace the recommendation back to the requirements and evidence in the task?"

That is a much more reliable standard, especially when the weaker answer happens to be the better-written one.
