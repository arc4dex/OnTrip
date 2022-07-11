/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-use-before-define */
import { useRef, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useSelector } from "react-redux";

import { StyledMain, StyledPaper } from "./style";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Modal,
  TextField,
  Tooltip,
} from "@mui/material";

import { CheckboxContainer, CheckboxErrorContainer } from "../Register/styles";

import RegisterAddressForm from "./RegisterAddressForm";

function FormRegisterAccommod() {
  const categories = ["House", "Apartment", "Flat", "Inn", "Boutique Hotel"];

  const kindsOfPlaces = ["A whole place", "A whole room", "A shared room"];

  const highlights = [
    "Internet speed greater than 100mb/s",
    "Ergonomic Desk Chair",
    "Ergonomic Setup",
    "Air conditioning",
    "Monitor Full HD",
    "Silent Environment",
    "Dryer",
    "Kitchen",
    "Smart Place",
    "Coffee Machine",
    "Playroom",
    "Coworking",
  ];

  const [category, setCategory] = useState("");

  const [kindOfPlace, setKindOfPlace] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const [image, setImage] = useState([]);

  const [imageError, setImageError] = useState(false);

  const [addressError, setAddressError] = useState(false);

  const inputRef = useRef(null);

  const accommodAddress = useSelector((store) => store.accommodAddress);

  const onImageChange = (e) => {
    const [file] = e.target.files;

    if (
      file?.type === "image/png" ||
      file?.type === "image/jpeg" ||
      file?.type === "image/jpg"
    ) {
      setImageError(false);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage([reader.result]);
        setValue("imageUrl", [reader.result]);
      };
      reader.readAsDataURL(file);
    } else {
      setImageError(true);
    }
  };

  const deleteImage = () => {
    inputRef.current.value = null;
    setImage([]);
  };

  function handleChange(event, type) {
    if (type === "category") {
      setCategory(event.target.value);
    }

    if (type === "kindOfPlace") {
      setKindOfPlace(event.target.value);
    }
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  const formSchema = yup.object().shape({
    category: yup.string().required("Please select the type of space."),
    kindOfPlace: yup.string().required("Please select the kind of place."),
    // adress: yup
    //   .object()
    //   .shape(accommodAddress)
    //   .required("Please register an address for your accommodation"),
    guests: yup
      .string()
      .required("Please select a number of guests. The minimum is one."),
    bed: yup
      .string()
      .required("Please select a number of beds. The minimum is one."),
    rooms: yup
      .string()
      .required("Please select a number of bedrooms. The minimum is one."),
    bathrooms: yup
      .string()
      .required("Please select a number of bathrooms. The minimum is one."),
    highlights: yup.array(),
    imageUrl: yup
      .array()
      .required("Please upload at least one photo of your accommodation."),
    name: yup
      .string()
      .required("Please enter a name for your accommodation.")
      .min(6, "Name must have at least 3 characters."),
    description: yup
      .string()
      .required("Please enter a description for your accommodation.")
      .min(6, "Description must have at least 6 characters."),
    price: yup
      .string()
      .required("Please enter a price for your accommodation."),
    minimumRequirements: yup
      .boolean()
      .isTrue("Your place must have the minimum requirements."),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  console.log(accommodAddress);

  function onSubmitFunction(data) {
    console.log(accommodAddress);
    const location = accommodAddress;

    console.log(data);

    if (location !== {}) {
      setAddressError(false);

      const dataToSend = { ...data, location };

      console.log(dataToSend);
      // fazer o post
    } else {
      setAddressError(true);
      // não fazer o post
    }
  }
  return (
    <StyledMain>
      <StyledPaper>
        <header>
          <h3>Register an accommodation</h3>
        </header>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <InputLabel id="demo-simple-select-label">
            What type of space are you going to host?
          </InputLabel>
          <TextField
            select
            {...register("category")}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            value={category}
            onChange={(event) => handleChange(event, "category")}
            error={errors.category?.message}
            helperText={errors.category?.message}
            color="secondary"
            size="small"
            sx={{
              width: "100%",
            }}
          >
            {categories.map((category) => (
              <MenuItem value={category} key={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
          <InputLabel id="demo-simple-select-label">
            What kind of place are you offering to guests?
          </InputLabel>
          <TextField
            select
            {...register("kindOfPlace")}
            error={errors.kindOfPlace?.message}
            helperText={errors.kindOfPlace?.message}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            value={kindOfPlace}
            onChange={(event) => handleChange(event, "kindOfPlace")}
            color="secondary"
            size="small"
            sx={{
              width: "100%",
            }}
          >
            {kindsOfPlaces.map((kind) => (
              <MenuItem value={kind} key={kind}>
                {kind}
              </MenuItem>
            ))}
          </TextField>
          <InputLabel id="demo-simple-select-label">
            Where is your accommodation located?
          </InputLabel>
          <Button
            sx={{
              textTransform: "capitalize",
              alignSelf: "flex-start",
              width: "100%",
            }}
            variant="outlined"
            onClick={handleOpenModal}
          >
            Register an address
          </Button>
          {accommodAddress === {} && (
            <span className="adressError">
              Please register an address for your accommodation.
            </span>
          )}
          <InputLabel id="demo-simple-select-label">
            How many guests would you like to accommodate?
          </InputLabel>
          <TextField
            {...register("guests")}
            type="number"
            error={errors.guests?.message}
            helperText={errors.guests?.message}
            size="small"
            color="secondary"
            sx={{ width: "100%" }}
            onChange={(event) => {
              if (
                event.target.value !== " " &&
                event.target.value !== "" &&
                event.target.value < 1
              ) {
                event.target.value = 1;
              }
            }}
          />
          <InputLabel id="demo-simple-select-label">
            How many beds, bedrooms and bathrooms does your place have?
          </InputLabel>
          <TextField
            type="number"
            label="Beds"
            {...register("bed")}
            error={errors.bed?.message}
            helperText={errors.bed?.message}
            size="small"
            color="secondary"
            sx={{ width: "100%" }}
            onChange={(event) => {
              if (
                event.target.value !== " " &&
                event.target.value !== "" &&
                event.target.value < 1
              ) {
                event.target.value = 1;
              }
            }}
          />
          <TextField
            type="number"
            label="Bedrooms"
            {...register("rooms")}
            error={errors.rooms?.message}
            helperText={errors.rooms?.message}
            size="small"
            color="secondary"
            sx={{ width: "100%" }}
            onChange={(event) => {
              if (
                event.target.value !== " " &&
                event.target.value !== "" &&
                event.target.value < 1
              ) {
                event.target.value = 1;
              }
            }}
          />
          <TextField
            type="number"
            label="Bathrooms"
            {...register("bathrooms")}
            error={errors.bathrooms?.message}
            helperText={errors.bathrooms?.message}
            color="secondary"
            size="small"
            sx={{ width: "100%" }}
            onChange={(event) => {
              if (
                event.target.value !== " " &&
                event.target.value !== "" &&
                event.target.value < 1
              ) {
                event.target.value = 1;
              }
            }}
          />
          <InputLabel id="demo-simple-select-label">
            What makes your space special?
          </InputLabel>
          <Autocomplete
            {...register("highlights")}
            error={errors.highlights?.message}
            helperText={errors.highlights?.message}
            onChange={(event, value) => {
              setValue("highlights", value);
            }}
            multiple
            id="tags-outlined"
            options={highlights}
            getOptionLabel={(option) => option}
            color="secondary"
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" size="small" />
            )}
          />
          <InputLabel id="demo-simple-select-label">
            Upload photos of your accomoddation
          </InputLabel>
          <Button
            variant="text"
            component="label"
            color="secondary"
            sx={{
              textTransform: "capitalize",
              fontSize: "0.75rem",
              border: "none",
            }}
          >
            <TextField
              {...register("imageUrl")}
              type="file"
              onChange={onImageChange}
              hidden
              ref={inputRef}
              error={errors.imageUrl?.message}
              helperText={errors.imageUrl?.message}
              size="small"
              color="secondary"
              sx={{
                fontSize: "0.5rem",
                width: "100%",
              }}
            />
          </Button>
          {image?.map((element, index) => {
            return (
              <div key={index} className="AccommodImageDiv">
                <button onClick={deleteImage}>X</button>
                <img src={element} alt={"Accommodation Photo"} />
              </div>
            );
          })}
          {imageError && (
            <span className="imageError">
              Only PNG, JPEG, JPG files are accepted.
            </span>
          )}
          <InputLabel id="demo-simple-select-label">
            Name your accommodation
          </InputLabel>
          <TextField
            {...register("name")}
            error={errors.name?.message}
            helperText={errors.name?.message}
            size="small"
            color="secondary"
            sx={{ width: "100%" }}
          />
          <InputLabel id="demo-simple-select-label">
            Create a description for your space
          </InputLabel>
          <TextField
            {...register("description")}
            error={errors.description?.message}
            helperText={errors.description?.message}
            sx={{ width: "100%" }}
            color="secondary"
            multiline
          />
          <CheckboxContainer style={{ marginTop: "0", padding: "0 1rem" }}>
            <FormControlLabel
              control={
                <>
                  <Tooltip
                    enterDelay={100}
                    leaveDelay={100}
                    enterTouchDelay={20}
                    leaveTouchDelay={100}
                    title="Internet speed over 50MB/s and minimum home office environment (desk, chair, and accessible power plugs)"
                    arrow
                  >
                    <InputLabel sx={{ fontSize: "1rem", margin: "0" }}>
                      Does your accommodation have the minimum requirements?
                    </InputLabel>
                  </Tooltip>
                  <Checkbox
                    {...register("minimumRequirements")}
                    color="secondary"
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                  />
                </>
              }
            />
          </CheckboxContainer>
          <CheckboxErrorContainer>
            {errors.minimumRequirements && (
              <span>{errors.minimumRequirements.message}</span>
            )}
          </CheckboxErrorContainer>
          <InputLabel id="demo-simple-select-label">
            Set a price per night
          </InputLabel>
          <div className="price">
            <span>$</span>
            <TextField
              {...register("price")}
              error={errors.price?.message}
              helperText={errors.price?.message}
              size="small"
              color="secondary"
              sx={{ width: "95%" }}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              alignSelf: "center",
              width: "80%",
              maxWidth: "15.75rem",
            }}
          >
            Register accommodation
          </Button>
        </form>

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="addressModal"
        >
          <RegisterAddressForm handleCloseModal={handleCloseModal} />
        </Modal>
      </StyledPaper>
    </StyledMain>
  );
}

export default FormRegisterAccommod;
