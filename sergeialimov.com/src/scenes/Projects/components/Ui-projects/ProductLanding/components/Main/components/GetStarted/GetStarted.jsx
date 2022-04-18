import React from 'react';

import './getStarted.css';

const GetStarted = () => (
  <div className="get-started__container">
    <form action="https://www.freecodecamp.com/email-submit" className="get-started__form" htmlFor="submit">
      <div>
        <input type="email" className="get-started__form__email" name="email" placeholder="Enter your email address" />
      </div>
      <div className="get-started__form__submit__wrapper">
        <input type="submit" name="email" className="get-started__form__submit__button" value="GET STARTED" />
      </div>
    </form>
  </div>
);

export default GetStarted;
