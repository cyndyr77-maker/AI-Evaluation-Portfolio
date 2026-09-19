# Evaluation findings

**Provenance:** The defective function was intentionally authored. It is not an actual model response.

## Planted defects
| Defect | Check | Consequence |
|---|---|---|
| Registration revenue uses 2,000 attendees regardless of the input | Change attendance to 1,600 and compare revenue | Revenue stays $2.4m instead of $2.04m |
| Sponsorship fulfillment costs are omitted | Reconcile the cost total to every input category | Expenses are understated by $100,000 |

Combined, the defects inflate downside profit by **$460,000**: $360,000 excess revenue plus $100,000 missing expense.

| Downside result | Flawed | Correct |
|---|---:|---:|
| Revenue | $2,400,000 | $2,040,000 |
| Cost | $1,498,000 | $1,598,000 |
| Profit | $902,000 | $442,000 |
| Margin | 37.58% | 21.67% |
| Meets 25% target | Yes | No |

## Evaluation criteria
1. Revenue changes with attendance.
2. Every supplied cost category is included exactly once.
3. FX is applied in the stated direction and only to local costs.
4. Margin uses revenue as denominator.
5. The recommendation uses the corrected target decision and identifies material assumptions.

The defective model fails criteria 1, 2, and the target-decision portion of 5. It is unsuitable for the stated decision even though some calculations are correct. This finding does not require guessing why a model made an error.

## Validation
The supplied checks cover expected scenario totals, the attendance break-even boundary, incremental attendee economics, sponsorship sensitivity, zero revenue, invalid inputs, and the planted defect's false-pass result. Expected values are independently specified in the checks rather than copied from the calculated output.

The tests validate this small model against its declared assumptions. They do not establish that the inputs reflect a real event or that the mitigation is operationally feasible.
