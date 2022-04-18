import React from 'react';

import './header.css';

const Header = () => (
  <header className="product-landing__header">
    <img className="product-landing__header__logo" src="https://s3.amazonaws.com/freecodecamp/original_trombones.png" alt="trombones" />
    <nav className="product-landing__header__navigation">
      <ul className="product-landing__header__navigation__ul">
        <li><a className="product-landing__header__navigation__li" href="#feature">Features</a></li>
        <li><a className="product-landing__header__navigation__li" href="#how-it-works">How it works</a></li>
        <li><a className="product-landing__header__navigation__li" href="#pricing">Pricing</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
