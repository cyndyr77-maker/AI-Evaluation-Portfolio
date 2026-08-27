# Evaluation Rubric

I would score this on a **100-point scale**, but I would not treat all mistakes as equal. Getting the recommendation wrong because of a hard budget constraint is more important than being slightly wordy.

## Score breakdown

| Area | Points | What I am looking for |
|---|---:|---|
| Recommendation | 25 | Proposal B, supported by the actual priorities in the prompt |
| Constraint handling | 20 | Correct use of the budget, guestrooms, room layout, and parking requirements |
| Evidence / assumptions | 15 | No invented facts used to make the decision |
| Instruction following | 15 | One recommendation, two reasons, one tradeoff, and a useful item to confirm |
| Business judgment | 15 | Gives the most weight to the factors that affect whether the event will work well |
| Communication | 10 | Clear, concise, and appropriate for senior leadership |
| **Total** | **100** | |

## 1. Recommendation — 25 points

**25:** Recommends Proposal B and connects the decision to the stated requirements.

**18–24:** Recommends B, but the reasoning is incomplete or focuses too much on a secondary issue.

**8–17:** Recommends A or C but shows some understanding of the important constraints.

**0–7:** The recommendation is mostly unsupported, ignores major requirements, or depends on facts that were not provided.

A response does not get a high score just because the recommendation is explained confidently. Proposal C, for example, is already $12,000 over the event budget before parking. If the model recommends C without dealing with that, the decision has a major problem no matter how good the writing is.

## 2. Constraint handling — 20 points

I would give up to 5 points for each of these:

- **Event budget:** The model understands what the $95,000 has to cover.
- **Guestrooms:** It does not incorrectly add the separately paid room block to the event budget.
- **Meeting-space layout:** It recognizes that keeping the rooms together is an actual operating requirement, not just a preference.
- **Parking:** It recognizes the need for convenient parking and in-and-out access, while separating what is confirmed from what still needs to be checked.

Mentioning a constraint is not enough for full credit. The response has to use it correctly in the decision.

## 3. Evidence and unsupported assumptions — 15 points

**15:** Everything used to support the recommendation comes from the prompt. Unknowns stay unknown.

**10–14:** One small assumption, but it does not change the recommendation.

**5–9:** A material assumption or several smaller unsupported claims.

**0–4:** Invented pricing, amenities, availability, concessions, or other details are doing real work in the recommendation.

Examples I would flag:

- "Proposal B includes upgraded AV."
- "Proposal A charges $25 per car."
- "Proposal C will probably waive the overage."
- "The hotel can guarantee all 45 guestrooms."

Any of those might be possible. That is not the same thing as being supported.

## 4. Instruction following — 15 points

- Clear recommendation — **3 points**
- Two distinct reasons — **5 points**
- Real tradeoff — **3 points**
- Useful item to confirm before contracting — **4 points**

For B, the most obvious tradeoff is that it costs **$8,000 more than A**.

For the confirmation item, I would accept more than one answer. For example, confirming the final all-in event cost or confirming that complimentary parking includes re-entry would both be reasonable. I would not require the model to guess information the prompt never gives.

## 5. Business judgment — 15 points

**15:** The response understands why attendee flow, room proximity, parking, and budget matter more here than getting the lowest price or the nicest guestrooms.

**10–14:** Mostly right priorities, but the operational impact is not fully explained.

**5–9:** Treats all factors as equally important or gives too much weight to a secondary issue.

**0–4:** The recommendation is driven by something that clearly conflicts with the user's stated priorities.

This category is where domain knowledge helps. A room being technically available is not the same thing as the room arrangement working well for the event.

## 6. Communication — 10 points

**10:** Direct, clear, concise, and easy to act on.

**7–9:** Good overall but somewhat wordy or repetitive.

**4–6:** Understandable, but the main point is buried or poorly prioritized.

**0–3:** Vague or difficult to follow.

I score this separately because strong writing should get credit, even when the underlying decision is wrong. It just should not be allowed to hide the decision error.

## Score caps for major failures

There are a few mistakes I would treat as serious enough to limit the overall score:

| Major failure | Maximum overall score |
|---|---:|
| Recommends C without addressing the fact that it is already over budget | 55 |
| Treats the separately paid guestrooms as part of the $95,000 budget and bases the decision on that mistake | 60 |
| Invents material pricing or amenities that drive the recommendation | 60 |
| Does not make a recommendation at all | 50 |
| Makes a secondary preference the main decision factor despite the prompt | 65 |

The reason for using caps is simple: otherwise a response can collect enough points for formatting, tone, and partial observations to look much stronger than it really is.

## Missing information

The task intentionally leaves some contracting details out. I would not expect the model to fill them in.

A good response might say:

> Confirm Proposal B's final all-in event total, including applicable service charges, and verify that the complimentary parking allows same-day re-entry.

That is better than pretending those answers are already known.

## Calibration note

One place reviewers could disagree is the difference between the **recommendation** score and the **business judgment** score.

I would keep them separate:

- Recommendation asks whether the model reached the right decision and supported it.
- Business judgment asks whether it weighted the competing factors appropriately.

A wrong recommendation can lose points in both places, but I would still look at the reasoning rather than automatically giving zero in both categories.
