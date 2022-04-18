import React from 'react';

import './howItWorks.css';

const HowItWorks = () => (
  <div className="product-landing__how-it-works__container">
    <iframe
      className=".product-landing__how-it-works__video"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/y8Yv4pnO7qc"
      frameBorder="0"
      allowFullScreen
      title="how-it-works"
    />
  </div>
);

export default HowItWorks;
