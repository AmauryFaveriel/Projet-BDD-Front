/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { NavigationComponent } from '../stories/navigation.stories';

describe('Renders Navigation component', () => {
  let spy;

  beforeEach(() => {
    spy = jest.fn();
  });

  test('with default behavior', () => {
    const { container, getByTestId } = render(
      <NavigationComponent
        testid="navigation"
        checkedIndex={0}
        onClick={(index) => spy(index)}
        elements={[
          { name: 'Recipes', href: 'recipes' },
          { name: 'About', href: 'about' },
          { name: 'Contact', href: 'contact' },
        ]}
      />,
    );
    expect(container).toBeTruthy();
    const recipes = getByTestId('Recipes');
    const about = getByTestId('About');
    const contact = getByTestId('Contact');
    expect(recipes).toBeTruthy();
    expect(about).toBeTruthy();
    expect(contact).toBeTruthy();
    // Simulate click on nav elements
    recipes.click();
    expect(spy).toHaveBeenCalledWith(0);
    about.click();
    expect(spy).toHaveBeenCalledWith(1);
    contact.click();
    expect(spy).toHaveBeenCalledWith(2);
  });
});
