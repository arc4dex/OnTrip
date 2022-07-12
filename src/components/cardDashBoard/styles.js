import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { Paper } from "@mui/material";

export const CardPaper = muiStyles.styled(Paper)`
 display: flex;

 padding: 1.25rem;

 width: 90%;
 height: auto;

 opacity: ${(props) => (props.opacity === "cancelled" ? 0.5 : 1)};

 img{
  max-width: 20rem;

  border-radius: 0.7rem;

  position: relative;
 }

 .imgContainer{
    position: relative;
  }

 @media(max-width: 1025px){
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
 }

 @media(max-width:822px){
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  padding: 0.62rem;

  img{
    max-width:13rem;
  }
 }
`;

export const ContainerInfoCard = styled.section`
  width: 50%;
  height: auto;

  margin-right: 1.56rem;
  margin-left: 1.56rem;

  display: flex;
  flex-direction: column;

  justify-content: center;

  gap: 0.7rem;

  h1 {
    margin-top: 1rem;
  }

  p {
    text-align: justify;
  }

  section {
    width: 15rem;

    display: flex;

    justify-content: space-between;

    margin-top: 1rem;

    .boldText {
      font-weight: 600;
    }
  }

  @media (max-width: 822px) {
    width: 90%;

    align-items: center;

    section {
      display: none;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 1.1rem;
      margin-top: 1rem;
    }
  }
`;
export const ContainerButtons = styled.section`
  width: 20%;
  height: auto;

  display: flex;
  flex-direction: column;

  justify-content: center;

  gap: 1.25rem;

  @media (max-width: 1025px) {
    width: 100%;

    flex-direction: row;

    margin-top: 1.25rem;
  }

  @media (max-width: 822px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 90%;

    flex-direction: column;
  }
`;
