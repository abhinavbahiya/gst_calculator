import { Commodity } from "./commodity";

export class Electronics extends Commodity {
  constructor() {
    super();
    this.gstPercent = 18;
    this.category = 'Electronics';
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

  getGstAmount() {
    return this.calculateGstAmount(this.gstPercent, this.getAmountOnWhichGstToBeCharged());
  }

  getTotalAmount() {
    return this.calculateTotalAmount(this.gstAmount, this.getAmountOnWhichGstToBeCharged());
  }

  getAllDetails() {
    return this.showDetails(this.category, this.commodity, this.units, this.unitPrice, this.gstAmount, this.totalAmount);
  }
}
