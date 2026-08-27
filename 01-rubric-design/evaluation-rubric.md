# Evaluation Rubric

## Scoring approach

The response is scored on a **100-point scale**. Criteria are evaluated independently so that strong writing does not compensate for a substantive decision error.

A score of **85–100** indicates a strong response that is decision-ready with only minor issues. **70–84** indicates a generally useful response with one or more material weaknesses. **50–69** indicates substantial problems that reduce reliability. **Below 50** indicates that the answer fails the task in a significant way.

## Weighted criteria

| Criterion | Weight | Full-credit standard |
|---|---:|---|
| Recommendation quality | 25 | Selects Proposal B and ties the choice directly to the stated operational priorities. |
| Constraint handling | 20 | Correctly treats the $95,000 event budget, separate guestroom spend, parking requirement, and compact meeting-space requirement. |
| Evidence discipline | 15 | Uses only information supplied in the prompt and clearly identifies unknowns rather than filling them in. |
| Required response elements | 15 | Provides one recommendation, two supporting reasons, one meaningful tradeoff, and one verification item. |
| Prioritization / business judgment | 15 | Gives appropriate weight to attendee flow, room adjacency, parking, and budget instead of overvaluing guestrooms or lowest price alone. |
| Executive communication | 10 | Concise, clear, direct, and free of unnecessary detail or hedging. |
| **Total** | **100** | |

---

## 1. Recommendation quality — 25 points

### 25 points
Recommends **Proposal B** and explains why it is the strongest fit based on the information provided.

### 18–24 points
Recommends Proposal B but the reasoning is incomplete, weakly prioritized, or partly dependent on secondary factors.

### 8–17 points
Chooses another proposal but demonstrates some valid reasoning and acknowledges the strongest constraints. This is still a material decision error because the prompt provides sufficient information to identify B as the best fit.

### 0–7 points
Recommendation conflicts with the stated constraints, lacks reasoning, or is based primarily on invented information.

**Critical note:** A polished recommendation for Proposal C does not earn high marks if it ignores that C is already $12,000 over the event budget before parking.

---

## 2. Constraint handling — 20 points

Award up to 5 points for each correctly handled constraint:

1. **Event budget:** understands that the $95,000 cap applies to venue, F&B, AV, parking, and service charges.
2. **Guestrooms:** does not count the separately paid 45-room block against the $95,000 event budget.
3. **Meeting-space adjacency:** recognizes that a compact room cluster is an explicit operational priority.
4. **Parking:** recognizes the need for convenient parking with in-and-out access and distinguishes known parking information from details still requiring confirmation.

### Partial credit
If a constraint is mentioned but interpreted incorrectly, award **1–3 points** depending on severity. Merely repeating a constraint without using it in the recommendation does not receive full credit.

---

## 3. Evidence discipline — 15 points

### 15 points
Makes no unsupported claims. Unknowns are framed as items to verify.

### 10–14 points
Contains one low-impact assumption that does not materially affect the recommendation.

### 5–9 points
Contains one material unsupported claim or several smaller assumptions.

### 0–4 points
Relies on invented prices, amenities, availability, room capacities, concessions, or other facts to justify the recommendation.

### Unsupported-claim rule
Statements such as the following should be penalized unless supplied by the prompt:

- "Proposal B includes upgraded AV."
- "Proposal A charges $25 per car."
- "Proposal C will probably waive the overage."
- "The hotel can guarantee all 45 guestrooms."

The evaluator should not reward an assumption simply because it is plausible.

---

## 4. Required response elements — 15 points

Award points as follows:

- One clear recommendation — **3 points**
- Two distinct supporting reasons — **5 points**
- One meaningful tradeoff — **3 points**
- One item to verify before contracting — **4 points**

### Definition of a meaningful tradeoff
The tradeoff must identify a real disadvantage of the recommended option. For Proposal B, the clearest stated tradeoff is that it costs **$8,000 more than Proposal A**.

A generic statement such as "Every venue has pros and cons" earns no credit.

### Definition of a useful verification item
The item should address a material unresolved point, such as confirming that Proposal B's total event charges remain within the $95,000 cap after applicable service charges, or confirming that complimentary parking includes the required in-and-out access.

---

## 5. Prioritization / business judgment — 15 points

### 15 points
Correctly prioritizes operational fit over lowest price or guestroom appeal. Connects the compact meeting-space cluster and parking to the actual attendee-use case.

### 10–14 points
Identifies the right priorities but does not fully explain their operational importance.

### 5–9 points
Treats all factors as roughly equal or overweights a secondary factor.

### 0–4 points
Bases the recommendation primarily on the lowest price, strongest guestrooms, aesthetics, or another factor that conflicts with the stated objectives.

---

## 6. Executive communication — 10 points

### 10 points
Concise, specific, professional, and easy to act on.

### 7–9 points
Clear but slightly wordy, repetitive, or overformatted.

### 4–6 points
Understandable but poorly prioritized or unnecessarily detailed.

### 0–3 points
Vague, difficult to follow, or not appropriate for the requested executive audience.

---

# Failure conditions

The following failures should cap the overall score even if the prose is otherwise strong.

| Failure | Score cap |
|---|---:|
| Recommends Proposal C without addressing that it exceeds the event budget | 55 |
| Counts the separately paid guestrooms against the $95,000 event budget and uses that error to drive the decision | 60 |
| Invents material pricing or amenities that determine the recommendation | 60 |
| Provides no actual recommendation | 50 |
| Recommends a venue based primarily on a criterion the prompt explicitly makes secondary | 65 |

These caps prevent surface-level writing quality from masking a fundamental evaluation failure.

# Missing-data handling

The prompt intentionally does not provide every contracting detail. The correct behavior is **not** to infer the missing information.

If a model needs an unknown fact to finalize the decision, it should identify that fact as a verification item. For example:

> Confirm Proposal B's final all-in event total, including service charges, and confirm that complimentary parking permits same-day re-entry.

The response should not be penalized for failing to calculate an all-in total that cannot be calculated from the supplied information.

# Ambiguity handling

If an evaluator believes more than one verification item is reasonable, that should not create a scoring disagreement as long as the selected item is:

1. unresolved by the prompt,
2. material to the decision, and
3. something that can realistically be confirmed before contracting.

Evaluators should score the **quality of the verification item**, not whether it matches one preferred wording.

# Calibration note

The most likely scoring disagreement in this task is between **recommendation quality** and **prioritization/business judgment**. To avoid double-penalizing the same flaw:

- Recommendation quality scores whether the model reached the correct decision and supported it.
- Prioritization scores how well the model weighted the competing factors when reaching that decision.

A wrong recommendation may lose points in both categories, but evaluators should not automatically assign zero in both. The reasoning must be assessed separately.
