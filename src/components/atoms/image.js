import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img``;

const Image = ({
  testid, src, alt, width, height,
}) => (
  <StyledImage
    testId={testid}
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
);
/* Will show the right 'tag' within documentation */
Image.displayName = 'Image';
Image.defaultProps = {
  testid: 'Image',
  src: '',
  alt: '',
  width: 'auto',
  height: 'auto',
};

Image.propTypes = {
  /** Optionnal testid */
  testid: PropTypes.string,
  /** src */
  src: PropTypes.string,
  /** alt */
  alt: PropTypes.string,
  /** Optionnal width */
  width: PropTypes.number,
  /** Optionnal height */
  height: PropTypes.number,
};

export default Image;
