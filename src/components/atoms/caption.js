import styled from 'styled-components';

const Caption = styled.label`
    font-family: Work Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    text-transform: capitalize;
    color: #3E3027;
`;

/* Will show the right 'tag' within documentation */
Caption.displayName = 'Caption';

export default Caption;
