export function calculateGstAmount(gstPercent, amountOnWhichGstIsCharged) {
  return (gstPercent * amountOnWhichGstIsCharged)/100;
}
