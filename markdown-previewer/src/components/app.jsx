import React, { Component } from 'react';
import TopPane from './../components/topPane.jsx';
import BottomPane from './../components/bottomPane.jsx';
import './../styles/app.css';

class App extends Component {
  // autotests for FreeCodeCamp
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="app">
        <TopPane />
        <BottomPane />
      </div>
    )
  }
}

export default App;