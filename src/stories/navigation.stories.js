/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Navigation from '../components/molecules/navigation';

// eslint-disable-next-line import/prefer-default-export
export const NavigationComponent = (props) => (
  <Navigation
    testid={props.testid}
    checkedIndex={props.checkedIndex}
    onClick={props.onClick}
    elements={props.elements}
  />
);
