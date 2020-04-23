/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { ArrowNavigationComponent } from '../stories/arrow-navigation.stories';

describe('Renders Arrow Navigation component', () => {
  let spy;

  beforeEach(() => {
    spy = jest.fn();
  });

  test('with default behavior', () => {
    const { container, getByTestId } = render(
      <ArrowNavigationComponent onClickLeft={spy} onClickRight={spy} />,
    );
    expect(container).toBeTruthy();
    const arrowLeft = getByTestId('arrow-left');
    const arrowRight = getByTestId('arrow-right');
    arrowLeft.click();
    arrowRight.click();
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
