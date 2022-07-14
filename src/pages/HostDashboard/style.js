import styled from "styled-components";

export const SpecialDiv = styled.div`
  span {
    padding-left: 1ch;
    color: blue;
    transition: 1s;
  }
  span:hover {
    cursor: pointer;
    transform: scale(1.5);
    filter: brightness(1.75);
    text-decoration: underline;
  }
`;
