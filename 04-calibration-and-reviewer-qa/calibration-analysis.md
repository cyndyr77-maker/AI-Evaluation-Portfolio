# Calibration Analysis

## First, isolate the disagreement

Both reviewers agree that the model got two important things right: the 30-day deadline and the receipt requirement.

The disagreement is entirely about this line:

> "Late reports will be denied unless your manager approves an exception."

The source says exceptions need manager approval. It never says a late report is automatically denied.

That makes the calibration question fairly narrow: **Can a reviewer treat automatic denial as supported because it seems like a reasonable consequence of a deadline?**

My answer would be no for this task.

## Why I would score it as a major issue

I would look at three things:

1. Is the new information stated as fact?
2. Does it change what the source says?
3. Could someone act differently because of it?

Here, the answer to all three is yes.

This is not just a slightly loose paraphrase. An employee could read the summary and believe the company has an automatic-denial rule that may not exist.

I would calibrate the answer at **2/5 — Major issue**.

## What happened with Evaluator 2

Evaluator 2 used a real-world assumption to fill in a gap in the source.

The assumption may be reasonable. That does not make it part of the policy.

For a source-grounded task, I would not give the model factuality credit based on what a reviewer thinks probably happens in most companies.

## Is the problem the reviewer or the guideline?

I think it is both, but mostly the reviewer.

The instruction already says not to add information that is not stated, so Evaluator 2 has gone outside the evaluation boundary.

However, if several reviewers made the same mistake, I would also improve the guideline. "Unsupported information" can be too broad if people are not sure how to handle reasonable inferences.

I would add language that specifically distinguishes ordinary paraphrasing from a new rule, penalty, consequence, eligibility condition, or other statement that could change user behavior.

## Feedback I would give the reviewer

> The score is too high under the source-grounding requirement. The model states that late reports will be denied, but the source only gives a 30-day submission deadline and says exceptions require manager approval. Automatic denial is a new policy consequence. Do not give factuality credit because that consequence seems plausible in a real organization.

That feedback tells the reviewer exactly what was misapplied and what to do differently next time.

## The broader calibration point

Domain knowledge is useful for recognizing why an error matters. It should not be used to create support for a claim that the source never made.
