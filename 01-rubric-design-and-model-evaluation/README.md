# Venue recommendation and rubric scoring

**Evidence status:** Fully synthetic scenario and authored response examples. Scores demonstrate rubric application, not measured model performance.

## Task inputs
Select a venue for a one-day, 180-person leadership summit. All 180 attend the general session and then split into three concurrent groups of 60.

The event budget is $95,000. Totals below include venue, food and beverage, AV, tax, service charges, and parking for 45 cars. Each proposal has a general session capacity of 180 and three breakout rooms of 60, after production and aisle allowances. A separate 45-room hotel block is paid outside this budget and is available at all three properties.

| Proposal | All-in event total | Meeting-room layout | Parking |
|---|---:|---|---|
| A | $84,000 | Breakouts on two floors | Included; same-day re-entry confirmed |
| B | $92,000 | General session and breakouts together | Complimentary; same-day re-entry unconfirmed |
| C | $107,000 | General session and breakouts together | Included; same-day re-entry confirmed |

C has higher-rated guestrooms. The event prioritizes meeting-room proximity, budget compliance, and convenient parking with re-entry. No discounts or additional concessions are offered in the task.

## Prompt
Using only these inputs, give one provisional recommendation, exactly two reasons, one tradeoff, and exactly one item to confirm before contracting. Do not imply that an unresolved requirement is already satisfied.

## Expected decision
B is the best provisional choice: it meets the budget and room-layout priorities. Confirm parking re-entry before contracting; if that cannot be secured, reassess the options rather than pretending the requirement is met.

- [Rubric](evaluation-rubric.md)
- [Illustrative responses and scores](model-response-analysis.md)

[Return to portfolio](../README.md)
