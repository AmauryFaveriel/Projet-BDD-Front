import React from 'react';
import renderer from 'react-test-renderer';

// This is the only way I found to test our styled components without specific logic

// Import component
import Description from '../description';

describe('Description', () => {
  const spy = jest.fn();
  it('renders correctly', () => {
    const tree = renderer.create(<Description
      bigTitle="Let's cook"
      subTitle="with ottoenghi"
      text="Yotam Ottolenghi—the chef behind instant cookbook classics Jerusalem, Plenty, Ottolenghi Simple and a string of beloved London restaurants—has been at the helm of the culinary vegetable renaissance."
      buttonContent="Discover the recipe"
      testid="description"
      onClick={spy}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
