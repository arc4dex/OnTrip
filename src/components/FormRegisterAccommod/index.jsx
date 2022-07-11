/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-use-before-define */
import { useRef, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";

import {
  StyledMain,
  StyledPaper,
  StyledPaperModal,
  StyledSelect,
} from "./style";
import {
  Autocomplete,
  Button,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

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

  const [category, setCategory] = useState(categories[0]);

  const [kindOfPlace, setKindOfPlace] = useState(kindsOfPlaces[0]);

  const [openModal, setOpenModal] = useState(false);

  const [image, setImage] = useState([]);

  const [imageError, setImageError] = useState(false);

  const inputRef = useRef(null);

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
    category: yup
      .string()
      // .oneOf(categories)
      .required("Please select the type of space."),
    kindOfPlace: yup
      .string()
      // .oneOf(kindsOfPlaces)
      .required("Please select the kind of place."),
    // location: yup
    //   .object()
    //   .required("Please add an address to your accommodation"),
    guests: yup.number().required("Please select a number of guests."),
    beds: yup.number().required("Please select a number of beds."),
    rooms: yup.number().required("Please select a number of rooms."),
    bathrooms: yup.number().required("Please select a number of bathrooms."),
    highlights: yup.array(),
    imageUrl: yup
      .string()
      .oneOf(image)
      .required("Please upload a photo of your accommodation."),
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
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function onSubmitFunction(data) {
    console.log(data);
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
          <StyledSelect
            {...register("category")}
            error={errors.category?.message}
            helperText={errors.category?.message}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            value={category}
            onChange={(event) => handleChange(event, "category")}
            size="small"
          >
            {categories.map((category) => (
              <MenuItem value={category} key={category}>
                {category}
              </MenuItem>
            ))}
          </StyledSelect>
          <InputLabel id="demo-simple-select-label">
            What kind of place are you offering to guests?
          </InputLabel>
          <StyledSelect
            {...register("kindOfPlace")}
            error={errors.kindOfPlace?.message}
            helperText={errors.kindOfPlace?.message}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            value={kindOfPlace}
            onChange={(event) => handleChange(event, "kindOfPlace")}
            size="small"
          >
            {kindsOfPlaces.map((kind) => (
              <MenuItem value={kind} key={kind}>
                {kind}
              </MenuItem>
            ))}
          </StyledSelect>
          <InputLabel id="demo-simple-select-label">
            Where is your accommodation located?
          </InputLabel>
          <Button
            sx={{
              textTransform: "capitalize",
              alignSelf: "flex-start",
            }}
            variant="outlined"
            onClick={handleOpenModal}
          >
            Register address
          </Button>
          <InputLabel id="demo-simple-select-label">
            How many guests would you like to accommodate?
          </InputLabel>
          <TextField
            {...register("guests")}
            type="number"
            defaultValue={1}
            label="Guests"
            error={errors.guests?.message}
            helperText={errors.guests?.message}
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
            defaultValue="1"
            error={errors.bed?.message}
            helperText={errors.bed?.message}
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
            defaultValue="1"
            error={errors.rooms?.message}
            helperText={errors.rooms?.message}
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
            defaultValue="1"
            error={errors.bathrooms?.message}
            helperText={errors.bathrooms?.message}
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
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" size="small" />
            )}
          />
          <InputLabel id="demo-simple-select-label">
            Upload photos of your accomoddation
          </InputLabel>
          <Button
            variant="outlined"
            component="label"
            sx={{
              textTransform: "capitalize",
              fontSize: "0.875rem",
            }}
          >
            Upload Files
            <input
              {...register("imageUrl")}
              type="file"
              onChange={onImageChange}
              hidden
              ref={inputRef}
              error={errors.imageUrl?.message}
              helperText={errors.imageUrl?.message}
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
            multiline
          />
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
          <StyledPaperModal>
            <form>
              <h2>Register Address</h2>
              <TextField
                label="Address"
                required
                id="outlined-basic"
                variant="outlined"
                sx={{ width: "100%" }}
                size="small"
              />
              <TextField
                label="Address Complement"
                id="outlined-basic"
                variant="outlined"
                sx={{ width: "100%" }}
                size="small"
              />
              <TextField
                required
                label="Zip/Postal Code"
                id="outlined-basic"
                variant="outlined"
                sx={{ width: "100%" }}
                size="small"
              />
              <TextField
                required
                label="City"
                id="outlined-basic"
                variant="outlined"
                sx={{ width: "100%" }}
                size="small"
              />
              <TextField
                required
                label="State"
                id="outlined-basic"
                variant="outlined"
                sx={{ width: "100%" }}
                size="small"
              />
              <TextField
                required
                label="Country"
                id="outlined-basic"
                variant="outlined"
                sx={{ width: "100%" }}
                size="small"
              />
              <Button variant="contained">Save address</Button>
            </form>
            <IconButton
              onClick={handleCloseModal}
              color="primary"
              sx={{ padding: "7px", position: "absolute", top: 0, right: 0 }}
            >
              <CloseIcon />
            </IconButton>
          </StyledPaperModal>
        </Modal>
      </StyledPaper>
    </StyledMain>
  );
}

export default FormRegisterAccommod;
