import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const sizes = {
  small: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  medium: {
    fontSize: '14px',
    lineHeight: '18px',
  },
  large: {
    fontSize: '16px',
    lineHeight: '20px',
  },
};

const StyledButton = styled.button`
  font-size: ${(props) => sizes[props.size].fontSize};
  line-height: ${(props) => sizes[props.size].lineHeight};
  color: #fff;
  width: ${(props) => props.width};
  outline: none;
  padding: 16px;
  border-radius: 4px;
  transition: all ease 0.5s;
  border: 1px solid #f4f6f9;
  background-color: #f39885;
  cursor: pointer;
  :disabled {
    background-color: #c0b6b3;
    cursor: not-allowed;
  }
  :hover {
    background-color: #c0b6b3;
  }
`;

const Button = ({
  size, children, onClick, testid, width, disabled,
}) => (
  <StyledButton
    size={size}
    data-testid={testid}
    onClick={onClick}
    width={width}
    disabled={disabled}
  >
    {children}
  </StyledButton>
);

/* Will show the right 'tag' within documentation */
Button.displayName = 'Button';
Button.defaultProps = {
  size: 'medium',
  testid: 'button',
  disabled: false,
  width: '100%',
};

Button.propTypes = {
  /** Optionnal sizes */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Children as ONE element */
  children: PropTypes.element.isRequired,
  /** Callback when clicked */
  onClick: PropTypes.func.isRequired,
  /** Optionnal testid */
  testid: PropTypes.string,
  /** Optionnal string */
  width: PropTypes.string,
  /** Optionnal disabled */
  disabled: PropTypes.bool,
};

export default Button;
