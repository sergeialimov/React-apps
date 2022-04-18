import React from 'react';

import './footer.css';

const Footer = () => (
  <footer className="product-landing__footer">
    <div className="product-landing__footer__container">
      <ul className="product-landing__footer__ul">
        <li><p className="product-landing__footer__li">Privacy</p></li>
        <li><p className="product-landing__footer__li">Terms</p></li>
        <li><p className="product-landing__footer__li">Contact</p></li>
      </ul>
    </div>
    <div className="product-landing__footer__copyright">
      Copyright
      {' '}
      {new Date().getFullYear()}
      , Original Trombones
    </div>
  </footer>
);

export default Footer;
