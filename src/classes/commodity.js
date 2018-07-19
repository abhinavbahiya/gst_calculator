export class Commodity {

  calculateGstAmount(gstPercent, amountOnWhichGstIsCharged) {
    return (gstPercent * amountOnWhichGstIsCharged)/100;
  }

  calculateTotalAmount(gstAmount, amountOnWhichGstIsCharged) {
    return amountOnWhichGstIsCharged + gstAmount;
  }

  showDetails(category, commodity, unit, unitPrice, gstPercentage, gstAmount, totalAmount) {
    return {
      category,
      commodity,
      unit,
      unitPrice,
      gstPercentage,
      gstAmount,
      totalAmount
    }
  }
}
