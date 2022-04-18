import React from 'react';

import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import About from '@src/scenes/About';
import Contacts from '@src/scenes/Contacts';
import Projects from '@src/scenes/Projects';
import TributePage from '@src/scenes/Projects/components/Ui-projects/TributePage';
import TechDoc from '@src/scenes/Projects/components/Ui-projects/TechDoc';
import SurveyFrom from '@src/scenes/Projects/components/Ui-projects/SurveyForm';
import ProductLanding from '@src/scenes/Projects/components/Ui-projects/ProductLanding';

import './app.css';

const App = () => (
  <div id="app">
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/projects/product-landing">
          <ProductLanding />
        </Route>
        <Route path="/projects/survey-form">
          <SurveyFrom />
        </Route>
        <Route path="/projects/tech-doc">
          <TechDoc />
        </Route>
        <Route path="/projects/tribute-page">
          <TributePage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
