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

export const ModalHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: white;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 150px;
  display: flex;
  padding: 10px;
  gap: 5px;

  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledTextField = muiStyles.styled(TextField)`
width:100%;
`;
