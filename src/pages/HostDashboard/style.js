import styled from "styled-components";

export const SpecialDiv = styled.div`
  height: 70vh;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    align-self: center;
    width: 68%;
    text-align: center;
  }

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
