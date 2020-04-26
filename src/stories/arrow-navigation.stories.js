/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { MemoryRouter } from 'react-router';
import ArrowNavigation from '../components/molecules/arrow-navigation';

// eslint-disable-next-line import/prefer-default-export
export const ArrowNavigationComponent = (props) => (
  <MemoryRouter>
    <ArrowNavigation
      testid="arrow-navigation"
      onClickLeft={props.onClickLeft}
      onClickRight={props.onClickRight}
    />
  </MemoryRouter>
);
