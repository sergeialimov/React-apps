import React from 'react';

import { Improvement } from '../components';

const improvementsData = [
  'Front-end Projects',
  'Back-end Projects',
  'Data visualization',
  'Challenges',
  'Open Source Community',
  'Gitter help rooms',
  'Videos',
  'City Meetups',
  'Wiki',
  'Forum',
];

export const getImprovements = () => (
  improvementsData.map((x) => (
    <Improvement
      content={x}
      id={x}
      forr={x}
      value={improvementsData.indexOf(x)}
    />
  )));
