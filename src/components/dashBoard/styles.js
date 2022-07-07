import { Paper } from "@mui/material";
import * as muiStyles from '@mui/material/styles'
import styled from "styled-components";

export const MainSection = styled.main`

  .redLine{
    border-top: 2px solid red;

    margin-bottom: 10px;
  }
`

export const MainPaper = muiStyles.styled(Paper)`
  width: 90%;
  height: auto;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  border-radius: 10px;
`
export const ContainerInfo = styled.div`
  width: 90%;

  display: flex;
  justify-content: space-between;

  gap: 10px;

  margin-bottom: 40px;

  h1{
    color: var(--blue);

    font-size: 22px;
    font-weight: 800;
  }

  h2{
    font-weight: 500;
    font-size: 20px;
  }
`