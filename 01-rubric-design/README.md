# Case Study 1 — Rubric Design & Model Evaluation

> **Portfolio note:** I reconstructed this example to show the type of evaluation work I have done without using proprietary project content.

## The setup

For this example, a company is choosing a venue for a one-day leadership summit for **180 people**. The model gets three proposals and has to recommend one to senior leadership.

The details that matter are:

- The event budget is **$95,000** and has to cover venue, F&B, AV, parking and service charges.
- The program needs a general session for 180 plus **three concurrent breakouts for 50 people each**.
- More than 40 attendees will be driving in and need parking with in-and-out access.
- The meeting rooms should be together. Some attendees may leave during the day and come back, so spreading sessions across a large property is not ideal.
- There is also a 45-room hotel block, but those rooms are being paid separately and are **not part of the $95,000 event budget**.
- Proposal A is the least expensive, but the breakout rooms are on two floors.
- Proposal B is $8,000 more than A, but the general session and breakouts are together and parking is complimentary.
- Proposal C has the strongest guestrooms, but it is already $12,000 over the event budget before parking.

The model is asked for **one recommendation, two reasons, one tradeoff and one thing to confirm before contracting**, using only the information provided.

## Why I used this example

None of the facts are especially hard. The harder part is figuring out which ones should actually drive the decision.

A model can give a really polished answer and still make a bad recommendation. It could pick A because it is cheapest and ignore the room layout. It could pick C because the guestrooms are better even though the guestrooms aren't part of the event budget. Or it could decide that C will probably negotiate the price down even though nobody said that.

Those are the kinds of things I want the rubric to catch.

I wouldn't score this as one overall "good answer/bad answer" decision because then it is too easy for strong writing to hide weak reasoning.

## How I would score it

I separated the score into six areas:

1. **Recommendation** — Did the model make the best-supported choice?
2. **Constraint handling** — Did it use the budget, room layout, parking and guestroom information correctly?
3. **Evidence / assumptions** — Did it stick to what was actually provided?
4. **Instruction following** — Did it give me the recommendation, reasons, tradeoff and confirmation item I asked for?
5. **Business judgment** — Did it understand which issues would actually affect the event?
6. **Communication** — Is the answer clear enough to send to senior leadership?

I keep communication separate on purpose. A response can be very well written and still be wrong.

## Files

- [`evaluation-rubric.md`](evaluation-rubric.md) — the scoring rubric, partial-credit rules and score caps.
- [`model-response-analysis.md`](model-response-analysis.md) — two model responses and how I would score them.

## What I am really looking for

The question for me isn't just, "Does this sound like a good recommendation?"

It is more like: **Can I see how the model got there, and does that decision actually come from the information it was given?**

That matters because sometimes the weaker answer is the one that sounds better.