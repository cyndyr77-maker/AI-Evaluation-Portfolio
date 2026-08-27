# Benchmark Task

## What I am testing

Can the model make a useful recommendation when some information is missing **without filling in the missing pieces itself**?

## Prompt

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

## What makes the task tricky

All three vendors have enough seats on paper, so a simple capacity check does not solve the problem.

A is the cheapest, but its proposal leaves part of the operating plan unclear. C includes gratuity but does not confirm the two outbound waves. B costs more, but it is the only proposal that clearly confirms the schedule the planner described.

I would expect the strongest answer to recommend **Vendor B for now** because more of the required service is actually confirmed.

What I do **not** want the model to do is turn the gaps in A or C into facts. It should not say A will charge an extra fee, C cannot support two waves, or either vendor will negotiate unless the prompt gives that information.

That is the real test: make a decision, but do not become more certain than the evidence allows.
