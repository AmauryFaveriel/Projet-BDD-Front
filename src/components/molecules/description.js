import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BigTitle from '../atoms/big-title';
import SubTitle from '../atoms/subtitle';
import RegularText from '../atoms/regular-text';
import Button from '../atoms/button';
import MediumTitle from '../atoms/medium-title';

const StyledDescriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 260px;
  justify-content: space-between;
  width: 70%;
`;

const Description = ({
  bigTitle,
  subTitle,
  titleSize,
  text,
  buttonContent,
  mediumTitle,
  testid,
  onClick,
}) => (
  <StyledDescriptionGroup data-testid={testid}>
    {bigTitle && (
    <BigTitle size={titleSize}>
      <span>{bigTitle}</span>
    </BigTitle>
    )}
    {subTitle
    && (
    <SubTitle>
      <span>{subTitle}</span>
    </SubTitle>
    )}
    {text
    && (
    <RegularText>
      <span>{text}</span>
    </RegularText>
    )}
    {mediumTitle
    && (
    <MediumTitle width="245px" onClick={() => onClick()}>
      <span>{mediumTitle}</span>
    </MediumTitle>
    )}
    {buttonContent
    && (
    <Button width="245px" onClick={() => onClick()}>
      <span>{buttonContent}</span>
    </Button>
    )}
  </StyledDescriptionGroup>
);

/* Will show the right 'tag' within documentation */
Description.displayName = 'Description';
Description.defaultProps = {
  testid: 'description',
  bigTitle: null,
  subTitle: null,
  text: null,
  buttonContent: null,
  onClick: null,
  mediumTitle: null,
  titleSize: 'large',
};

Description.propTypes = {
  bigTitle: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string,
  buttonContent: PropTypes.string,
  testid: PropTypes.string,
  onClick: PropTypes.func,
  mediumTitle: PropTypes.string,
  titleSize: PropTypes.string,
};

export default Description;
