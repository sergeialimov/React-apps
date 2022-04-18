import React from 'react';

import './pricing.css';

const Pricing = () => (
  <div className="pricing__container">
    <div className="pricing__price-block">
      <div className="pricing__price__header">TENOR TROMBONE JP230</div>
      <p className="pricing__price">$600</p>
      <p className="pricing__description">
        {
        `The JP135 is John Packer’s Bb valve trombone.
        Ideal for valve players who want to dabble with a trombone without learning slide positions.
        Also very handy for trumpet teachers to take to trombone lessons to help the student learn and focus on the sound.`
        }
      </p>
      <div className="pricing__submit__wrapper">
        <input className="pricing__submit__button" type="submit" name="select" id="select-tenor" value="SELECT" />
      </div>
    </div>
    <div className="pricing__price-block">
      <div className="pricing__price__header">BASS TROMBONE JP230</div>
      <p className="pricing__price">$900</p>
      <p className="pricing__description">
        {
        `The JP230 Rath would be suitable for a progressing player and would be suited to playing in wind bands and concert bands, as well as performing in jazz ensembles or big bands.
        They are characterised by a professional standard of workmanship and a very high level of performance.
        `
        }
      </p>
      <div className="pricing__submit__wrapper">
        <input className="pricing__submit__button" type="submit" name="select" id="select-bass" value="SELECT" />
      </div>
    </div>
    <div className="pricing__price-block">
      <div className="pricing__price__header">VALVE TROMBONE JP333</div>
      <p className="pricing__price">$1200</p>
      <p className="pricing__description">
        {
          `The JP333 Rath is John Packer's Double Valve Bass Trombone and is suitable for musicians who are looking for a mid range/pro level instrument perfectly suited to orchestral playing,
          in a brass band section and also in a trombone section in a big band.
          `
        }
      </p>
      <div className="pricing__submit__wrapper">
        <input className="pricing__submit__button" type="submit" name="select" id="select-valve" value="SELECT" />
      </div>
    </div>
  </div>
);

export default Pricing;
