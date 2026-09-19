# Evaluating an event financial model

An international event's attendance forecast falls from 2,000 to 1,600. Leadership needs to know whether it can still meet a 25% margin target.

This is a fictional example built for the portfolio with AI assistance. The inputs and flawed calculations were created for the exercise; they are not client data or a captured model response.

## What I found
The corrected downside forecast produces a **21.67% margin**. A proposed cost plan brings it to **25.34% at the budget exchange rate**, but the margin falls to **19.80% if the exchange rate moves against the event**.

That means the cost plan needs further checks before approval. The budget exchange rate alone isn't enough to justify the decision.

## Why I chose this example
I built and used event forecasts covering registration revenue, sponsorships, expenses, margins, and break-even points. During an economic downturn, I used those models to recommend program changes while protecting the attendee experience.

This example shows the checks I would apply to a working budget: change the attendance, reconcile the cost categories, test the currency assumption, and see whether the recommendation still holds.

## Start here
- [Decision memo](decision-memo.md) — the results and recommendation.
- [Inputs and assumptions](assumptions.md) — what the model includes and leaves out.
- [Evaluation findings](evaluation-findings.md) — the two errors and how they change the decision.

## Check the calculations
The [scenario data](scenarios.json), [JavaScript model](financial-model.mjs), and [tests](test-model.mjs) are included so the numbers can be reproduced. This is a small calculation example rather than an Excel workbook.

With Node.js installed, run these commands from the repository folder:

```sh
node 07-domain-expert-evaluation/run-model.mjs
node 07-domain-expert-evaluation/test-model.mjs
```

The first prints both the corrected and deliberately flawed results. The second checks the totals, break-even boundary, changes in assumptions, and planted errors. No extra packages are needed.

[Return to portfolio](../README.md)
