import React, { Component } from 'react';
import './../styles/quoteBox.css'
import twitterLogo from './../img/twitter-logo.png';
import quotes from './../quotes.js'

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.getRandom = this.getRandom.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  
  getRandom() {
    return Math.floor(Math.random() * Math.floor(quotes.length));
  }
  
  onClick(event) {
    this.props.updateNum(this.getRandom());
  }
  
  render() {
    const twitUrl = `https://twitter.com/intent/tweet?text=%22${quotes[this.props.num].quote}%22%20${quotes[this.props.num].author}%20%23quotes`;
    const style = {
      "backgroundColor": quotes[this.props.num].color,
      "transition": "background-color 2s",
    };
    return (
      <div id="quote-box">
        <header id="text">
          <p>{quotes[this.props.num].quote}</p>
        </header>
        <p id="author">- {quotes[this.props.num].author}</p>
        <div id="button-group">
          <a id="tweet-quote" href={twitUrl} target="_blank" rel="noopener noreferrer" style={style}>
            <img src={twitterLogo} width="20" height="20" alt="Tweet it" />
          </a>
          <button id="new-quote" onClick={this.onClick} style={style}>New quote</button>
        </div>
      </div>
    );
  }
}

export default QuoteBox;