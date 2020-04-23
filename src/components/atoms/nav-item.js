import styled from 'styled-components';

const NavItem = styled.p`
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #c0b6b3;
  :hover {
    color: #3e3027;
    cursor: pointer;
  }
`;

/* Will show the right 'tag' within documentation */
NavItem.displayName = 'NavItem';

export default NavItem;
