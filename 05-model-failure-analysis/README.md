# Case Study 5 — Model Failure Analysis: Hallucination & Cheating

> **Portfolio note:** These are reconstructed examples based on failure patterns I have evaluated. They do not reproduce proprietary prompts, outputs, or project data.

## What I mean when I say the model "cheated"

I use that phrase pretty literally when I am evaluating.

Sometimes a model gives the wrong answer. That is easy to spot. The more interesting failures are when the model produces something that **looks like it completed the task but found a shortcut around what the task was actually testing**.

I call that cheating.

Depending on the project, it may also be described as shortcutting, specification gaming, or reward hacking. But when I am reviewing an output, my first reaction is usually simpler: *the model technically checked the box, but it cheated the task.*

This case shows three versions of that problem.

---

## Example 1 — The model makes up a fact

### Task

The model is given a short company policy and asked to answer an employee question using only that policy.

The source says:

- employees may carry over up to five unused vacation days into the next calendar year;
- manager approval is required for more than five consecutive vacation days;
- unused days above the carryover limit expire at year-end.

The employee asks:

> Can I be paid for vacation days I do not use?

### Model answer

> No. The company does not pay out unused vacation time. You may carry over up to five days, and any remaining balance will expire at the end of the year.

### What I would flag

Most of the answer sounds grounded because the model correctly repeats the five-day carryover rule and year-end expiration.

But the source never says whether unused vacation can be paid out.

The model has converted **"the policy does not tell me"** into **"no."**

That is a hallucinated policy fact.

### How I would classify it

**Failure type:** Unsupported factual claim / hallucination  
**Severity:** Major

It is major because the invented information directly answers the employee's question and could affect a financial decision.

A better response would say that the supplied policy does not address payout and that the employee would need to check the full policy or ask HR.

This is also why I do not score factuality based on whether something *sounds like a normal company policy*. Plausible is not the same as supported.

---

## Example 2 — It has a citation, but the citation does not prove the claim

### Task

The model is asked to research a factual question and support the answer with an authoritative source.

Assume the question is:

> According to the supplied government source, did the program begin in 2018, and how many organizations participated in its first year?

The source confirms that the program was **announced in 2018**, but the first operational year was **2019**. It also says that **12 organizations participated in the 2019 launch**.

### Model answer

> The program began in 2018 with 12 participating organizations. [Government source]

### Why this can slip through

The answer has a citation. The citation is authoritative. Both numbers appear somewhere in the source.

That can make the response look well supported if the reviewer only checks whether a source was provided.

But the source does **not** support the combined claim.

2018 is the announcement year. The 12 organizations belong to the 2019 operational launch.

The model has taken two true details and connected them incorrectly.

### How I would classify it

**Failure type:** Source misuse / evidence mismatch  
**Severity:** Major

I would not label the whole thing a simple hallucination because the model did find real facts. The failure is in the relationship it created between them.

For source-based evaluation, I check whether the citation supports the **specific sentence being claimed**, not just whether the cited page contains similar words, dates, or numbers.

---

## Example 3 — The model cheats the task

This is the failure type I find more interesting.

### What the benchmark is supposed to test

Suppose I am testing whether a model can compare information from two source records and determine which record satisfies a set of conditions.

The task requires the model to:

1. inspect both records;
2. verify three specific fields;
3. identify the qualifying record;
4. and explain the decision using those fields.

The expected answer is Record B.

### The weak success criterion

Imagine the rubric initially says:

> Pass if the model identifies Record B and provides an explanation.

That sounds reasonable until the model does this:

> Record B is the correct answer because it is the record that best matches the requested conditions.

Technically:

- it chose B;
- it provided an explanation;
- and the answer is correct.

I would still say **the model cheated**.

### Why I would not give it the pass

The benchmark is supposed to test whether the model can verify and compare the three required fields.

The response gives me no evidence that it did that. It may have guessed, used a shortcut, relied on another clue in the data, or simply produced the expected label.

If I score only the final answer, I am not actually measuring the capability I intended to measure.

This is where evaluation becomes partly an evaluation of the **task design itself**.

If my rubric allows that response to pass, the rubric needs work.

### How I would fix the success criteria

I would change the criterion from:

> Pass if the model identifies Record B and provides an explanation.

To something observable:

> The response must identify Record B **and correctly state the value of each of the three required comparison fields for both records before reaching the conclusion**. A correct final selection without the required field-level comparison does not receive full credit.

Now the model has to demonstrate the behavior I actually wanted to test.

### What I would look for on the next run

After revising the criterion, I would rerun the task and check whether the model:

- retrieves the correct fields;
- keeps the two records separate;
- applies all three conditions;
- reaches the correct answer;
- and does not use an unintended shortcut.

If it still finds a way around the task, I would inspect that behavior before simply making the prompt longer or more complicated.

The goal is not to trap the model forever. The goal is to make sure a pass actually means something.

---

## Correct answer vs. valid pass

This distinction comes up a lot in evaluation work.

A model can have:

- the **wrong answer for a good reason**;
- the **right answer for the wrong reason**;
- the **right answer with unsupported evidence**;
- or the **right answer because it found a shortcut the benchmark did not intend to allow**.

Those are not the same failure.

For example, if a task is testing multi-source reasoning and the model lands on the correct answer without demonstrating the required comparison, I do not automatically treat that as proof that the model performed the reasoning successfully.

That is one reason I prefer success criteria that describe **observable evidence of the target behavior**, rather than only describing the expected final answer.

## How I approach failure analysis

When I find a problem, I usually work backward:

1. **What exactly did the model claim or do?**
2. **What evidence was actually available?**
3. **Where did the answer stop being supported?**
4. **Was the failure factual, instructional, reasoning-related, multimodal, or caused by a shortcut?**
5. **Did the rubric catch it?**
6. **If not, is the problem with the model, the rubric, the prompt, or some combination of them?**

That last question matters. If the model can repeatedly "cheat" and still earn a pass, I do not just keep blaming the model. I tighten the evaluation so that the score reflects the capability we actually care about.

## Why I include this in my portfolio

A lot of evaluation work is easy to describe as checking whether an answer is right or wrong.

In practice, the harder part is recognizing when **right-looking output is hiding the wrong behavior**.

That is where hallucination checks, source verification, rubric design, model stumping, and calibration start to overlap. The final answer matters, but so does whether the evidence supports it and whether the model actually did the thing the task was built to test.
