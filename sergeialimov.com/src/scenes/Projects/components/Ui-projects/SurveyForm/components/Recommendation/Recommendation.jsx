import React from 'react';

import './recommendation.css';

const Recommendation = () => (
  <div className="recommendation__radio-group">
    <div className="recommendation__radio-item">
      <input className="recommendation__radio-input" id="definitely" type="radio" name="recommendation" value="1" />
      <span className="recommendation__radio-span">Definitely</span>
    </div>
    <div className="recommendation__radio-item">
      <input className="recommendation__radio-input" id="maybe" type="radio" name="recommendation" value="2" />
      <span className="recommendation__radio-span">May be</span>
    </div>
    <div className="recommendation__radio-item">
      <input className="recommendation__radio-input" id="notSure" type="radio" name="recommendation" value="3" />
      <span className="recommendation__radio-span">Not sure</span>
    </div>
  </div>
);

export default Recommendation;
