import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

const Header = () => (
  <nav className="header__navigation">
    <ul className="header__navigation__list">
      <li className="header__navigation__link">
        <NavLink
          className="nav-link"
          to="/"
        >
          About
        </NavLink>
      </li>
      <li className="header__navigation__link">
        <NavLink
          className="nav-link"
          to="/projects"
        >
          Study projects
        </NavLink>
      </li>
      <li className="header__navigation__link">
        <NavLink
          className="nav-link"
          to="/contacts"
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;
