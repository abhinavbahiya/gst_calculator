import React, { Component } from 'react';
import APP_CONSTANTS from '../constants/appConstants';

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
    let newCalculation = {
      commodity: this.commodity.current.value.toUpperCase(),
      unit: this.unit.current.value,
      unitPrice: this.unitPrice.current.value,
      gstPercentage: 0,
      gstAmount: 0,
      amount: 0,
      category: ''
    }
    if(this.unit.current.value < 0 || this.unitPrice.current.value < 0) {
      alert(`No! Please don't enter negative values`);
    } else {
      APP_CONSTANTS.GST_CAL.forEach(record => {
        if(record.COMMODITY.includes(newCalculation.commodity)) {
          newCalculation.gstPercentage = record.GST_PERCENTAGE;
          newCalculation.category = record.CATEGORY;
        }
      });
      if(newCalculation.category) {
        newCalculation.gstAmount = this.getGstAmount(newCalculation);
        newCalculation.amount = this.calculateAmount(newCalculation);
        this.setState({
          currentCalculation: newCalculation
        });
        this.props.addToCalculations(newCalculation);
      } else {
        alert(`404: Commodity not found, Please ask your admin to add ${newCalculation.commodity.toLowerCase()} in the list.`);
      }
    }
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
            <span> Amount: {this.state.currentCalculation.amount || 0}</span>
          </div>
        : null}
      </div>
    );
  }
}

export default GstCalculator;
