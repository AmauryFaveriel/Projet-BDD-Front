import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavButton from '../atoms/nav-button';

const StyledNavigationGroup = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100%;
  border: 1px solid #F7F2EF;
`;

const Navigation = ({
  checkedIndex, onClick, testid, elements,
}) => (
  <StyledNavigationGroup data-testid={testid}>
    {elements.map((element, index) => (
      <NavButton
        testid={element.name}
        onClick={() => onClick(index)}
        key={element.name}
        isChecked={index === checkedIndex}
        to={`/${element.href}`}
      >

        <span>{element.name}</span>
      </NavButton>
    ))}
  </StyledNavigationGroup>
);

/* Will show the right 'tag' within documentation */
Navigation.displayName = 'Navigation';
Navigation.defaultProps = {
  testid: 'navigation',
  checkedIndex: -1,
};

Navigation.propTypes = {
  checkedIndex: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
    }),
  ).isRequired,
};

export default Navigation;
