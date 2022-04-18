import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './project.css';

const Project = (props) => {
  const {
    classNm, content, path, src,
  } = props;
  return (
    <NavLink
      to={path}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      <div className={classNm}>
        <img className="project-pic" src={src} alt={content} />
        <p className="project-name">{content}</p>
      </div>
    </NavLink>
  );
};

Project.propTypes = {
  classNm: PropTypes.string,
  content: PropTypes.string,
  path: PropTypes.string,
  src: PropTypes.string,
};

Project.defaultProps = {
  classNm: '',
  content: '',
  path: '',
  src: '',
};

export default Project;
