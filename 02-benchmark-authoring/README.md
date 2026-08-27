# Case Study 2 — Benchmark Authoring & Recalibration

> **Portfolio note:** This is a clean-room reconstruction of the type of benchmark-authoring work I have done. The workflow reflects my actual experience with prompt development, success criteria, rubrics, golden responses, model testing, and recalibration, but the task itself is newly created from public FAA information.

## The type of work I wanted to show here

Some of my benchmark work involved prompts where the answer could not be produced from the prompt alone. The model had to research public sources, pull the right records, and use those records correctly.

For this portfolio example I used FAA aircraft data because it recreates that workflow well without exposing any proprietary task.

The FAA publishes a releasable Aircraft Registration Database that includes the registration master file and aircraft reference data. The downloadable data is refreshed daily, and the FAA also provides Aircraft Inquiry tools for public searches.

## The benchmark workflow

This case follows the same basic process I used in task authoring:

1. Define what the model is being tested on.
2. Write the prompt.
3. Build success criteria and a scoring rubric before judging the output.
4. Research the answer independently and create a golden/reference response.
5. Run the model against the task.
6. Score the response against the rubric.
7. If the model gets the task right too easily, do not automatically call the benchmark finished. Look at whether the task needs to be recalibrated to expose a harder but still fair capability.
8. Test the revised version again.

That last step is important. In this kind of work, a model passing a task was sometimes the beginning of another round of authoring rather than the end of the task.

## What this example tests

The first version asks the model to research an aircraft using FAA records and report specific fields with source support.

That version is intentionally straightforward. A capable model should be able to pass it.

The second version adds an evidence-reconciliation problem: the model has to distinguish current registration information from reference information about the aircraft make/model and explain what can and cannot be concluded from each source. The difficulty comes from using the data correctly, not from obscure aviation trivia.

## Files

- [`benchmark-task.md`](benchmark-task.md) — the initial prompt and the recalibrated version.
- [`success-criteria.md`](success-criteria.md) — the rubric and the rules I would use to score research quality, source use, and unsupported conclusions.
- [`reference-response.md`](reference-response.md) — the golden-response approach and what I would verify before locking the answer key.
- [`failure-analysis.md`](failure-analysis.md) — how I would handle an initial model pass, why I would recalibrate, and what I would look for in the second test.

## Public data used for the reconstruction

This example is built around the FAA Aircraft Registry and its public data/documentation. I intentionally avoid owner names, street addresses, or other personal information because those details are not needed to demonstrate the evaluation method.
