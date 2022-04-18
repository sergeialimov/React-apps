import React from 'react';

import BaseTemplate from '@src/templates/Base';
import Project from './components';

import tribute from './components/Ui-projects/TributePage/tribute.jpg';
import doc from './components/Ui-projects/TechDoc/doc.jpg';
import survey from './components/Ui-projects/SurveyForm/survey.jpg';
import land from './components/Ui-projects/ProductLanding/land.jpg';

import './projects.css';

const link = <a className="projects__nda-link" href="https://en.wikipedia.org/wiki/Non-disclosure_agreement" rel="noreferrer" target="_blank">NDA</a>;

const Projects = () => {
  const content = (
    <section id="projects">
      <div className="projects__content">
        <h1 className="projects__header-h1">Study projects</h1>
        <p className="projects__text projects__text__inline">
          Most of my work results are under
        </p>
        {' '}
        {link}
        {' '}
        <p className="projects__text projects__text__inline">and cannot be published</p>
        <p className="projects__text">{'I\'ve created small "pet" projects to demonstrate my skills in web layouts'}</p>
        <p className="projects__text" />
        <p className="projects__text">The following projects were done while taking the course on Freecodecamp</p>
        <a className="projects__link" href="https://www.freecodecamp.org/learn" rel="noreferrer" target="_blank">
          Responsive Web Design Certification
        </a>

        <h2 className="projects__header-h2">UI projects</h2>
        <div id="project-tiles">
          <Project
            content="Tribute page"
            className="project-tile left-column"
            path="/projects/tribute-page"
            src={tribute}
          />
          <Project
            content="Survey Form"
            className="project-tile right-column"
            path="/projects/survey-form"
            src={survey}
          />
          <Project
            content="Technical documentation"
            className="project-tile left-column"
            path="/projects/tech-doc"
            src={doc}
          />
          <Project
            content="Product landing page"
            className="project-tile right-column"
            path="/projects/product-landing"
            src={land}
          />
        </div>
        <h2 className="projects__header-h2">The code can be found on my Github account:</h2>
        <a className="projects__github-link" href="https://github.com/sergeialimov" rel="noreferrer" target="_blank">github.com/sergeialimov</a>
      </div>
    </section>
  );

  return (
    <BaseTemplate
      content={content}
    />
  );
};

export default Projects;
