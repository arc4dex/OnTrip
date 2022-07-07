import styled from "styled-components";
import * as muiStyles from '@mui/material/styles'
import { Paper } from '@mui/material'

export const CardPaper = muiStyles.styled(Paper)`
 display: flex;

 padding: 20px;

 width: 90%;
 height: auto;

 img{
  max-width: 18rem;

  border-radius: 0.7rem;
 }

 @media(max-width: 980px){
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
 }

 @media(max-width:822px){
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  padding: 10px;

  img{
    max-width:13rem;
    margin-right: 25px;
  }
 }
`

export const ContainerInfoCard = styled.section`
  width: 50%;
  height: auto;

  margin-right: 25px;
  margin-left: 25px;

  display: flex;
  flex-direction: column;

  justify-content: center;

  gap: 0.7rem;
 
  section{
    width: 15rem;

    display: flex;

    justify-content: space-between;

    margin-top: 15px;

    .line{
      border-right: 2px solid grey;
    }

    .boldText{
      font-weight: 600;
    }
  }

  @media(max-width:822px){
    width: 90%;

    align-items: center;
  }
  
`
export const ContainerButtons = styled.section`
  width: 20%;
  height: auto;

  display: flex;
  flex-direction: column;

  justify-content: center;

  gap: 20px;

  @media(max-width:980px){
    width: 100%;
    height: 3rem;

    flex-direction: row;

    margin-top: 20px;
  }

  
  @media(max-width:822px){
    width: 26rem;
  }

  @media(max-width: 500px){
    width: 90%;

    flex-direction: column;
  }
`