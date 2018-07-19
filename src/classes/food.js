export class Food {
  constructor() {
    this.gstPercent = 0;
    this.category = 'Food';
    this.gstAmount = 0;
    this.units = 0;
    this.unitPrice = 0;
    this.totalAmount = 0;
    this.commodity = '';
  }

  setGstPercentage(gstPercent) {
    this.gstPercent = gstPercent;
  }

  setNameOfCommodity = function (nameOfCommodity, units, unitPrice) {
    this.commodity = nameOfCommodity;
    this.units = units;
    this.unitPrice = unitPrice;
  }

  getAmountOnWhichGstToBeCharged() {
    return this.units * this.unitPrice;
  }

  calculateGstAmount() {
    this.gstAmount = this.calculateGstAmount(this.gstPercent, this.getAmountOnWhichGstToBeCharged());
    return this.gstAmount;
  }

  calculateTotalAmount() {
    this.totalAmount = this.calculateTotalAmount(this.gstAmount, this.getAmountOnWhichGstToBeCharged());
    return this.totalAmount;
  }

  showDetails() {
    this.showDetails(this.category, this.commodity, this.units, this.unitPrice, this.gstAmount, this.totalAmount);
  }
}

