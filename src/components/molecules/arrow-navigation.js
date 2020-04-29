import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import leftArrow from '../../assets/left_arrow.png';
import rightArrow from '../../assets/right_arrow.png';

// import StyledArrowButton from "../atoms/arrow-button";

import NavButton from '../atoms/nav-button';

const StyledArrowNavigationGroup = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 110px;
`;

const ArrowNavigation = ({
  onClickLeft,
  onClickRight,
  testid,
  testidArrowLeft,
  testidArrowRight,
}) => (
  <StyledArrowNavigationGroup data-testid={testid}>
    <NavButton ishoverable testid={testidArrowLeft} onClick={() => onClickLeft()}>
      <img alt="left-arrow" src={leftArrow} width="15px" />
    </NavButton>
    <NavButton ishoverable testid={testidArrowRight} onClick={() => onClickRight()}>
      <img alt="right-arrow" src={rightArrow} width="15px" />
    </NavButton>
  </StyledArrowNavigationGroup>
);

/* Will show the right 'tag' within documentation */
ArrowNavigation.displayName = 'ArrowNavigation';

ArrowNavigation.defaultProps = {
  testid: 'arrow-navigation',
};

ArrowNavigation.propTypes = {
  /** Callback when clicked left */
  onClickLeft: PropTypes.func.isRequired,
  /** Callback when clicked right */
  onClickRight: PropTypes.func.isRequired,
  /** Optionnal testid */
  testid: PropTypes.string,
  /** Optionnal testidArrowLeft */
  testidArrowLeft: PropTypes.string,
  /** Optionnal testidArrowRight */
  testidArrowRight: PropTypes.string,
};

ArrowNavigation.defaultProps = {
  testidArrowLeft: 'arrow-left',
  testidArrowRight: 'arrow-right',
};

export default ArrowNavigation;
