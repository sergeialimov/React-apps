import React, { Component } from 'react';

import { Recommendation } from './components';
import { getImprovements } from './helpers';

import './surveyForm.css';

class SurveyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const improvements = getImprovements();

    return (
      <main className="survey-form__main">
        <h1 className="survey-form__h1">Survey Form</h1>
        <form className="survey-form__form">
          <p className="survey-form__description">Let us know how we can improve freeCodeCamp</p>
          <div className="survey-form__form-body">
            <span className="survey-form__label">* Name:</span>
            <input className="survey-form__input survey-form__right-tab" type="text" id="name" placeholder="Enter your name" required size="45" />
            <span className="survey-form__label">* Email:</span>
            <input className="survey-form__input survey-form__right-tab" type="email" id="email" placeholder="Enter your Email" required size="145" />
            <span className="survey-form__label">* Age:</span>
            <input className="survey-form__input survey-form__right-tab" type="number" id="number" placeholder="Age" required size="45" min="10" max="100" />
            <span className="survey-form__label">Which option best describes your current role?</span>
            <select className="survey-form__select survey-form__right-tab">
              <option value="select-an-option" disabled>Select an option</option>
              <option value="student" selected>Student</option>
              <option value="fullTimeJob">Full time job</option>
              <option value="fullTimeLearner">Full time learner</option>
              <option value="preferNotToSay">Prefer not to say</option>
              <option value="other">Other</option>
            </select>
            <span className="survey-form__label labels-align-top">* How likely is that you would recommend freeCodeCamp to a friend?</span>
            <div className="survey-form__right-tab">
              <Recommendation />
            </div>
            <span className="survey-form__label">What do you like most in FCC:</span>
            <select className="survey-form__select survey-form__right-tab" value="Select an option">
              <option value="select-an-option" selected disabled>Select an option</option>
              <option value="challenges">Challenges</option>
              <option value="projects">Projects</option>
              <option value="community">Community</option>
              <option value="open-source">Open Source</option>
            </select>
            <span className="survey-form__label labels-align-top">{'Things that should be improved in the future\n(Check all that apply):'}</span>
            <div className="survey-form__right-tab">
              {improvements}
            </div>
            <span className="survey-form__label labels-align-top">Any Comments or Suggestions?</span>
            <textarea className="survey-form__textarea survey-form__right-tab" name="comment" rows="6" cols="10" defaultValue="Enter your comment here..." />
          </div>
          <div className="survey-form__submit__container">
            <button className="survey-form__submit__button" type="submit" id="submit">Submit</button>
          </div>
        </form>
      </main>
    );
  }
}

export default SurveyForm;
