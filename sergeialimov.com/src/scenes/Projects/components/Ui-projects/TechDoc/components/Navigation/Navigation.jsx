import React from 'react';

import './navigation.css';

const Navigation = () => (
  <nav className="tech-doc__navigation">
    <header>
      <h1 className="tech-doc__navigation__header__h1">JS Documentation</h1>
    </header>
    <ul className="tech-doc__navigation__list">
      <li className="tech-doc__navigation__list-item"><a className="tech-doc__navigation__link" href="#introduction">Introduction</a></li>
      <li className="tech-doc__navigation__list-item"><a className="tech-doc__navigation__link" href="#requirements">What you should already know</a></li>
      <li className="tech-doc__navigation__list-item"><a className="tech-doc__navigation__link" href="#jsAndJava">JavaScript and Java</a></li>
      <li className="tech-doc__navigation__list-item"><a className="tech-doc__navigation__link" href="#helloWorld">Hello world</a></li>
      <li className="tech-doc__navigation__list-item"><a className="tech-doc__navigation__link" href="#variables">Variables</a></li>
      <li className="tech-doc__navigation__list-item"><a className="tech-doc__navigation__link" href="#declaringVariables">Declaring variables</a></li>
      <li className="tech-doc__navigation__list-item"><a className="tech-doc__navigation__link" href="#variableScope">Variable scope</a></li>
    </ul>
  </nav>
);

export default Navigation;
