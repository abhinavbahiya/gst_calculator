import React, { Component } from 'react';

class PreviousResults extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  showPreviousRecords() {
    return this.props.oldCalculations.map((calculation, key) => {
      return (
        <tr key={key}>
          <td>{calculation && calculation.category}</td>
          <td>{calculation && calculation.commodity}</td>
          <td>{calculation && calculation.unit}</td>
          <td>{calculation && calculation.unitPrice}</td>
          <td>{calculation && calculation.gstPercentage}</td>
          <td>{calculation && calculation.totalAmount}</td>
        </tr>
      )
    });
  }

  render() {
    return (
      <div>
        { this.props.oldCalculations && this.props.oldCalculations.length ?
          <table border='1'>
            <tbody>
              <tr>
                <th>Category</th>
                <th>Commodity</th>
                <th>Unit</th>
                <th>Unit Price</th>
                <th>GST Percentage</th>
                <th>Amount</th>
              </tr>
              {this.showPreviousRecords()}
            </tbody>
          </table>
        : <span> Oh! Oh! No Data Found.</span> }
      </div>
    );
  }
}

export default PreviousResults;
