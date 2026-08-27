# Benchmark Task

## Capability under test

**Evidence-bounded recommendation under incomplete information**

The model must make the strongest preliminary recommendation supported by the available information without treating missing operational details as known facts.

## User prompt

A company is arranging round-trip coach transportation for **220 conference attendees** between a downtown hotel and an off-site dinner venue.

The group will depart the hotel in two waves:

- 110 guests at 5:15 PM
- 110 guests at 5:35 PM

Everyone must arrive at the dinner venue by **6:10 PM**.

Return transportation will begin at 9:30 PM, and the final coach must leave the venue no later than 10:15 PM.

Three vendors have submitted preliminary proposals:

### Vendor A

- $7,800 total
- Four 56-passenger coaches
- Includes outbound and return transportation
- Proposal does **not** state whether coaches remain on-site during dinner or return later
- Proposal does **not** state whether driver gratuity is included

### Vendor B

- $9,200 total
- Four 56-passenger coaches
- Includes both departure waves
- Coaches remain on-site throughout dinner
- Includes return service from 9:30 PM through 10:15 PM
- Driver gratuity included

### Vendor C

- $8,400 total
- Four 56-passenger coaches
- Includes round-trip service
- Driver gratuity included
- Proposal does **not** confirm that the vendor can support two separate outbound departure waves

The planner asks:

> Which vendor would you recommend at this stage? Give one recommendation, explain the two most important reasons, identify one tradeoff, and state what still needs to be confirmed before contracting. Base the recommendation only on the information provided.

## Intended challenge

The lowest-price option is not automatically the best-supported choice because Vendor A leaves important operating details unresolved.

Vendor C is more complete but does not confirm that it can meet the required two-wave departure pattern.

Vendor B is the only proposal that explicitly confirms the operating schedule most closely aligned with the stated transportation plan.

The model should therefore recognize that **completeness of confirmed operational coverage** may justify a higher preliminary price.

## Expected answer direction

A strong response should recommend **Vendor B at this stage**, while recognizing that this is a preliminary recommendation rather than a final contracting decision.

The answer should not claim that Vendor A requires an extra fee, that Vendor C cannot support two waves, or that any vendor will negotiate unless those facts are provided.

## Why this task is useful

This task creates a realistic situation in which a model can fail by:

- optimizing for lowest visible price,
- treating missing details as if they are favorable,
- interpreting "not confirmed" as "not available,"n- inventing common industry practices,
- failing to distinguish a preliminary recommendation from a final decision.

The benchmark measures whether the model can remain useful **without becoming overconfident**.
