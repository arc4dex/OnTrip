import { useState } from "react";

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
import { Link } from "react-router-dom";

function Login() {
  const [loginModal, setLoginModal] = useState(false);

  const handleOpenModal = () => {
    setLoginModal(true);
  };

  const handleCloseModal = () => {
    setLoginModal(false);
  };

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
  };

  return (
    <>
      {/* <Button onClick={handleOpenModal} variant="contained">
        Login
      </Button> */}
      <Modal open={loginModal} onClose={handleCloseModal}>
        <BackgroundModal>
          <ModalContainer>
            <ModalHeader>
              <ModalHeaderButton>
                <Button
                  sx={{ minWidth: "5px" }}
                  onClick={handleCloseModal}
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
                //   onClick={handleCloseModal}
                variant="contained"
                sx={{ width: "100%" }}
              >
                Login
              </Button>
              <p>Don’t have an account?</p>
              <div>
                {/* TODO - descomentar quando tiver a parte de rotas */}
                {/* <Link to="/register" onclick{setmodalLogin(false) setmodalRegs(true)}>Register!</Link> */}
                <p> Register!</p>
              </div>
            </ModalFooter>
          </ModalContainer>
        </BackgroundModal>
      </Modal>
    </>
  );
}
export default Login;
