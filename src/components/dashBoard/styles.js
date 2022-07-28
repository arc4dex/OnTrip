import { Paper } from "@mui/material";
import * as muiStyles from "@mui/material/styles";
import styled from "styled-components";

export const MainSection = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 1rem;

  /*   button{
    font-size: 0.5rem;
    font-weight: 800;
    height: 3rem;
  }

  @media(min-width: 420px){
   button{
    font-size: 0.7rem;
    min-width: 64px;
    font-weight: 500;
   }
  } */
`;

export const MainPaper = muiStyles.styled(Paper)`

  height: auto;

  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1.25rem;

  border-radius: 0.62rem;
`;
export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 0.62rem;

  margin-bottom: 2.5rem;

  h1 {
    color: var(--blue);

    font-size: 1.37rem;
    font-weight: 800;
  }

  h2 {
    font-weight: 500;
    font-size: 1.25rem;
  }
`;
export const NoInfo = styled.div`
  h1 {
    color: var(--blue);
  }
`;
