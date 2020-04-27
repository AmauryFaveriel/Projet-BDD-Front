import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Side = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: ${(props) => (props.hasBackground
    ? `no-repeat center/110% url(${props.background})`
    : `${props.background}`)};
`;

const SidePanel = ({
  hasBackground, background, children, testid,
}) => (
  <Side
    hasBackground={hasBackground}
    background={background}
    data-testid={testid}
  >
    {children}
  </Side>
);

/* Will show the right 'tag' within documentation */
SidePanel.displayName = 'Side';
SidePanel.defaultProps = {
  hasBackground: false,
  background: '#F7F2EF',
  children: null,
  testid: 'side-panel',
};

SidePanel.propTypes = {
  /** Background image url */
  background: PropTypes.string,
  /** Optionnal hasBackground */
  hasBackground: PropTypes.bool,
  /** Optionnal children */
  children: PropTypes.element,
  /** Optionnal testid */
  testid: PropTypes.string,
};

export default SidePanel;
