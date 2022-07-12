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

import { Api } from "../../services/api";
import { changeUseState } from "../../store/modules/userIsLogged/actions";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addData } from "../../store/modules/userData/action";

function Login({ loginModal, handleCloseModalLogin, handleOpenRegisterModal }) {
  const formSchema = yup.object().shape({
    email: yup.string().required("Required field").email("Invalid email"),
    password: yup
      .string()
      .required("Required field")
      .min(6, "Password must have at least 6 characters"),
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmits = async (data) => {
    console.log(data);
    const registerInfo = await Api.post("/login", data)
      .then(
        (response) => response.data,
        console.log("mostrar mensagem de login bem sucedido")
      )
      .catch((err) => console.log("mostra mensagem de erro"));

    localStorage.setItem("userToken", registerInfo.accessToken);
    localStorage.setItem("userId", registerInfo.user.id);

    console.log(registerInfo);
    dispatch(changeUseState(true));
    dispatch(addData(registerInfo));
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
