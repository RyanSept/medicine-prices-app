import React, { Component } from 'react';
import Calculator from './calculator/Calculator';
import NavigationBar from './Navbar';
import Footer from './Footer';
import Stories from './Stories';
/*
* Home component
*/
export default class Home extends Component {
  resetCalculator() {
    this.calculator.resetCalculator();
  }
  render() {
    return (
      <div>
        <NavigationBar resetCalculator={this.resetCalculator.bind(this)} />
        <Calculator ref={(calculator) => { this.calculator = calculator; }} />
        <Stories />
        <Footer />
      </div>
    );
  }
}
