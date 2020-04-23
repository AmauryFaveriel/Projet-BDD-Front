import styled from 'styled-components';

const MediumTitle = styled.label`
  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  color: #f39885;
`;

/* Will show the right 'tag' within documentation */
MediumTitle.displayName = 'MediumTitle';

export default MediumTitle;
