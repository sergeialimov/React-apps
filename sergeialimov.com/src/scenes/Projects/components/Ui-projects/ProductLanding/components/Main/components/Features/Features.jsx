import React from 'react';

import './features.css';
import image from './cameraIcon.png';

const Features = () => (
  <div className="features__container" name="features">
    <div className="features__feature__container">
      <div className="features__feature__icon">
        <img src={image} width="50" alt="alt" />
      </div>
      <div>
        <p className="features__feature__header">Premium Materials</p>
        <p className="features__feature__text">Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.</p>
      </div>
    </div>
    <div className="features__feature__container">
      <div className="features__feature__icon">
        <img src={image} width="50" alt="alt" />
      </div>
      <div>
        <p className="features__feature__header">Fast Shipping</p>
        <p className="features__feature__text">We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</p>
      </div>
    </div>
    <div className="features__feature__container">
      <div className="features__feature__icon">
        <img src={image} width="50" alt="alt" />
      </div>
      <div>
        <p className="features__feature__header">Quality Assurance</p>
        <p className="features__feature__text">For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.</p>
      </div>
    </div>
  </div>
);

export default Features;
