import {
  Button,
  Modal,
  Checkbox,
  FormControlLabel,
  ThemeProvider,
} from "@mui/material";

import { toast } from "react-toastify";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import {
  BackgroundRegisterModal,
  ButtonContainer,
  CheckboxContainer,
  CheckboxErrorContainer,
  RegisterModalContainer,
  RegisterModalFooter,
  RegisterModalHeader,
  RegisterModalHeaderButton,
  RegisterModalHeaderText,
  StyledRegisterForm,
  StyledTextField,
  themeDate,
} from "./styles";

import { Api } from "../../services/api";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useRef } from "react";

function Register({
  registerModal,
  handleCloseRegisterModal,
  handleOpenModalLogin,
}) {
  const [imageUser, setImageUser] = useState([]);

  const [imageUserError, setImageUserError] = useState(false);

  const [dateOfBirth, setDateOfBirth] = useState("");

  const inputRef = useRef(null);

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required."),
    email: yup
      .string()
      .required("Email is required.")
      .email("Email is not valid."),
    password: yup
      .string()
      .required("Password is required.")
      .min(4, "Password must have at least 4 characters."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords don't match.")
      .required("Please confirm your password."),
    dateOfBirth: yup.string().required("Date of Birth is required."),
    acceptTerms: yup.boolean().isTrue("You must accept the terms of service."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onImageChange = (e) => {
    const [file] = e.target.files;

    if (file?.type === "image/png" || file?.type === "image/jpeg") {
      setImageUserError(false);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUser([reader.result]);
      };
      reader.readAsDataURL(file);
    } else {
      setImageUserError(true);
    }
  };

  const deleteImage = () => {
    inputRef.current.value = null;
    setImageUser([]);
  };

  const handleDateOfBirth = (newValue) => {
    setDateOfBirth(newValue);
  };

  const calculateAge = (date) => {
    const dateBirthArray = date.split("/");

    const dateBirthFixed = `${dateBirthArray[1]}/${dateBirthArray[0]}/${dateBirthArray[2]}`;

    const ageMs = Date.now() - Date.parse(dateBirthFixed);

    const age = Math.floor(ageMs / 31536000000);

    return age;
  };

  const onSubmit = async (data) => {
    const age = calculateAge(data.dateOfBirth);
    if (age >= 18) {
      const response = {
        name: data.name,
        email: data.email,
        password: data.password,
        age: age,
        profilePicture: imageUser,
      };

      reset();

      await Api.post("/register", response)
        .then((_) => {
          toast.success("Successfully registered");
        })
        .catch((_) => {
          toast.error("Something went wrong");
        });

      handleCloseRegisterModal();
    } else {
      toast.error("You gotta be at least 18 years old to register!");
    }
  };

  return (
    <>
      <Modal open={registerModal} onClose={handleCloseRegisterModal}>
        <BackgroundRegisterModal>
          <RegisterModalContainer>
            <RegisterModalHeader>
              <RegisterModalHeaderButton>
                
              </RegisterModalHeaderButton>
              <RegisterModalHeaderText>
                <p>Create account</p>
                <Button
                  sx={{ minWidth: "5px" }}
                  onClick={handleCloseRegisterModal}
                  variant="text"
                  color="secondary"
                >
                  X
                </Button>
              </RegisterModalHeaderText>
            </RegisterModalHeader>
            <StyledRegisterForm id="form" onSubmit={handleSubmit(onSubmit)}>
              <StyledTextField
                error={errors.name?.message}
                helperText={errors.name?.message}
                {...register("name")}
                label="Name"
                placeholder="Please enter your full name"
                variant="outlined"
                color="secondary"
              />
              <StyledTextField
                error={errors.email?.message}
                helperText={errors.email?.message}
                {...register("email")}
                label="Email"
                placeholder="Please enter your email"
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
                placeholder="Please enter your password"
                variant="outlined"
              />
              <StyledTextField
                error={errors.confirmPassword?.message}
                helperText={errors.confirmPassword?.message}
                {...register("confirmPassword")}
                color="secondary"
                type="password"
                label="Confirm Password"
                placeholder="Please confirm your password"
                variant="outlined"
              />
              
              <ThemeProvider theme={themeDate}>
                <LocalizationProvider
                  color="primary"
                  dateAdapter={AdapterDateFns}
                >
                  <MobileDatePicker
                    color="primary"
                    placeholder="Your date of birth"
                    inputFormat="dd/MM/yyyy"
                    value={dateOfBirth}
                    onChange={handleDateOfBirth}
                    renderInput={(params) => (
                      <StyledTextField
                        {...params}
                        {...register("dateOfBirth")}
                        error={errors.dateOfBirth?.message}
                        helperText={errors.dateOfBirth?.message}
                        placeholder={"Your date of birth"}
                      />
                    )}
                  />
                </LocalizationProvider>
              </ThemeProvider>
              <Button
                variant="outlined"
                component="label"
                color="secondary"
                sx={{ textTransform: "capitalize", width: "100%" }}
              >
                Upload a Profile Picture
                <input
                  type="file"
                  onChange={onImageChange}
                  hidden
                  ref={inputRef}
                />
              </Button>
              {imageUser?.map((element, index) => {
                return (
                  <div key={index} className="userImageDiv">
                    <button onClick={deleteImage}>X</button>
                    <img src={element} alt={"User Pic"} />
                  </div>
                );
              })}
              {imageUserError && (
                <span className="imageError">
                  Please upload a png or jpeg file.
                </span>
              )}
            </StyledRegisterForm>
            <CheckboxContainer>
              <FormControlLabel
                label="I accept the Terms of Service"
                control={
                  <Checkbox
                    {...register("acceptTerms")}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                  />
                }
              />
            </CheckboxContainer>
            <CheckboxErrorContainer>
              {errors.acceptTerms && <span>{errors.acceptTerms.message}</span>}
            </CheckboxErrorContainer>
            <ButtonContainer>
              <Button form="form" type="submit" variant="contained">
                Create account
              </Button>
            </ButtonContainer>
            <RegisterModalFooter>
              <div>
                <p>Already have an account? </p>
                <button
                  className="loginButton"
                  onClick={() => {
                    handleOpenModalLogin();
                    handleCloseRegisterModal();
                  }}
                >
                  Sign In
                </button>
              </div>
            </RegisterModalFooter>
          </RegisterModalContainer>
        </BackgroundRegisterModal>
      </Modal>
    </>
  );
}

export default Register;
