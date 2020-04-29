import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Link,
} from 'react-router-dom';

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

const StyledNavButton = styled(Link)`
  font-size: ${(props) => sizes[props.size].fontSize};
  line-height: ${(props) => sizes[props.size].lineHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  width: 100%;
  text-align: center;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  color: ${(props) => (props.ischecked ? '#3e3027' : '#c0b6b3')};
  :disabled {
    background-color: #e5e7eb;
    color: #999999;
    cursor: not-allowed;
  }
  :hover {
    background-color: ${(props) => (props.ishoverable ? '#F39885' : '#ffffff')};
    color: #3E3027;
  }
`;

const NavButton = ({
  size, children, onClick, testid, isChecked, disabled, to, ishoverable,
}) => (
  <StyledNavButton
    ischecked={isChecked ? 'true' : undefined}
    size={size}
    data-testid={testid}
    onClick={onClick}
    ishoverable={ishoverable ? 'true' : undefined}
    disabled={disabled}
    to={to}
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
  to: '',
  ishoverable: false,
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
  /** Optionnal disabled */
  to: PropTypes.string,
  /** Optionnal disabled */
  ishoverable: PropTypes.bool,
};

export default NavButton;
