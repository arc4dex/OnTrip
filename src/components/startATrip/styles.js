import { Paper } from "@mui/material";
import * as muiStyles from '@mui/material/styles'

export const CardPaper = muiStyles.styled(Paper)`
 width: 90%;
 
 display: flex;

 align-items: center;

 section{

  width: 100%;
  
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;

  padding: 2rem;

  gap: 1rem;
 }

 button{
  width: 70%;

 }

 div{
  width: 60%;
  height: 100%;
  
  display: none;
  justify-content: center;

  img{
    width: 100%;
    height: 100%;

    border-radius: 0 0.3rem 0.3rem 0;
  }
 }

 .tag{
  cursor: none;
 }

 @media(min-width:850px){

  align-items: left;
  height: 21.8rem;

  section{
    width: 45%;
    
    display: flex;

    padding: 1rem;
  }

  div{
    width: 70%;
    display: flex;
  }
 }
`
