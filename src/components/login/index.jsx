import { Button, Modal } from "@mui/material";
import {
  BackgroundModal,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalHeaderButton,
  ModalHeaderText,
  StyledForm,
  StyledTextField,
} from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function Login({ loginModal, handleCloseModalLogin, handleOpenRegisterModal }) {
  const formSchema = yup.object().shape({
    email: yup.string().required("Required field").email("Invalid email"),
    password: yup
      .string()
      .required("Required field")
      .min(6, "Password must have at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmits = (data) => {
    console.log(data);
    handleCloseModalLogin();
  };

  return (
    <>
      <Modal open={loginModal} onClose={handleCloseModalLogin}>
        <BackgroundModal>
          <ModalContainer>
            <ModalHeader>
              <ModalHeaderButton>
                <Button
                  sx={{ minWidth: "5px" }}
                  onClick={handleCloseModalLogin}
                  variant="text"
                  color="secondary"
                >
                  X
                </Button>
              </ModalHeaderButton>
              <ModalHeaderText>
                <p>Login</p>
              </ModalHeaderText>
            </ModalHeader>
            <StyledForm id="form" onSubmit={handleSubmit(onSubmits)}>
              <StyledTextField
                error={errors.email?.message}
                helperText={errors.email?.message}
                {...register("email")}
                label="Email"
                variant="outlined"
                color="secondary"
              />
              <StyledTextField
                error={errors.password?.message}
                helperText={errors.password?.message}
                {...register("password")}
                color="secondary"
                type="password"
                label="Password"
                variant="outlined"
              />
            </StyledForm>
            <ModalFooter>
              <Button
                form="form"
                type="submit"
                variant="contained"
                sx={{ width: "100%" }}
              >
                Login
              </Button>
              <div>
                <p>Don’t have an account? </p>
                <button
                  className="registerButton"
                  onClick={() => {
                    handleCloseModalLogin();
                    handleOpenRegisterModal();
                  }}
                >
                  {" "}
                  Register!
                </button>
              </div>
            </ModalFooter>
          </ModalContainer>
        </BackgroundModal>
      </Modal>
    </>
  );
}
export default Login;
