import styled from "styled-components";

import * as muiStyled from "@mui/material/styles";

import { Button } from "@mui/material";

export const NomadeHeaderContent = styled.section`
  width: 90%;
  height: 6rem;
  margin-bottom: 4rem;

  @media (min-width: 515px) {
    margin-bottom: 0;
  }

  .divInfo {
    display: flex;
    height: 100%;
    justify-content: space-around;
    flex-direction: column;

    h1 {
      color: var(--blue);
    }

    p {
      font-weight: bold;
    }
  }

  .btnSection {
    width: 18.5rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: start;

    @media (min-width: 515px) {
      justify-content: end;
    }
  }

  @media (min-width: 32.188rem) {
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
`;

export const StyledButton = muiStyled.styled(Button)`
    margin-left: 1rem;
    margin-top: 0.5rem;
    text-transform: capitalize;
    border-radius: 0.5rem;
    font-size: 0.8rem;

    @media (min-width: 25rem){
        height: 2.281rem;
    }
`;
