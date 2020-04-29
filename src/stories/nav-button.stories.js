/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import NavButton from '../components/atoms/nav-button';

export const CheckedNavButton = (props) => (
  // <MemoryRouter>
  <NavButton isChecked testid="checked-button" onClick={props.onClick}>
    <span>Checked button</span>
  </NavButton>
);

export const Small = (props) => (
  // <MemoryRouter>
  <NavButton size="small" testid="small-button" onClick={props.onClick}>
    <span>Small button</span>
  </NavButton>
);

export const Default = (props) => (
  // <MemoryRouter>
  <NavButton testid="default-button" onClick={props.onClick}>
    <span>Default button</span>
  </NavButton>
);

export const Medium = (props) => (
  // <MemoryRouter>
  <NavButton size="medium" testid="medium-button" onClick={props.onClick}>
    <span>Medium button</span>
  </NavButton>
);

export const Large = (props) => (
  // <MemoryRouter>
  <NavButton size="large" testid="large-button" onClick={props.onClick}>
    <span>Large button</span>
  </NavButton>
);
