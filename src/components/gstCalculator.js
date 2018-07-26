import React, { Component } from 'react';
import { Commodity } from '../classes/commodity';
import { Food } from '../classes/food';
import { Electronics } from '../classes/electronics';
import { Furniture } from '../classes/furniture';
import { Cosmetics } from '../classes/cosmetics';
import CLASS_CONSTANTS from '../constants/classConstants';

class GstCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCalculation: {}
    }
    this.getAmount = this.getAmount.bind(this);
    this.commodity = React.createRef();
    this.unit = React.createRef();
    this.unitPrice = React.createRef();
  }

  getGstAmount(newCalculation) {
    return ((newCalculation.unit * newCalculation.unitPrice * newCalculation.gstPercentage) / 100);
  }

  calculateAmount(newCalculation) {
    return newCalculation.unitPrice + newCalculation.gstAmount;
  }

  getAmount(event) {
    event.preventDefault();
    let commodity = this.commodity.current.value.toUpperCase();
    let unit = this.unit.current.value;
    let unitPrice = this.unitPrice.current.value;
    let item;
    if(unit < 0 || unitPrice < 0) {
      return alert(`No! Please don't enter negative values in Unit or Unit Price`);
    } else {
      switch (true) {
        case CLASS_CONSTANTS.GST_CAL.FOOD.COMMODITY.includes(commodity):
          item = new Food();
          item.setGstPercentage(CLASS_CONSTANTS.GST_CAL.FOOD.GST_PERCENTAGE);
          break;
        case CLASS_CONSTANTS.GST_CAL.FURNITURE.COMMODITY.includes(commodity):
          item = new Furniture();
          item.setGstPercentage(CLASS_CONSTANTS.GST_CAL.FURNITURE.GST_PERCENTAGE);
          break;
        case CLASS_CONSTANTS.GST_CAL.ELECTRONICS.COMMODITY.includes(commodity):
          item = new Electronics();
          item.setGstPercentage(CLASS_CONSTANTS.GST_CAL.ELECTRONICS.GST_PERCENTAGE);
          break;
        case CLASS_CONSTANTS.GST_CAL.COSMETICS.COMMODITY.includes(commodity):
          item = new Cosmetics();
          item.setGstPercentage(CLASS_CONSTANTS.GST_CAL.COSMETICS.GST_PERCENTAGE);
          break;
        default:
          return alert(`404: Commodity not found, Please ask your admin to add ${commodity.toLowerCase()} in the list.`);
      }
    }

    item.setNameOfCommodity(commodity, unit, unitPrice);
    item.getGstAmount();
    item.getTotalAmount();
    let allDetails = item.getAllDetails();
    console.log(allDetails);
    this.setState({
      currentCalculation: allDetails
    });
    this.props.addToCalculations(allDetails);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.getAmount}>
          <input type="text" ref={this.commodity} placeholder='Commodity'/>
          <input type="number" ref={this.unit} placeholder='Unit'/>
          <input type="number" ref={this.unitPrice} placeholder='Unit Price'/>
          <button >Get GST & Amount</button>
        </form>
        {this.state.currentCalculation ?
          <div>
            <span> GST Amount: {this.state.currentCalculation.gstAmount || 0}</span>
            <span> Amount: {this.state.currentCalculation.totalAmount || 0}</span>
          </div>
        : null}
      </div>
    );
  }
}

export default GstCalculator;
