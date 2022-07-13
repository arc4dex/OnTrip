import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { TextField } from "@mui/material";

export const BackgroundRegisterModal = styled.div`
  padding: 0.625rem;
  width: 100vw;
  height: 100vh;
  margin: auto;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
`;

export const RegisterModalContainer = styled.div`
  width: 100%;
  max-width: 25rem;
  max-height: 38rem;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 0.625rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;

export const RegisterModalHeader = styled.div`
  width: 100%;
  height: 3.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const RegisterModalHeaderButton = styled.div`
  width: 100%;
  height: 1.875rem;
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 0.625rem 1.25rem 0 0;
`;

export const RegisterModalHeaderText = styled.div`
  width: 100%;
  height: 1.875rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  color: #3d97b4;
  font-weight: bolder;
  font-size: 1.5rem;
  padding: 0 0 0 1.25rem;
`;

export const StyledRegisterForm = styled.form`
  width: 100%;
  display: flex;
  padding: 0 1.25rem;
  gap: 0.625rem;
  flex-direction: column;
  align-items: center;

  .userImageDiv {
    width: 60%;
    position: relative;

    button {
      border: none;
      outline: none;
      background-color: transparent;
      color: var(--blue);
      font-size: 1.2rem;
      position: absolute;
      right: 0;
    }

    img {
      width: 92%;
    }
  }

  .imageError {
    width: 100%;
    font-weight: 400;
    font-size: 0.75rem;
    text-align: left;
    margin-left: 1.6rem;
    color: #d32f2f;
  }

  .css-1kfebxf-MuiInputBase-root-MuiOutlinedInput-root.Mui-error
    .MuiOutlinedInput-notchedOutline {
    border-color: rgb(185 185 185);
  }

  .css-1n6fnos-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
    color: rgb(185 185 185);
  }

  .css-13vppn8-MuiInputBase-root-MuiOutlinedInput-root.Mui-error
    .MuiOutlinedInput-notchedOutline {
    border-color: rgb(185 185 185);
  }

  .dateOfBirth {
    width: 100%;
    font-size: 0.9rem;
    color: rgb(185 185 185);
    text-align: start;
  }
`;

export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: #3d97b4;
  margin-top: 0.625rem;
  padding: 0 1.375rem;
`;

export const CheckboxErrorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: #d32f2f;
  font-size: 0.8rem;
  padding: 0 2.1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 0.625rem;

  button {
    width: 90%;
    height: 3.125rem;
    text-transform: capitalize;
    font-size: 1rem;
  }
`;

export const RegisterModalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 0.95rem;
  color: #3d97b4;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    .loginButton {
      border: none;
      outline: none;
      background-color: transparent;
      color: var(--blue);
      font-size: 0.9rem;
    }
  }
`;

export const StyledTextField = muiStyles.styled(TextField)`
width:100%;
`;

export const themeDate = muiStyles.createTheme({
  palette: {
    primary: {
      main: "#3d97b4",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});
