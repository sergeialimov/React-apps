import React from 'react';
import PropTypes from 'prop-types';

import './contact.css';

const Contact = (props) => {
  const { content, link } = props;

  return (
    <a
      id="profile-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="contact">
        {content}
      </div>
    </a>
  );
};

Contact.propTypes = {
  content: PropTypes.func,
  link: PropTypes.string,
};

Contact.defaultProps = {
  content: null,
  link: '',
};

export default Contact;
