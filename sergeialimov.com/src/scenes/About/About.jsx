import React from 'react';
import './about.css';
import BaseTemplate from '@src/templates/Base';

const About = () => {
  const content = (
    <section id="welcome-section">
      <h1 className="welcome__header-h1">{'Hi, I\'am Sergei Alimov'}</h1>
      <h2 className="welcome__header-h2">Remote Javascript developer</h2>
    </section>
  );

  return (
    <BaseTemplate
      content={content}
    />
  );
};

export default About;
