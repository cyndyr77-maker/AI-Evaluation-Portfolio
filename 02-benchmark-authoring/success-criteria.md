# Success Criteria

I would score this task across five areas. I want the rubric to be specific enough that two reviewers can disagree about a borderline answer and still have something concrete to point to.

| Area | Points | Full-credit answer |
|---|---:|---|
| Recommendation | 20 | Recommends Vendor B as the strongest choice based on what is currently confirmed |
| Evidence use | 25 | Does not turn missing information into facts or assumptions |
| Operational reasoning | 20 | Recognizes that schedule coverage matters, not just the number of seats |
| Instruction following | 20 | Gives one recommendation, two reasons, one tradeoff, and one item to confirm |
| Uncertainty handling | 15 | Clearly separates what is known from what still needs to be verified |
| **Total** | **100** | |

## Overall score ranges

**90–100 — Strong pass:** The answer gets the recommendation right, stays inside the evidence, and handles the remaining uncertainty cleanly.

**75–89 — Pass:** Useful answer, but there is a smaller assumption, missing element, or weakness in the explanation.

**60–74 — Borderline:** Some good reasoning, but a key operating issue is underweighted or an unknown is treated too confidently.

**Below 60 — Fail:** The decision materially depends on invented facts, the schedule requirements are ignored, or the recommendation is not supported by the information given.

## 1. Recommendation — 20 points

- **20:** Vendor B is selected as the best preliminary choice.
- **12–18:** B is selected, but the explanation is weak or focuses on the wrong details.
- **5–11:** A or C is selected, but the response still recognizes some of the important uncertainty.
- **0–4:** No usable recommendation or the choice is essentially unsupported.

I call B the best **preliminary** choice deliberately. The task does not contain every contract term, so I would not expect the model to act as though the decision is final.

## 2. Evidence use — 25 points

This is the most heavily weighted category because it is the main behavior I am testing.

A strong response separates:

- what the proposals actually say;
- what they do not say;
- and what would need to be confirmed.

Examples of unsupported claims would include:

- saying A will charge a standby fee;
- saying C cannot handle two departure waves;
- assuming any vendor will negotiate;
- inventing travel time;
- or assuming gratuity is included when it is not listed.

If an unsupported assumption materially changes the recommendation, I would give **10 points or fewer** here.

## 3. Operational reasoning — 20 points

All three vendors list four 56-passenger coaches, so all three have enough seats on paper for 220 people.

The better answer notices that seating capacity does not settle the question. The operating plan also has to cover:

- two separate outbound waves;
- the return period from 9:30 to 10:15 PM;
- and enough certainty about how the coaches will be available to execute that schedule.

The model does not need transportation-industry language. It just needs to recognize the practical issue.

## 4. Instruction following — 20 points

- Recommendation — **4**
- Reason 1 — **5**
- Reason 2 — **5**
- Tradeoff — **3**
- Item to confirm — **3**

For B, price is the obvious tradeoff. It is $1,400 more than A and $800 more than C.

There can be more than one valid confirmation item. I care more about whether the item is material and unresolved than whether it matches one exact reference answer.

## 5. Uncertainty handling — 15 points

**15:** Makes a useful preliminary recommendation and clearly identifies something that still needs confirmation.

**8–14:** Generally careful, but not all of the important unknowns are handled cleanly.

**1–7:** Acknowledges missing information but still writes as though an unsupported assumption is probably true.

**0:** Treats missing information as resolved.

## Failures I would specifically watch for

**Fabrication:** The model states an unstated schedule, fee, travel time, or policy as fact.

**Turning absence into a negative fact:** The proposal does not confirm a service, so the model says the vendor cannot provide it.

**Price-only decision:** A is chosen simply because it is cheapest, without dealing with the missing operating details.

**Over-refusal:** The model refuses to recommend anyone because some information is missing, even though the prompt asks for a preliminary choice and gives enough information to make one.

## Before I would use this as a real benchmark item

I would test it against multiple model outputs and multiple reviewers.

I would want to see that:

- stronger models recognize the evidence boundary;
- weaker models fail in more than one predictable way;
- reviewers agree on what counts as a material unsupported assumption;
- the answer does not require hidden transportation knowledge;
- and the task is difficult for the reason I intended, not because the wording is confusing.

If almost every model passes immediately, I would probably need to strengthen the task. If good models fail because they cannot tell what I am asking, I would simplify it.
