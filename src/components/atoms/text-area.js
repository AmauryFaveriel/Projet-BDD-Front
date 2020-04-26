import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const sizes = {
  small: {
    fontSize: '12px',
    lineHeight: '16px',
    height: '218px',
  },
  medium: {
    fontSize: '14px',
    lineHeight: '18px',
    height: '150px',
  },
  large: {
    fontSize: '16px',
    lineHeight: '20px',
    height: '224px',
  },
};

const StyledTextArea = styled.textarea`
    font-family: Roboto;
    font-weight: 300;
    font-size:  ${(props) => sizes[props.size].fontSize};
    line-height: ${(props) => sizes[props.size].lineHeight};
    color: #000;
    height: ${(props) => sizes[props.size].height};
    outline: none;
    transition: all ease .4s;
    padding: 8px;
    border: 1px solid #E5E7EB;
    :focus {
        border: 1px solid #F39885;
    }
    :disabled {
        background-color: #E5E7EB;
        cursor: not-allowed;
    }
    ::placeholder {
        color: #7C859E;
    }
`;

const TextArea = ({
  size, onChange, placeholder, testid, rows, cols,
}) => (
  <StyledTextArea
    rows={rows}
    cols={cols}
    size={size}
    data-testid={testid}
    onChange={onChange}
    placeholder={placeholder}
  />
);

/* Will show the right 'tag' within documentation */
TextArea.displayName = 'TextArea';
TextArea.defaultProps = {
  size: 'medium',
  placeholder: 'Type here',
  testid: 'textarea',
  rows: 10,
  cols: 50,
};

TextArea.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  testid: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
};

export default TextArea;
