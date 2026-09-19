# Business financial-model evaluation

**Evidence status:** Synthetic demonstration created for this portfolio with AI assistance. The figures, scenarios, and deliberately defective model are illustrative—not client data, historical savings, or captured AI output.

## Decision
An international event's attendance forecast falls from 2,000 to 1,600. Does the event still meet a 25% operating-margin target, and which program adjustment should leadership approve?

The corrected model shows **21.67% margin in the downside**, below target. A proposed cost plan restores **25.34% at the budget exchange rate**, but only **19.80% under the FX stress case**. The recommendation is conditional, not an unconditional approval.

## Why this reflects my domain
My event work included multimillion-dollar forecasts, registration and sponsorship revenue, margins, break-even points, pegged currency rates, vendor negotiations, and operational changes during a downturn. Here, that experience guides which assumptions to test and which errors matter.

## Inspect the demonstration
- [Decision memo and calculated results](decision-memo.md) — start here; no coding required.
- [Inputs and assumptions](assumptions.md) — currencies, revenue drivers, cost behavior, and exclusions.
- [Evaluation findings](evaluation-findings.md) — two planted errors and their decision impact.
- [Scenario data](scenarios.json), [calculation model](financial-model.mjs), and [automated checks](test-model.mjs).

The model is a small JavaScript calculation demonstration, not an Excel workbook or a claim of production software engineering. It makes the same dependency checks I would apply to a spreadsheet inspectable.

## Reproduce the numbers
With Node.js installed, from the repository root:

```sh
node 07-domain-expert-evaluation/run-model.mjs
node 07-domain-expert-evaluation/test-model.mjs
```

No external packages or network calls are required. The first command prints corrected and deliberately flawed results; the second checks totals, boundary conditions, sensitivities, and the planted errors.

## Other business outputs I evaluate
- Executive presentations: Is the decision clear, and do the figures match the underlying model?
- Event plans: Does usable capacity include staging, circulation, breaks, and production needs?
- Operational documents: Are owners, deadlines, approvals, and dependencies explicit?

These are inspection questions, not reasons to override a task's stated rubric.

[Return to portfolio](../README.md)
