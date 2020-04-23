import styled from 'styled-components';

const RegularText = styled.label`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #3e3027;
`;

/* Will show the right 'tag' within documentation */
RegularText.displayName = 'RegularText';

export default RegularText;
