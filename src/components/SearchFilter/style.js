import { Container, Box, Button, Modal } from "@mui/material";
import * as muiStyles from "@mui/material/styles";
import styled from "styled-components";

export const StyledContainer = muiStyles.styled(Container)`
width: 90vw;
min-width: 600px;
height: 5rem;
display: flex;
flex-direction: row;
justify-content: center;
border-radius: 1.5rem;
-webkit-box-shadow: 0px 5px 7px 5px rgba(0,0,0,0.2); 
box-shadow: 0px 5px 7px 5px rgba(0,0,0,0.2);

@media (max-width: 600px){
    min-width: 0;
    padding-right: 0;

}

@media (min-width: 600px){
    padding-right: 0;
    
}
`;

export const StyledBox = muiStyles.styled(Box)`

width: ${(props) => (props.width ? props.width : "")};
display: flex;
flex-direction: column;
justify-content: center;
border-right: 1px solid #3d97b4;

p{
    padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "")};
}


:first-of-type{
    padding-left: 0px;
}

input{  
 border: none;
 max-width: 90%;
}
input:focus {
    outline: none;
  }
  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media (max-width: 600px){
    width: ${(props) => (props.width ? props.width : "")};
    display: none;

    :first-of-type{
        display: flex;
        width: 70%;
    }
}
`;

export const InlineBox = muiStyles.styled(Box)`

display: flex;
flex-direction: row;
align-items: center;
flex-wrap: nowrap;
justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
height: 1.625rem;
padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "8%")};

width: ${(props) => (props.width ? props.width : "100%")};
min-width:${(props) => (props.minWidth ? props.minWidth : "")}; 

input{  
 border: none;
 max-width: 90%;
}
input:focus {
    outline: none;
  }
  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media (max-width: 600px){
    width: ${(props) => (props.width ? props.width : "100%")};
}
`;

export const StyledButton = muiStyles.styled(Button)`
border-radius: 0 1.5rem 1.5rem 0;
@media (max-width: 600px){
    width:30%;
}
`;

export const SpecialButton = muiStyles.styled(Button)`
min-width: 0;
width: ${(props) => (props.width ? props.width : "")};
`;

export const StyledModal = muiStyles.styled(Modal)`
position: 'absolute';
  top: '50%';
  left: '50%';
  transform: 'translate(-50%, -50%)';
  width: 25rem;
  height: 25rem;
  background-color: 'background.paper';
  border: '2px solid #000';
`;

export const ModalBox = muiStyles.styled(Box)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  gap: 1.25rem;
  padding-bottom: 1.25rem;

  div {
    display: flex;
    width: 100%;
    gap: 0.625rem;
  }
`;

export const StyledLine = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
  border: 2px solid #ee685f;
  border-radius: 0.5rem;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "8px")};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "0")};

  select {
    width: 90%;
    border: none;
  }

  input:focus {
    outline: none;
  }
`;

export const StyledInput = styled.input`
  width: ${(props) => (props.width ? props.width : "2ch")};
`;
