import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BigTitle from '../atoms/big-title';
import SubTitle from '../atoms/subtitle';
import RegularText from '../atoms/regular-text';
import Button from '../atoms/button';

const StyledDescriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: space-between;
  width: 70%;
`;

const Description = ({
  bigTitle,
  subTitle,
  text,
  buttonContent,
  testid,
  onClick,
}) => (
  <StyledDescriptionGroup data-testid={testid}>
    <BigTitle large>
      <span>{bigTitle}</span>
    </BigTitle>
    <SubTitle>
      <span>{subTitle}</span>
    </SubTitle>
    <RegularText>
      <span>{text}</span>
    </RegularText>
    <Button width="245px" onClick={() => onClick()}>
      <span>{buttonContent}</span>
    </Button>
  </StyledDescriptionGroup>
);

/* Will show the right 'tag' within documentation */
Description.displayName = 'Description';
Description.defaultProps = {
  testid: 'description',
};

Description.propTypes = {
  bigTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired,
  testid: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Description;
