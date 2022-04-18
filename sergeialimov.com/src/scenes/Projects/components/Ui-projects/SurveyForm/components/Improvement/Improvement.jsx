import React from 'react';
import PropTypes from 'prop-types';

import './improvement.css';

const Improvement = ({
  content, id, value,
}) => (
  <div className="improvement__checkbox-group">
    <div className="improvement__checkbox-item">
      <input className="improvement__checkbox-input" id={id} type="checkbox" name="improve" value={value} />
      <span className="improvement__checkbox-label">
        {content}
      </span>
    </div>
  </div>
);

Improvement.propTypes = {
  content: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
};

Improvement.defaultProps = {
  content: '',
  id: '',
  value: '',
};

export default Improvement;
