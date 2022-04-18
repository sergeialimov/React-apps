import React, { Component } from 'react';
import './../styles/app.css';
import QuoteBox from './../containers/quoteBox.jsx';
import quotes from './../quotes.js'

class App extends Component {
  // autotests for FreeCodeCamp
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    const style = {
      "backgroundColor": quotes[this.props.num].color,
      "transition": "background-color 2s",
    }
    return (
      <div className="app" style={ style }>
        <QuoteBox />
      </div>
    );
  }
}
export default App;
