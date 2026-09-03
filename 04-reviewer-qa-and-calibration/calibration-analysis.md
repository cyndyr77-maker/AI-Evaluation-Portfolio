# Calibration Analysis

## First, what are we actually disagreeing about?

Both reviewers agree that the model got two important things right: the 30-day deadline and the receipt requirement.

The disagreement is this line:

> "Late reports will be denied unless your manager approves an exception."

The source says exceptions need manager approval. It never says a late report is automatically denied.

So the question for me is pretty simple: **Can I treat automatic denial as supported just because it seems like a reasonable consequence of a deadline?**

For this task, no.

## Why I would call it a major issue

I would ask three things:

1. Is the new information stated like a fact?
2. Does it change what the source actually says?
3. Could someone act differently because of it?

Here, all three are yes.

This isn't just loose wording. An employee could read that summary and walk away believing the company has an automatic-denial rule that may not exist.

I would calibrate it at **2/5 — Major issue**.

## What Evaluator 2 did

Evaluator 2 filled in the gap with a real-world assumption.

Maybe that assumption is reasonable. It still isn't in the policy.

For a source-grounded task, I wouldn't give the model factuality credit because the reviewer thinks that is probably what most companies would do.

## Is it the reviewer or the guideline?

I think it is both, but mostly the reviewer.

The instruction already says not to add information that isn't stated, so Evaluator 2 went outside the boundary of the task.

But if I saw several reviewers make the same mistake, then I would also look at the guideline. "Unsupported information" can sound clear until people start deciding that a reasonable inference is close enough.

At that point I would make the guideline more specific about new rules, penalties, consequences, eligibility requirements or anything else that could change what the user thinks they need to do.

## Feedback I would give the reviewer

> The score is too high under the source-grounding requirement. The model says late reports will be denied, but the source only gives a 30-day deadline and says exceptions require manager approval. Automatic denial is a new policy consequence. Don't give the model credit for it because it seems plausible in a real organization.

That tells the reviewer what I think they got wrong and what I want them to do differently next time.

## The bigger calibration point

Domain knowledge is useful. It helps me understand why an error matters.

But I can't use my own experience to create evidence for the model that wasn't in the task.