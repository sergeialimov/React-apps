import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';

const BaseTemplate = (props) => {
  const { content } = props;

  return (
    <div className="base-template">
      <Header />
      <div className="base-template__content">{content}</div>
    </div>
  );
};

BaseTemplate.propTypes = {
  content: PropTypes.shape({}),
};

BaseTemplate.defaultProps = {
  content: {},
};

export default BaseTemplate;
