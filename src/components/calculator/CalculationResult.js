import React, { Component } from 'react';
import { Fade } from 'react-bootstrap';
import TypeWriter from 'react-typewriter';

/*
* This contains the display for the result
* of the calculator
*/
export class CalculationResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTwitterLink: false
    }
  }

  percentageDecreaseOrIncrease() {
    return this.props.percentage >= 100 ? this.props.percentage - 100 : 100 - this.props.percentage;
  }
  generateTwitterLink() {
    let percentage = this.percentageDecreaseOrIncrease.apply(this);
    let text = encodeURI(`I’m paying ${percentage}% ${this.props.amount} than the global average price for ${this.props.drug.name}!`);
    let twitterLink = `https://twitter.com/intent/tweet?text=${text}&hashtags=CheckYourMedPrices&url=https://medprices.codefornigeria.org`;
    return twitterLink;
  }

  // return a number with commas if it's long
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  render() {
    return (
      <div className="calculation-result">
        <p className={"global-average text-center " + this.props.bodyFont}>
          The global average price for {this.props.drug.name}, {this.props.drug.form}
          : {this.props.drug.strength} is
          <span style={{ color: "black", fontWeight: 600 }}>
            &nbsp;&#8358;{(this.props.drug.price * this.props.exchangeRate).toFixed(2)}
          </span>
        </p>
        <TypeWriter typing={1} onTypingEnd={() => this.setState({ showTwitterLink: true })}>
          <p className={"pre-form-paragraph text-center " + this.props.bodyFont}>At {String.fromCharCode(8358)}{this.numberWithCommas(this.props.price)} you are paying</p>
          <h2 className={"pre-form-heading text-center " + this.props.headerFont}>{String(this.numberWithCommas(this.percentageDecreaseOrIncrease.apply(this)))}% {this.props.amount} than the global average price.</h2>
        </TypeWriter>
        <Fade in={this.state.showTwitterLink} timeout={2000}>
          <div className="text-center">
            <a className={"call-to-action " + this.props.bodyFont} href={this.generateTwitterLink.apply(this)} target="blank" >
              <i className="fa fa-twitter fa-lg animated animate-slow pulse infinite" aria-hidden="true"></i>
              &nbsp;Share on Twitter...
            </a>
            <p className={"assumption text-center " + this.props.bodyFont}>Assumption: $1 = &#8358;{this.props.exchangeRate}</p>
            <p className="reset-calculator text-center" onClick={this.props.resetCalculator}>
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
              <span className={this.props.bodyFont}>&nbsp;Check something else</span>
            </p>
          </div>
        </Fade >
      </div >
    )
  }
}
