import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { TextField } from "@mui/material";

export const BackgroundModal = styled.div`
  padding: 10px;
  width: 100vw;
  height: 100vh;
  margin: auto;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 350px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background: white;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ModalHeaderButton = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 10px 20px 0px 0px;
`;

export const ModalHeaderText = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  color: #3d97b4;
  font-weight: bolder;
  font-size: 1.5rem;
  padding: 0 0 0px 20px;
`;
export const StyledForm = styled.form`
  width: 100%;
  height: 150px;
  display: flex;
  padding: 10px 20px;
  gap: 5px;

  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledTextField = muiStyles.styled(TextField)`
width:100%;
`;

export const ModalFooter = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  gap: 10px;

  p {
    color: #3d97b4;
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  div {
    height: 20px;
    width: 100%;
    p {
      cursor: pointer;
    }
  }
`;
