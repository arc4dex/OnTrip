import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { TextField } from "@mui/material";

export const BackgroundModal = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  width: 85%;
  max-width: 21rem;
  height: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: white;
  border-radius: 0.625rem;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  position: fixed;
  padding: 1.2rem;

  .closeButton {
    position: absolute;
    position: absolute;
    top: 3px;
    right: 7px;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 4rem;
  text-align: center;
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
  display: flex;
  flex-direction: row;
  color: #3d97b4;
  font-weight: bolder;
  align-items: center;
  justify-content: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

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
