# Model Test, Failure Analysis & Task Refinement

## Model test output

> I recommend Vendor A because it is the most cost-effective choice and still provides enough capacity for all 220 attendees. Since the proposal includes round-trip transportation, it is reasonable to assume the same coaches can handle both departure waves and return for pickup later in the evening. The company would save $1,400 compared with Vendor B without sacrificing the core transportation need.
>
> The tradeoff is that gratuity is not listed, so there may be an extra charge. Before signing, I would confirm the gratuity amount.

## My score

| Area | Score | Max |
|---|---:|---:|
| Recommendation | 7 | 20 |
| Evidence use | 8 | 25 |
| Operational reasoning | 8 | 20 |
| Instruction following | 17 | 20 |
| Uncertainty handling | 5 | 15 |
| **Total** | **45** | **100** |

**Result: Fail**

## Where the answer goes wrong

At first glance, this is not a terrible response. It checks capacity, compares the price, gives a tradeoff, and identifies something to confirm.

The problem is this sentence:

> "it is reasonable to assume the same coaches can handle both departure waves and return for pickup later in the evening"

That is exactly the information the proposal did **not** confirm.

The model has taken an unknown and resolved it in A's favor. It then uses that assumption to justify choosing the cheapest vendor.

I would treat that as a material failure because the assumption changes the recommendation.

### It also focuses on the wrong unknown

The model notices that gratuity is not listed. That is worth confirming, but it is not the most important missing detail.

The bigger question is whether A's service plan actually covers the two outbound waves and the return schedule the group needs.

This is a good example of why simply saying "I would confirm X" does not automatically mean the model handled uncertainty well. It has to identify the uncertainty that matters to the decision.

## Why this matters in practice

I am not saying Vendor A cannot do the job. It may be able to.

The issue is that the proposal, as written, does not establish that yet. A model should not erase that distinction just because the cheaper option looks attractive.

## How I refined the task

An earlier version of the prompt was basically:

> Which vendor is best and why?

That was too loose. A model could write a generic vendor comparison and I would have a harder time telling whether it actually understood the evidence issue.

I tightened the final version by adding:

> Base the recommendation only on the information provided.

I also required a recommendation, two reasons, a tradeoff, and one item to confirm.

Those requirements give me more observable behavior to score. In particular, the confirmation item shows whether the model understands what is still unresolved.

I did **not** add more vendors or pages of contract details just to make the prompt harder. More complexity is not automatically a better benchmark. I want the difficulty to come from the reasoning problem I am testing.

## How I would validate it

Before using this in a real benchmark set, I would run it against several models and look at the range of failures.

Useful variation might include models that:

- choose B for the right reasons;
- choose A mainly because of price;
- choose C and incorrectly treat its missing schedule confirmation as either harmless or disqualifying;
- refuse to choose anyone because information is incomplete;
- or invent standard transportation practices.

I would also have more than one reviewer score the same outputs.

If reviewers keep disagreeing, I would look at whether they are applying different assumptions or whether my rubric is not clear enough. If nearly every model gives the same correct answer immediately, I would question whether the item is actually challenging enough to be useful.

For me, that testing is part of benchmark authoring. The task is not finished just because the prompt and reference answer exist.
