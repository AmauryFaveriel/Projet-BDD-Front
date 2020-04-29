import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import {
  Default, Small, Medium, Large,
} from '../stories/nav-button.stories';

describe('Renders NavButton component', () => {
  let spy;

  beforeEach(() => {
    spy = jest.fn();
  });

  test('with default behavior', () => {
    const { container, getByTestId } = render(<BrowserRouter><Default onClick={spy} /></BrowserRouter>);
    expect(container).toBeTruthy();
    const button = getByTestId('default-button');
    expect(button).toHaveStyleRule('font-size', '14px');
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  test('with a medium size', () => {
    const { container, getByTestId } = render(<BrowserRouter><Medium onClick={spy} /></BrowserRouter>);
    expect(container).toBeTruthy();
    const button = getByTestId('medium-button');
    expect(button).toHaveStyleRule('font-size', '14px');
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  test('with a small size', () => {
    const { container, getByTestId } = render(<BrowserRouter><Small onClick={spy} /></BrowserRouter>);
    expect(container).toBeTruthy();
    const button = getByTestId('small-button');
    expect(button).toHaveStyleRule('font-size', '12px');
    button.click();
    expect(spy).toHaveBeenCalled();
  });

  test('with a large size', () => {
    const { container, getByTestId } = render(<BrowserRouter><Large onClick={spy} /></BrowserRouter>);
    expect(container).toBeTruthy();
    const button = getByTestId('large-button');
    expect(button).toHaveStyleRule('font-size', '16px');
    button.click();
    expect(spy).toHaveBeenCalled();
  });
});
