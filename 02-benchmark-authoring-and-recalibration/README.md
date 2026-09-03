# Case Study 2 — Benchmark Authoring & Recalibration

> **Portfolio note:** I rebuilt this example from public FAA information so I could show the type of benchmark work I have done without using an original proprietary task.

## The type of work this is based on

Some of my prompt-building work involved questions where the answer wasn't sitting in the prompt. I had to build a task that required the model to go out to an approved source, find the right information and use it correctly.

I also had to decide what success looked like before testing the model, build the rubric, research the answer myself and create the golden response.

Then I ran the model.

And sometimes it got the answer right.

That didn't mean I changed the answer until the model failed. It meant I had to look at the task again and decide whether it was actually hard enough to test what I wanted it to test.

For this portfolio example I used public FAA aircraft data because it lets me recreate that same process without using any proprietary material.

## The basic workflow

This is how I approached this kind of task:

1. Decide what I actually want to test.
2. Build the prompt.
3. Write the success criteria and rubric.
4. Research the answer independently and build the golden response.
5. Run the model.
6. Score what it gives me against the rubric I already wrote.
7. If it passes, look at whether that was a meaningful pass or whether the task was too straightforward.
8. If needed, change the task and test it again.

That last part happened enough that I think it is important to show. Getting the first version right wasn't always the end of the work.

## Why I used FAA data

The FAA publishes aircraft registration data and supporting reference information, and it also has public Aircraft Inquiry tools.

For the first version, I would give the model an N-number and ask it to pull specific fields from official FAA sources. That gives me a good baseline: can it find the right record, return the right information and leave something blank when the FAA data doesn't provide it?

If the model handles that easily, I make the second version harder in a way that still makes sense.

Instead of only asking it to retrieve fields, I ask it to decide what those fields actually prove. For example, reference information about an aircraft make/model doesn't automatically prove what exact engine is physically installed on one individual aircraft right now.

That is where the task moves from **finding information** to **using the information correctly**.

## Files

- [`benchmark-task.md`](benchmark-task.md) — the first prompt and the harder version.
- [`success-criteria.md`](success-criteria.md) — what I would score and what counts as a real problem.
- [`reference-response.md`](reference-response.md) — how I would research and lock the golden answer.
- [`failure-analysis.md`](failure-analysis.md) — what I would do when the first model passes and what I look for after recalibration.

## One thing I intentionally left out

FAA registration data can include owner information. I don't need names or addresses to show this work, so I left them out of the portfolio example.

The point is the benchmark-building process, not the identity of an aircraft owner.