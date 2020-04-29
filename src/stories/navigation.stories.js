/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { MemoryRouter } from 'react-router';
import Navigation from '../components/molecules/navigation';

// eslint-disable-next-line import/prefer-default-export
export const NavigationComponent = ({
  testid, checkedIndex, onClick, elements,
}) => (
  <MemoryRouter>
    <Navigation
      testid={testid}
      checkedIndex={checkedIndex}
      onClick={onClick}
      elements={elements}
    />
  </MemoryRouter>
);
