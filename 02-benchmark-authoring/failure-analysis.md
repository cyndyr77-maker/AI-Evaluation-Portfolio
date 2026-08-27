# Model Testing & Recalibration

This example is a little different because **the first model response passes**.

I wanted to include that because it happened in this type of work. Sometimes I built the prompt, success criteria, rubric and golden response, ran the model and it got it right.

There is nothing wrong with that. If it meets the criteria, it passes.

The next question is whether the task is really testing enough.

## Test 1 — The model passes

Say the model uses the FAA Aircraft Registry, pulls the correct N-number, manufacturer, model, serial number, manufacture year, registration status and expiration information. It identifies the FAA source, leaves an unavailable field blank instead of making something up and doesn't include owner information.

### Example score

| Area | Score | Max |
|---|---:|---:|
| FAA source use | 20 | 20 |
| Field accuracy | 35 | 35 |
| Missing information | 15 | 15 |
| Instruction following | 15 | 15 |
| Source support | 15 | 15 |
| **Total** | **100** | **100** |

**Result: Pass**

I am not going to hunt for something to mark wrong just because I am supposed to be testing the model. It did the task.

## What I would do next

One pass doesn't automatically mean the task is too easy.

But if I run it across several capable models and they all pull the fields correctly without much trouble, I start asking what I am really measuring.

At that point I may only be testing whether the model can do a database lookup.

If I wanted the benchmark to test more reasoning, I would recalibrate it.

## Making the second version harder

I would keep the FAA research piece but add questions about what the information actually proves.

Now the model has to keep straight:

- the current aircraft registration record;
- the FAA make/model and engine reference information;
- and the conclusions I can reasonably make from each one.

I also added the blank-field issue because FAA documentation allows some permissible fields to be blank.

That gives me a harder test without making the prompt confusing just for the sake of making it hard.

---

# Test 2 — Now I get a failure

The model could still pull all of the basic aircraft information correctly and then say something like:

> The FAA reference record lists engine model X for this aircraft model, so the individual aircraft currently has engine model X installed. The blank supplemental field also appears to be a database error because a complete registration record should contain a value in every field.

At first glance, this looks pretty good. It used the FAA. It found the right aircraft. It sounds confident.

I would still flag two problems.

## Problem 1 — It went further than the source

The model took **reference information associated with an aircraft make/model** and turned it into a statement about the exact engine physically installed on one aircraft right now.

If my FAA source doesn't prove that, the model can't turn it into a fact.

This is actually more interesting to me than the model using the wrong website. It found the right source and then used the source wrong.

## Problem 2 — It decided a blank field must be an error

FAA documentation says some permissible fields can be blank.

So the model shouldn't decide the database is wrong just because it expected a value to be there.

That tells me whether it actually used the documentation or just made an assumption about what a complete record should look like.

## Example score on Version 2

| Area | Score | Max |
|---|---:|---:|
| Current record accuracy | 20 | 20 |
| Reference data | 6 | 15 |
| Evidence questions | 12 | 30 |
| FAA source use | 15 | 15 |
| Blank fields | 2 | 10 |
| Instruction following | 10 | 10 |
| **Total** | **65** | **100** |

**Result: Borderline / not a strong pass**

I wouldn't wipe out everything the model got right. It still found the correct record and used the approved source. The problem is in what it concluded from that information.

## What I learn from the second test

If I start seeing this kind of error across models, then the harder version is doing what I wanted. It is separating **finding the information** from **understanding what the information actually proves**.

If reviewers disagree with my engine-reference answer, I would go back to the FAA documentation and make sure the answer key is solid before deciding the reviewers are wrong. My golden answer has to be defensible too.

And I can still recalibrate again.

If every model gets Version 2 right, maybe I need another fair edge case. If almost every model fails because I accidentally made the task depend on specialized aviation knowledge that isn't explained by the source, then I probably went too far.

That back and forth is part of the work.

**Recalibration isn't about making the model fail. It is about making sure the task is testing what I think it is testing.**