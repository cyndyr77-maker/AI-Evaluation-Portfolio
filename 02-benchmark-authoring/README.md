# Case Study 2 — Benchmark Authoring & Golden Response

> **Portfolio reconstruction:** This exercise was created to demonstrate benchmark-development methods used in professional AI training work. It does not reproduce proprietary prompts, client data, or project content.

## What this case study demonstrates

This example shows the full lifecycle of a benchmark task rather than treating prompt writing as the endpoint.

A useful benchmark needs to answer four questions:

1. **What capability is being tested?**
2. **What would count as success or failure?**
3. **Can independent evaluators apply the scoring standard consistently?**
4. **Does the prompt actually expose the intended model weakness when tested?**

The case below tests whether a model can handle incomplete information without inventing facts, while still giving a useful business recommendation.

## Benchmark objective

Evaluate whether a model can:

- distinguish known facts from missing information,
- avoid unsupported assumptions,
- prioritize operationally important constraints,
- produce a useful recommendation even when some inputs remain unresolved,
- explicitly identify what must be verified before action is taken.

## Scenario

A company needs to choose a transportation plan for a 220-person conference. Three coach vendors have provided partial proposals. The user needs a preliminary recommendation before all pricing details are finalized.

The benchmark is intentionally constructed so that one option looks cheapest at first glance but omits a required service component. Another option is more expensive but provides the most complete coverage. The third appears attractive but does not state whether it can meet the departure schedule.

The task is designed to test whether the model fills gaps with assumptions or correctly treats missing data as unresolved.

## Files in this case study

- [`benchmark-task.md`](benchmark-task.md) — task objective, prompt, hidden challenge, and expected capability.
- [`success-criteria.md`](success-criteria.md) — observable scoring requirements and failure conditions.
- [`reference-response.md`](reference-response.md) — a strong reference answer tied directly to the criteria.
- [`failure-analysis.md`](failure-analysis.md) — model test result, scoring, diagnosis, prompt refinement, and validation notes.

## Benchmark design principle

The purpose of a challenging task is not to make the prompt confusing. The challenge should expose a specific model behavior that matters in real use.

In this case, the intended failure mode is **confident completion of missing operational facts**.
