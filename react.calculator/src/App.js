import React, { Component } from 'react';
import './App.css';
import { Decimal } from 'decimal.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      num: '',
      num2: '',
      operation: '',
    }
    this.addNumber = this.addNumber.bind(this);
    this.addOperation = this.addOperation.bind(this);
    this.clear = this.clear.bind(this);
    this.calc = this.calc.bind(this);
    this.operate = this.operate.bind(this);
    this.equals = this.equals.bind(this);
    this.addDecimal = this.addDecimal.bind(this);
    this.addZero = this.addZero.bind(this);
  }

  // autotests for FreeCodeCamp
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
  }

  clear() {
    this.setState({
      display: '',
      num: '',
      num2: '',
      operation: '',
    });
  }

  addDecimal() {
    if (!this.state.display.includes('.')) {
      if (this.state.display.length === 0) {
        this.addNumber('0.')();
      } else {
        this.addNumber('.')();
      }
    }
  }

  addZero() {
    if (this.state.display.includes('.') | this.state.display[0]!== '0') {
      this.addNumber('0')();
    }
  }

  addNumber = (newNum) => (e) => {
    if (this.state.operation) {
      this.setState({
        num2: `${this.state.num2}${newNum}`,
        display: `${this.state.num2}${newNum}`,
      });
    } else {
      this.setState({
        num: `${this.state.num}${newNum}`,
        display: `${this.state.num}${newNum}`,
      });
    }
  }

  addOperation = (newOperation) => (e) => {
    if (this.state.operation && this.state.num2) {
      this.calc();
    }
    this.setState({
      operation: newOperation,
    });
  }

  equals() {
    if (this.state.num2) {
      this.calc();
    }
    this.setState({
      operation: '',
    });
  }

  calc() {
    const result = this.operate();
    this.setState({
      display: result,
      num: result,
      num2: '',
    });
  }

  operate() {
    const parsedNum = new Decimal(this.state.num);
    const parsedNum2 = new Decimal(this.state.num2);
    let result = 0;
    switch (this.state.operation) {
      case '-':
        result = parsedNum.minus(parsedNum2).toString();
        break;
      case '+':
        result = parsedNum.plus(parsedNum2).toString();
        break;
      case 'x':
        result = parsedNum.mul(parsedNum2).toString();
        break;
      case '/':
        result = parsedNum.dividedBy(parsedNum2).toString();
        break;
      default: // just for lint
    }
    return result;
  }

  render() {
    const defaultValue = this.state.display ? this.state.display : '0';
    return (
      <div className="App">
        <div id="calc">
          <div id="display">{defaultValue}</div>
          <div id="clear" onClick={this.clear}>AC</div>
          <div id="divide" className="operations" onClick={this.addOperation('/')}>/</div>
          <div id="multiply" className="operations" onClick={this.addOperation('x')}>x</div>
          <div id="seven" className="numbers" onClick={this.addNumber(7)}>7</div>
          <div id="eight" className="numbers" onClick={this.addNumber(8)}>8</div>
          <div id="nine" className="numbers" onClick={this.addNumber(9)}>9</div>
          <div id="subtract" className="operations" onClick={this.addOperation('-')}>–</div>
          <div id="four" className="numbers" onClick={this.addNumber(4)}>4</div>
          <div id="five" className="numbers" onClick={this.addNumber(5)}>5</div>
          <div id="six" className="numbers" onClick={this.addNumber(6)}>6</div>
          <div id="add" className="operations" onClick={this.addOperation('+')}>+</div>
          <div id="one" className="numbers" onClick={this.addNumber(1)}>1</div>
          <div id="two" className="numbers" onClick={this.addNumber(2)}>2</div>
          <div id="three" className="numbers" onClick={this.addNumber(3)}>3</div>
          <div id="equals" className="operations" onClick={this.equals}>=</div>
          <div id="zero" className="numbers" onClick={this.addZero}>0</div>
          <div id="decimal" className="numbers" onClick={this.addDecimal}>.</div>
        </div>
      </div>
    );
  }
}

export default App;
