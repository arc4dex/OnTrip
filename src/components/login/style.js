import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { TextField } from "@mui/material";

export const BackgroundModal = styled.div`
  padding: 0.625rem;
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
  max-width: 21.875rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: white;
  border-radius: 0.625rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ModalHeaderButton = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 0.625rem 1.25rem 0 0;
`;

export const ModalHeaderText = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  color: #3d97b4;
  font-weight: bolder;
  font-size: 1.5rem;
  padding: 0 0 0 1.25rem;
`;
export const StyledForm = styled.form`
  width: 100%;
  height: 10rem;
  display: flex;
  padding: 0.625rem 1.25rem;
  gap: 0.5rem;

  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledTextField = muiStyles.styled(TextField)`
width:100%;
`;

export const ModalFooter = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.25rem;
  gap: 0.625rem;

  p {
    color: #3d97b4;
    width: 100%;
    height: 1.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  div {
    height: 7.25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    .registerButton {
      border: none;
      outline: none;
      background-color: transparent;
      color: var(--blue);
      font-size: 1rem;
    }
  }
`;
