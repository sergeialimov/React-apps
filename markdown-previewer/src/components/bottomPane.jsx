import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../styles/bottomPane.css';
import styles from './../styles/dynamicPreviewer.js';
import expandImg from './../img/expand.png';
import minimizeImg from './../img/minimize.png';
import { toggleEditor } from '../actions/toggleEditor.js';
import marked from 'marked';

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = ( href, title, text ) => `<a target="_blank" href="${ href }" title="${ title }">${ text }</a>`;

class BottomPane extends Component {
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
    this.props.toggleEditor();
  }

  render() {
    const convertedText = marked(this.props.text, { renderer:renderer });
    const currentStyles = this.state.isExpanded ? styles.expanded : styles.notExpanded;
    const visibility = this.props.previewerVisibility ? styles.bottomPane.visible : styles.bottomPane.hidden;
    const currentImg = this.state.isExpanded ? minimizeImg : expandImg;
    const currentAlt = this.state.isExpanded ? 'Minimize' : 'Expand';

    function createMarkup() {
      return {__html: convertedText};
    }

    return (
      <div className="bottomPane" style={visibility}>
        <div className="previewer" style={currentStyles.previewer}>
          <div className="topBarPreview" style={currentStyles.topBar}>
            <p className="titlePreview">Previewer</p>
            <input id="expandPreview" type="image" src={currentImg} alt={currentAlt}
              onClick={this.onClick}/>
          </div>
          <div id="preview" dangerouslySetInnerHTML= {createMarkup()}></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { text, previewerVisibility } = state;
  return { text, previewerVisibility };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditor: () => {
      dispatch(toggleEditor());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomPane);