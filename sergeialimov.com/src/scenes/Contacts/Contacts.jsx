import React from 'react';

import BaseTemplate from '@src/templates/Base';
import Contact from './components';

import './contacts.css';

const Contacts = () => {
  const content = (
    <section id="social">
      <div className="content">
        <header>
          <h1 className="contacts__header-h1">{'Let\'s work together'}</h1>
        </header>
        <div className="contacts">
          <Contact
            link="https://www.linkedin.com/in/sergei-alimov/"
            content="LinkedIn"
          />
          <Contact
            link="https://github.com/sergeialimov"
            content="Github"
          />
          <Contact
            link="https://t.me/sergeialimov"
            content="Telegram"
          />
          <Contact
            link="mailto:8912652@gmail.com"
            content="Email"
          />
        </div>
      </div>
    </section>
  );

  return (
    <BaseTemplate
      content={content}
    />
  );
};

export default Contacts;
