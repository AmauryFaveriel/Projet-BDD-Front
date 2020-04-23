import React from 'react';
import renderer from 'react-test-renderer';

// This is the only way I found to test our styled components without specific logic

// Import components
import BigTitle from '../big-title';
import MediumTitle from '../medium-title';
import NavItem from '../nav-item';
import RegularText from '../regular-text';
import SubTitle from '../subtitle';

describe('BigTitle', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BigTitle>Content</BigTitle>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('MediumTitle', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MediumTitle>Content</MediumTitle>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('NavItem', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NavItem>Content</NavItem>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('RegularText', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RegularText>Content</RegularText>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SubTitle', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SubTitle>Content</SubTitle>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
