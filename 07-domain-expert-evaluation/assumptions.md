# Synthetic inputs and assumptions

All amounts are fictional. “Local” is an unnamed local currency. USD is the reporting currency.

| Input | Baseline | Attendance downside | Mitigation | Mitigation FX stress |
|---|---:|---:|---:|---:|
| Paid attendees | 2,000 | 1,600 | 1,600 | 1,600 |
| Ticket revenue per attendee, USD | 900 | 900 | 900 | 900 |
| Sponsorship revenue, USD | 600,000 | 600,000 | 600,000 | 600,000 |
| Fixed event costs, local | 700,000 | 700,000 | 650,000 | 650,000 |
| Variable cost per attendee, local | 300 | 300 | 300 | 300 |
| USD per local currency unit | 1.10 | 1.10 | 1.10 | 1.20 |
| Marketing costs, USD | 200,000 | 200,000 | 180,000 | 180,000 |
| Sponsorship fulfillment costs, USD | 100,000 | 100,000 | 100,000 | 100,000 |

## Formula definitions
- Registration revenue = attendance × ticket revenue per attendee.
- Total revenue = registration revenue + sponsorship revenue.
- Total cost = (fixed local cost + attendance × variable local cost) × USD-per-local rate + USD marketing + USD sponsorship fulfillment.
- Operating profit = total revenue − total cost.
- Operating margin = operating profit ÷ total revenue. This is margin, not markup.
- Break-even attendance = round up [(fixed local cost × FX + marketing + fulfillment − sponsorship revenue) ÷ (ticket price − variable local cost × FX)], floored at zero when sponsorship already covers fixed costs.

If contribution per attendee is nonpositive and fixed costs are not covered, break-even is reported as null. Zero revenue yields a null margin rather than a misleading percentage.

## Important limits
The 1.10 rate is a budget peg, not proof of a currency hedge. The stress scenario tests 1.20. Revenue is USD-denominated; only the stated local costs move with FX.

All 1,600 or 2,000 attendees pay the stated net ticket amount. Sponsorship is assumed fixed and collectible. Taxes and service charges are assumed included in the cost inputs. No financing, corporate overhead, cash-flow timing, refunds, or tax-on-profit model is included.

The mitigation assumes vendors can reduce fixed costs by 50,000 local and marketing by $20,000 without reducing attendance or sponsor commitments. That is an assumption to validate, not an established result. Keeping per-person spend unchanged does not by itself prove attendee satisfaction.

This simplified demonstration does not calculate marketing ROI or multi-event allocations. Those would require additional attribution and cost-allocation inputs.
