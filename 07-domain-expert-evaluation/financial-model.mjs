// Synthetic portfolio demonstration. USD per local-currency unit is multiplied.
export function evaluate(s) {
  const nonnegative = ['attendance','ticketUsd','sponsorshipUsd','fixedLocal',
    'variableLocalPerAttendee','marketingUsd','sponsorFulfillmentUsd'];
  for (const key of nonnegative) {
    if (!Number.isFinite(s[key]) || s[key] < 0) throw new Error('Invalid ' + key);
  }
  if (!Number.isInteger(s.attendance)) throw new Error('Attendance must be an integer');
  if (!Number.isFinite(s.usdPerLocal) || s.usdPerLocal <= 0) throw new Error('Invalid exchange rate');
  if (!Number.isFinite(s.targetMargin) || s.targetMargin < 0 || s.targetMargin >= 1) throw new Error('Invalid target margin');
  const registrationRevenueUsd = s.attendance * s.ticketUsd;
  const revenueUsd = registrationRevenueUsd + s.sponsorshipUsd;
  const fixedCostUsd = s.fixedLocal * s.usdPerLocal + s.marketingUsd + s.sponsorFulfillmentUsd;
  const variableCostUsd = s.attendance * s.variableLocalPerAttendee * s.usdPerLocal;
  const costUsd = fixedCostUsd + variableCostUsd;
  const profitUsd = revenueUsd - costUsd;
  const margin = revenueUsd === 0 ? null : profitUsd / revenueUsd;
  const contribution = s.ticketUsd - s.variableLocalPerAttendee * s.usdPerLocal;
  const breakEvenAttendees = fixedCostUsd <= s.sponsorshipUsd ? 0 :
    contribution > 0 ? Math.ceil((fixedCostUsd - s.sponsorshipUsd) / contribution) : null;
  return {id:s.id, registrationRevenueUsd, revenueUsd, costUsd, profitUsd, margin,
    breakEvenAttendees, meetsTarget:margin !== null && margin >= s.targetMargin};
}

// Deliberately defective: copied baseline revenue and omitted fulfillment costs.
// Only for comparison in the demonstration; never use for planning.
export function evaluateFlawed(s) {
  const correct = evaluate(s);
  const revenueUsd = 2000 * s.ticketUsd + s.sponsorshipUsd;
  const costUsd = correct.costUsd - s.sponsorFulfillmentUsd;
  const profitUsd = revenueUsd - costUsd;
  const margin = revenueUsd === 0 ? null : profitUsd / revenueUsd;
  return {id:s.id, revenueUsd, costUsd, profitUsd, margin,
    meetsTarget:margin !== null && margin >= s.targetMargin};
}
