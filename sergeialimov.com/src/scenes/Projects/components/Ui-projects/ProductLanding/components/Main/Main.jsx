import React from 'react';

import {
  GetStarted,
  Features,
  HowItWorks,
  Pricing,
} from './components';
import './main.css';

const Main = () => (
  <main className="product-landing__main">
    <h1 className="product-landing__header__h1">Handcrafted, home-made masterpieces</h1>
    <GetStarted />
    <Features />
    <HowItWorks />
    <Pricing />
  </main>
);

export default Main;
