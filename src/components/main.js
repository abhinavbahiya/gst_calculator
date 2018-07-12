import React, { Component } from 'react';
import GstCalculator from './gstCalculator';
import PreviousResults from './previousResults';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPrevResults: false,
      oldCalculations: []
    }
    this.togglePrevResults = this.togglePrevResults.bind(this);
    this.addToCalculations = this.addToCalculations.bind(this);
  }

  togglePrevResults() {
    this.setState({
      showPrevResults: !this.state.showPrevResults
    });
  }

  addToCalculations(newCalculation) {
    let oldCalculations = [...this.state.oldCalculations];
    oldCalculations.push(newCalculation);
    this.setState({ oldCalculations });
  }

  render() {
    return (
      <div>
        <GstCalculator
          addToCalculations={this.addToCalculations}
          oldCalCulations={this.state.oldCalculations} />
        <a href='javascript:void(0)' onClick={this.togglePrevResults}>
          + Show Previous Calculations
        </a>
        { this.state.showPrevResults && <PreviousResults oldCalculations={this.state.oldCalculations} /> }
      </div>
    );
  }
}

export default Main;
