import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const sizes = {
  small: {
    fontSize: '50px',
    lineHeight: '70px',
  },
  medium: {
    fontSize: '64px',
    lineHeight: '90px',
  },
  large: {
    fontSize: '84px',
    lineHeight: '108px',
  },
};

const BigTitle = styled.label`
  font-family: Lora;
  font-weight: bold;
  font-size: ${(props) => sizes[props.size].fontSize};
  line-height: ${(props) => sizes[props.size].lineHeight};
  color: #3e3027;
  font-style: normal;
`;

// eslint-disable-next-line react/prop-types
const Title = ({ size, children }) => <BigTitle size={size}>{children}</BigTitle>;

/* Will show the right 'tag' within documentation */
BigTitle.displayName = 'BigTitle';

BigTitle.defaultProps = {
  size: 'large',
};

BigTitle.propTypes = {
  /** Optionnal sizes */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Title;
