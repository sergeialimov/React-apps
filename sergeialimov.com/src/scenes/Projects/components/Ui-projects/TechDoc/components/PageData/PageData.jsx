import React from 'react';

import getPageDataContent from './pageDataContent';

import './pageData.css';

const classNames = {
  p: 'tech-doc__page-data__paragraph',
  text: 'tech-doc__page-data__text',
  ul: 'tech-doc__page-data__list',
  li: 'tech-doc__page-data__list-item',
  code: 'tech-doc__page-data__code',
};

const pageDataContent = getPageDataContent(classNames);

const content = pageDataContent.map((x) => (
  <section className="main-section" id={x.id}>
    <header>
      <h2 className="tech-doc__page-data__header_h2">{x.header}</h2>
    </header>
    {x.body}
  </section>
));

const PageData = () => (
  <div className="tech-doc__page-data">
    {content}
  </div>
);

export default PageData;
