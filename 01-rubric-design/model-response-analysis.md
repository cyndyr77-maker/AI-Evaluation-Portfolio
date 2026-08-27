# Model Response Analysis

This file applies the rubric in [`evaluation-rubric.md`](evaluation-rubric.md) to two contrasting model responses.

The purpose is to show the difference between evaluating output by general impression and evaluating it against explicit criteria.

---

# Model Response A

> I recommend Proposal B. Although it is $8,000 more than Proposal A, it better matches the operating needs of the summit because the general session and all three breakouts are located together, which will reduce unnecessary movement for attendees who may leave and return during the day. It also includes complimentary parking, which directly supports the 40+ local attendees who will be driving.
>
> The main tradeoff is the higher cost compared with Proposal A. Before contracting, I would confirm that Proposal B's final event charges, including applicable service charges, remain within the $95,000 event budget and that the complimentary parking allows in-and-out access.

## Score

| Criterion | Score | Max |
|---|---:|---:|
| Recommendation quality | 25 | 25 |
| Constraint handling | 20 | 20 |
| Evidence discipline | 15 | 15 |
| Required response elements | 15 | 15 |
| Prioritization / business judgment | 15 | 15 |
| Executive communication | 10 | 10 |
| **Total** | **100** | **100** |

## Evaluation

### Recommendation quality — 25/25

The model selects Proposal B and ties the recommendation to two of the most important stated requirements: compact meeting space and parking.

### Constraint handling — 20/20

The answer correctly uses the $95,000 event budget and does not incorrectly fold the separately paid guestrooms into that amount. It recognizes that room adjacency is operationally important and treats parking as both a benefit and an area where one detail still needs verification.

### Evidence discipline — 15/15

No missing prices or amenities are invented. The answer does not claim that the total cost is definitively within budget because the prompt does not provide enough detail to establish that. Instead, it identifies the all-in total as something to confirm.

### Required response elements — 15/15

The answer includes:

- one recommendation,
- two distinct reasons,
- one meaningful tradeoff, and
- a material verification item.

The verification sentence contains two closely related contracting checks. This does not violate the task because they function as one pre-contract verification step and both are grounded in unresolved requirements.

### Prioritization / business judgment — 15/15

The response recognizes why the $8,000 premium may be justified. It does not treat lowest cost as the only objective. Instead, it links the layout and parking to how attendees will actually use the event.

### Executive communication — 10/10

The response is short, direct, and decision-oriented.

## Overall assessment

**Strong / decision-ready.**

The response demonstrates that good evaluation output does not need to be long. It needs to select the right evidence, respect uncertainty, and connect the recommendation to the user's actual priorities.

---

# Model Response B

> Proposal C is the best overall choice. Its stronger guestrooms will create a better executive experience, and since the company needs 45 rooms, the room quality should be the deciding factor. Although it is currently $12,000 over budget, hotels frequently negotiate for groups of this size, so the company should be able to bring the price down. Proposal C also likely has better parking and upgraded AV because it is the premium option.
>
> Proposal A would be my second choice because it saves $8,000 compared with Proposal B. Proposal B is difficult to justify when A provides the same basic meeting function for less money. I would ask Proposal C for a discount before signing.

## Raw rubric score

| Criterion | Score | Max |
|---|---:|---:|
| Recommendation quality | 5 | 25 |
| Constraint handling | 7 | 20 |
| Evidence discipline | 2 | 15 |
| Required response elements | 8 | 15 |
| Prioritization / business judgment | 3 | 15 |
| Executive communication | 7 | 10 |
| **Raw total** | **32** | **100** |

No additional cap is needed because the raw score is already below the applicable failure-condition caps.

## Evaluation

### Recommendation quality — 5/25

The model recommends Proposal C even though the prompt states that C exceeds the event budget by $12,000 **before parking is added**. The response does not establish a supported path for resolving that conflict.

### Constraint handling — 7/20

The model notices the 45 guestrooms but gives them inappropriate weight. The prompt explicitly states that guestrooms are paid separately from the event budget, so their quality should not override the meeting-space and event-budget requirements.

The response also fails to address the compact meeting-space requirement, one of the clearest operational priorities in the prompt.

### Evidence discipline — 2/15

This is the largest failure.

The response introduces multiple unsupported claims:

- that hotels "frequently negotiate" in a way that will solve this specific $12,000 overage,
- that Proposal C "likely has better parking," and
- that Proposal C has "upgraded AV" because it is the premium option.

None of those facts were provided. More importantly, the invented information materially affects the recommendation.

### Required response elements — 8/15

The model gives a recommendation and supporting reasons, but the reasons are not well grounded. It identifies the over-budget price as an issue, but it does not present a clear tradeoff in the requested format. Its verification item — asking for a discount — is less useful than confirming an unresolved factual requirement because the recommendation already depends on assuming that the discount will occur.

### Prioritization / business judgment — 3/15

The model makes guestroom quality the deciding factor even though the prompt's operational requirements focus on meeting-space adjacency, parking, and the event budget.

It also treats Proposal A and Proposal B as providing essentially the same meeting function, ignoring the stated difference in room layout and complimentary parking.

### Executive communication — 7/10

The writing itself is clear and reasonably concise. This is intentionally scored separately from substantive quality. A well-written answer can still be unreliable.

## Failure analysis

### What failed

The response chose an option that conflicts with a hard budget constraint and justified the decision using unsupported assumptions.

### Why it failed

The model appears to have substituted a familiar business narrative — premium hotels negotiate and premium properties have better amenities — for the evidence actually supplied in the task.

### Why it matters

If this response were used without review, a decision-maker could pursue a venue that is already over budget while overlooking the option that best matches the meeting's stated operational requirements.

### How the rubric captures it

The failure is not reduced to one vague "bad answer" judgment. It appears across separate dimensions:

- low recommendation quality,
- incomplete constraint handling,
- severe evidence-discipline failure, and
- poor prioritization.

At the same time, the response still receives credit for readable executive communication. This preserves the distinction between **presentation quality** and **decision quality**.

---

# Calibration example

Assume two reviewers initially score Model Response B differently:

- **Evaluator 1:** 32/100
- **Evaluator 2:** 48/100

Evaluator 2 argues that the recommendation is "reasonable because hotels negotiate all the time" and gives more credit for Proposal C.

## Calibration analysis

The disagreement is not primarily about the model response. It is about whether the evaluator is allowed to introduce outside assumptions.

The rubric resolves this directly: missing facts cannot be supplied by evaluator intuition merely because they are plausible. The task says to use only the information provided.

The calibrated score should therefore remain near Evaluator 1's score unless Evaluator 2 identifies rubric-based evidence for additional points.

## Guideline clarification generated from the disagreement

> **Evaluator assumptions:** Score only against information contained in the prompt and response. Do not increase a score because an unsupported model claim seems plausible based on personal or professional experience. Domain expertise may be used to recognize operational implications, but not to manufacture missing facts.

This distinction is important in reviewer QA. Calibration is not about forcing reviewers to have identical opinions; it is about identifying which judgments are permitted by the evaluation standard.
