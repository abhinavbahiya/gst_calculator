export class Cosmetics {
  constructor() {
    this.gstPercent = 28;
    this.category = 'Cosmetics';
    this.gstAmount = 0;
    this.units = 0;
    this.unitPrice = 0;
    this.totalAmount = 0;
    this.commodity = '';
  }

  setNameOfCommodity = function (nameOfCommodity, units, unitPrice) {
    this.commodity = nameOfCommodity;
    this.units = units;
    this.unitPrice = unitPrice;
  }

  setGstPercentage(gstPercent) {
    this.gstPercent = gstPercent;
  }

  getAmountOnWhichGstToBeCharged() {
    return this.units * this.unitPrice;
  }

  calculateGstAmount() {
    return this.calculateGstAmount(this.gstPercent, this.getAmountOnWhichGstToBeCharged());
  }

  calculateTotalAmount() {
    return this.calculateTotalAmount(this.gstAmount, this.getAmountOnWhichGstToBeCharged());
  }

  showDetails() {
    this.showDetails(this.category, this.commodity, this.units, this.unitPrice, this.gstAmount, this.totalAmount);
  }
}
