import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../styles/topPane.css';
import styles from './../styles/dynamicEditor.js';
import { action } from '../actions/action.js';
import { togglePreviewer } from '../actions/togglePreviewer.js';
import minimizeImg from './../img/minimize.png';
import expandImg from './../img/expand.png';

class TopPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
    this.props.togglePreviewer();
  }
  
  render () {
    const currentStyles = this.state.isExpanded ? styles.expanded : styles.notExpanded;
    const visibility = this.props.editorVisibility ? styles.topPane.visible : styles.topPane.hidden;
    const currentImg = this.state.isExpanded ? minimizeImg : expandImg;
    const currentAlt = this.state.isExpanded ? 'Minimize' : 'Expand';

    return (
      <div className="topPane" style={visibility}>
        <div className="editor" style={currentStyles.editor}>
          <div className="topBar" style={currentStyles.topBar}>
            <p className="title">Editor</p>
            <input 
            id="expandButton"
            type="image" 
            src={currentImg}
            alt={currentAlt}
            onClick={this.onClick}/>
          </div>
        <textarea 
          id="editor" 
          onChange={ e => this.props.updateText(e.target.value)} 
          value= {this.props.text}
          style={currentStyles.textarea}
        />
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  const { text, editorVisibility } = state;
  return {text, editorVisibility};
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateText: (text) => {
      dispatch(action(text));
    },
    togglePreviewer: () => {
      dispatch(togglePreviewer());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPane);
