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

import { toast } from "react-toastify";

import { Api } from "../../services/api";
import { changeUseState } from "../../store/modules/userIsLogged/actions";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { addData } from "../../store/modules/userData/action";

function Login({ loginModal, handleCloseModalLogin, handleOpenRegisterModal }) {
  const formSchema = yup.object().shape({
    email: yup.string().required("Required field").email("Invalid email"),
    password: yup
      .string()
      .required("Required field")
      .min(4, "Password must have at least 4 characters"),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmits = async (data) => {
    const registerInfo = await Api.post("/login", data)
      .then((response) => {
        toast.success("Successful login!");
        return response.data;
      })
      .catch((_) => {
        toast.error(
          "Ops! Please check if your email and password are correct."
        );
      });

    localStorage.setItem("userToken", registerInfo.accessToken);
    localStorage.setItem("userId", registerInfo.user.id);
    localStorage.setItem("user", JSON.stringify(registerInfo.user));

    dispatch(changeUseState(true));
    history.push("/");
    dispatch(addData(registerInfo.user));
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
