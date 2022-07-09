import styled from "styled-components";

import * as muiStyled from "@mui/material/styles";
import { Button } from "@mui/material";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 16.5vh;
  padding: 1.5rem 1rem 1rem 1rem;
  background-color: #f3f2f0;
  bottom: 0;
  display: flex;
  align-items: stretch;
  justify-content: center;

  div {
    height: 100%;
    width: 90%;
    border-top: 1px solid #999999;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 0;

    @media (min-width: 500px) {
      flex-direction: row;
      align-items: center;
      padding: 0;
      width: 94%;
    }

    img {
      width: 4.125rem;

      @media (min-width: 500px) {
        width: 5.125rem;
      }
    }

    p {
      font-size: 0.65rem;

      @media (min-width: 500px) {
        max-width: 6rem;
      }

      a {
        color: #3d97b4;
        text-decoration: none;
      }
    }
  }
`;

export const StyledButton = muiStyled.styled(Button)`
    min-width: 0;
    width: 3.8rem;
    padding: 0;
    justify-content: flex-start;
    font-size: 0.8rem;
    text-transform: capitalize;
    text-align: center;

`;
