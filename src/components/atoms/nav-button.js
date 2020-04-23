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

const StyledNavButton = styled.button`
  font-size: ${(props) => sizes[props.size].fontSize};
  line-height: ${(props) => sizes[props.size].lineHeight};
  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  width: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.isChecked ? '#f39885' : '#ffffff')};
  color: ${(props) => (props.isChecked ? '#3e3027' : '#c0b6b3')};
  :disabled {
    background-color: #e5e7eb;
    color: #999999;
    cursor: not-allowed;
  }
  :hover {
    background-color: #f39885;
    color: #3e3027;
  }
`;

const NavButton = ({
  size, children, onClick, testid, isChecked, disabled,
}) => (
  <StyledNavButton
    isChecked={isChecked}
    size={size}
    data-testid={testid}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </StyledNavButton>
);

/* Will show the right 'tag' within documentation */
NavButton.displayName = 'NavButton';
NavButton.defaultProps = {
  size: 'medium',
  testid: 'NavButton',
  disabled: false,
  isChecked: false,
};

NavButton.propTypes = {
  /** Optionnal sizes */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Children as ONE element */
  children: PropTypes.element.isRequired,
  /** Callback when clicked */
  onClick: PropTypes.func.isRequired,
  /** Optionnal testid */
  testid: PropTypes.string,
  /** Optionnal isChecked */
  isChecked: PropTypes.bool,
  /** Optionnal disabled */
  disabled: PropTypes.bool,
};

export default NavButton;
