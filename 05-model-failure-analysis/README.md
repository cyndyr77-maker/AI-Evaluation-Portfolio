# Case Study 5 — Model Failure Analysis: Hallucination & Cheating

> **Portfolio note:** These are reconstructed examples based on failure patterns I have evaluated. I am not using proprietary prompts, outputs or project data.

## What I mean when I say the model cheated

I use the word **cheated** a lot when I explain model failures.

Sometimes the model is just wrong. Those are usually pretty easy to identify. The harder ones are when I look at the answer and think, *technically you did what I asked, but you cheated to get there.*

The model found a shortcut, guessed the right answer, used information in a way it wasn't supposed to or met the wording of the task without actually doing what I was trying to test.

There are more technical ways to describe some of this, including shortcutting or specification gaming. I usually just call it cheating because that is what it looks like when I am evaluating it.

Here are three examples of the kinds of failures I mean.

---

## Example 1 — The model makes something up

The model is given a short company policy and told to answer using only that policy.

The policy says:

- employees can carry over up to five unused vacation days into the next calendar year;
- manager approval is required for more than five consecutive vacation days;
- unused days above the carryover limit expire at year-end.

The employee asks:

> Can I be paid for vacation days I don't use?

The model answers:

> No. The company does not pay out unused vacation time. You may carry over up to five days, and any remaining balance will expire at the end of the year.

At first it sounds fine because part of the answer is right. The five-day carryover and year-end expiration are both in the policy.

But the policy never says whether unused vacation can be paid out.

The model basically turned **"I don't know from the information I have"** into **"no."**

I would flag that as a hallucinated fact and a major issue. It directly answers the employee's question with information the model doesn't have, and someone could make a financial decision based on it.

The better answer is simply that the supplied policy doesn't address payout and the employee would need to check the full policy or ask HR.

This is one of those cases where I don't care if the answer sounds like a normal company policy. It may be completely plausible. It still isn't in the source.

---

## Example 2 — The model has a source, but the source doesn't actually prove what it said

This is another one I watch for because a citation can make an answer look much better than it is.

Say the model is asked:

> According to the supplied government source, did the program begin in 2018, and how many organizations participated in its first year?

The source says the program was **announced in 2018**, but the first operational year was **2019**. It also says **12 organizations participated in the 2019 launch**.

The model answers:

> The program began in 2018 with 12 participating organizations. [Government source]

It has a source. It even pulled two real facts from that source.

But the sentence is still wrong.

The 2018 date belongs to the announcement. The 12 organizations belong to the 2019 launch. The model took two true things and put them together in a way the source doesn't support.

I would flag that as source misuse/evidence mismatch and a major issue.

When I check citations, I don't just look to see whether the page contains the same date or number. I want to know whether the source actually supports **the claim the model made**.

---

## Example 3 — The model gets the answer right but cheats

This is probably the more interesting one to me.

Say I build a benchmark to see whether the model can compare two records. It is supposed to check three specific fields in both records, figure out which record meets all three conditions and explain why.

The correct answer is Record B.

My first success criterion says:

> Pass if the model identifies Record B and provides an explanation.

Then the model says:

> Record B is the correct answer because it is the record that best matches the requested conditions.

So now I have a problem.

It picked B. It gave me a sentence explaining its answer. Technically it met my success criterion.

But I have no idea if it actually compared the three fields. It could have guessed. It could have noticed some other clue. It could have taken a shortcut I didn't intend.

I would call that **cheating the task**.

And in this case I can't only blame the model. My success criterion made it possible.

## Fixing the task after the model cheats

I would change the success criterion to something more like:

> The response must identify Record B and correctly state the three required comparison fields for both records before reaching the conclusion. A correct final answer without the required comparison does not receive full credit.

Now I can actually see whether the model did the thing I was testing.

Then I run it again.

If it gets the right answer and shows the field comparison, great. If it finds another shortcut, I look at what it did and decide whether I need to adjust the task again.

I don't make the prompt harder just because I want the model to fail. I make changes when the current version isn't really testing what I thought it was testing.

---

## A right answer isn't always a pass

This came up enough in evaluation work that I stopped looking at correct/incorrect as the whole story.

A model can give me:

- a wrong answer;
- a right answer for the wrong reason;
- a right answer with made-up support;
- a right answer with a citation that doesn't support it;
- or a right answer because it found a way around the task.

Those aren't all the same thing.

If I am testing multi-source reasoning and the model happens to land on the right final answer without doing the comparison, I don't automatically say it passed the reasoning test.

That is why I like success criteria that make the model show enough of the required behavior for me to evaluate it.

## How I usually work through a failure

I don't have one complicated formula for it. I normally start asking questions.

**What did the model actually say?**  
**Where did that information come from?**  
**Does the source really support it?**  
**Did it follow what I asked, or did it find a shortcut?**  
**Is the answer wrong, or is the reasoning/evidence wrong?**  
**Did my rubric catch the problem?**

And if my rubric didn't catch it, I have to look at my own task too.

If a model can keep cheating and still get a passing score, then I haven't written the evaluation tightly enough yet.

## Why I wanted this in the portfolio

Checking whether a model is obviously wrong is part of the work, but it isn't the part I find hardest.

The harder part is when the answer looks right.

That is when I have to slow down and figure out whether the facts are really supported, whether the citation proves what the model says, whether it actually followed the instruction and whether it did the reasoning I was trying to test.

Sometimes the answer is wrong. Sometimes the model cheated. And sometimes the model shows me that **my task needs to be better**.
