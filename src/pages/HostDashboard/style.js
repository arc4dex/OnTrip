import styled from "styled-components";

import * as muiStyles from "@mui/material/styles";
import { Paper } from "@mui/material";

export const AppDashHost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
`;

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

export const StyledPaper = muiStyles.styled(Paper)`
  display: flex;
  align-items: stretch;
  border-radius: 0.8rem;
  justify-content: center;
  width: 70%;
  max-width: 805px;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    margin: 1rem;

      h1 {
        text-align: center;
        font-size: 1rem;
      }
  }



    img {
      display: none;

      @media (min-width: 800px) {
        display: block;
        width: 400px;
        border-radius: 0 0.8rem 0.8rem 0;
      }
    
    
  }

`;
