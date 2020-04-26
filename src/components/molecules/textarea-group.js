import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Label from '../atoms/label';
import TextArea from '../atoms/text-area';
import Error from '../atoms/error';

const StyledTextAreaGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
`;

const TextAreaGroup = ({
  size, onChange, label, error, disabled, testid,
}) => (
  <StyledTextAreaGroup>
    <Label size={size}><span>{label}</span></Label>
    <TextArea
      size={size}
      disabled={disabled}
      onChange={onChange}
      data-testid={testid}
    />
    {error && <Error size="small"><span>There is an error !</span></Error>}
  </StyledTextAreaGroup>
);

/* Will show the right 'tag' within documentation */
TextAreaGroup.displayName = 'TextAreaGroup';
TextAreaGroup.defaultProps = {
  size: 'medium',
  error: false,
  disabled: false,
  testid: 'textarea-group',
};

TextAreaGroup.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  testid: PropTypes.string,
};

export default TextAreaGroup;
