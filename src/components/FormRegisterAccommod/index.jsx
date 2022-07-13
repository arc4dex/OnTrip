/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-use-before-define */
import { useRef, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";

import { Dropzone, FileItem, FullScreenPreview } from "@dropzone-ui/react";

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

import { Api } from "../../services/api";

import { useHistory, useParams } from "react-router-dom";

import { setAccommodationData } from "../../store/modules/accommodationData/actions";

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

  const [images, setImages] = useState([]);

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const accommodAddress = useSelector((store) => store.accommodAddress);

  const [imageSrc, setImageSrc] = useState(undefined);

  const [valueName, setValueName] = useState({
    name: "",
  });

  const history = useHistory();

  const params = useParams();

  const handleChangeName = (name) => (event) => {
    setValueName({ ...valueName, [name]: event.target.value });
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
    guests: yup
      .number()
      .typeError("Please select a number of guests.")
      .nullable()
      .positive("Please select a number of guests.")
      .min(1, "The minimum is one.")
      .required("Please select a number of guests."),
    beds: yup
      .number()
      .typeError("Please select a number of beds.")
      .nullable()
      .positive("Please select a number of beds.")
      .min(1, "The minimum is one.")
      .required("Please select a number of beds."),
    rooms: yup
      .number()
      .typeError("Please select a number of bedrooms.")
      .nullable()
      .positive("Please select a number of bedrooms.")
      .min(1, "The minimum is one.")
      .required("Please select a number of bedrooms."),
    bathrooms: yup
      .number()
      .typeError("Please select a number of bathrooms.")
      .nullable()
      .positive("Please select a number of bathrooms.")
      .min(1, "The minimum is one.")
      .required("Please select a number of bathrooms."),
    highlights: yup.array(),
    imageUrl: yup
      .array()
      .min(1)
      .required("Please upload at least one photo of your accommodation."),
    name: yup
      .string()
      .required("Please enter a name for your accommodation.")
      .min(3, "Name must have at least 3 characters.")
      .max(35, "Name cannot be longer than 35 characters."),
    description: yup
      .string()
      .required("Please enter a description for your accommodation.")
      .min(6, "Description must have at least 6 characters."),
    price: yup
      .number()
      .typeError("Please enter a price for your accommodation.")
      .nullable()
      .positive("Please enter a valid price for your accommodation.")
      .min(1, "The minimum is 1.")
      .required("Please enter a price for your accommodation."),
    minimumRequirements: yup
      .boolean()
      .isTrue("Your place must have the minimum requirements."),
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  async function onSubmitFunction(data) {
    const location = accommodAddress;

    if (
      location.hasOwnProperty("streetAddress") &&
      location.hasOwnProperty("complement") &&
      location.hasOwnProperty("zipCode") &&
      location.hasOwnProperty("city") &&
      location.hasOwnProperty("state") &&
      location.hasOwnProperty("country")
    ) {
      const dataToSend = {
        name: data.name,
        userId: parseInt(localStorage.getItem("userId")),
        avaliable: true,
        imageUrl: images,
        price: parseInt(data.price),
        location: {
          streetAddress: location.streetAddress,
          complement: location.complement,
          city: location.city,
          country: location.country,
          state: location.state,
          zipCode: parseInt(location.zipCode),
        },
        category: data.category,
        kindOfPlace: data.kindOfPlace,
        accommodation: {
          rooms: parseInt(data.rooms),
          guests: parseInt(data.guests),
          bathrooms: parseInt(data.bathrooms),
          beds: parseInt(data.beds),
          highlights: data.highlights,
        },
        description: data.description,
      };

      await Api.post("/accommodation", dataToSend, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      })
        .then((response) => {
          toast.success("Accommodation successfully registered!");
          history.push(`/hostDash/${params.id}`);
          dispatch(setAccommodationData(dataToSend));
        })
        .catch((error) => {
          toast.error("Ops! Something went wrong. Please try again.");
        });
    } else {
      toast.error("Please register an address.");
    }
  }

  const nameCharacterLimit = 35;


  const onImageChange = (e) => {

    const [file] = e.target.files;

    if (file?.type === "image/png" || file?.type === "image/jpeg" || file?.type === "image/jpg") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("imageUrl",[...images, reader.result]);
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("favor colocar o tipo correto")
    }
  };

  const deleteImage = (element) => {
    const newImagesList = images.filter((image)=>{
      if(image !== element){
        return image;
      }
    })
    inputRef.current.value = null;
    setValue("imageUrl",[...newImagesList]);
    setImages([...newImagesList]);
  };


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
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            {...register("category")}
            value={category}
            onChange={(event) => handleChange(event, "category")}
            error={errors.category?.message}
            helperText={errors.category?.message}
            size="small"
            git
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
            {...register("kindOfPlace")}
            select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            value={kindOfPlace}
            onChange={(event) => handleChange(event, "kindOfPlace")}
            size="small"
            sx={{
              width: "100%",
            }}
            error={errors.kindOfPlace?.message}
            helperText={errors.kindOfPlace?.message}
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
            type="number"
            size="small"
            sx={{ width: "100%" }}
            {...register("guests")}
            error={errors.guests?.message}
            helperText={errors.guests?.message}
          />
          <InputLabel id="demo-simple-select-label">
            How many beds, bedrooms and bathrooms does your place have?
          </InputLabel>
          <TextField
            type="number"
            label="Beds"
            size="small"
            sx={{ width: "100%" }}
            {...register("beds")}
            error={errors.beds?.message}
            helperText={errors.beds?.message}
          />
          <TextField
            type="number"
            label="Bedrooms"
            size="small"
            sx={{ width: "100%" }}
            {...register("rooms")}
            error={errors.rooms?.message}
            helperText={errors.rooms?.message}
          />
          <TextField
            type="number"
            label="Bathrooms"
            size="small"
            sx={{ width: "100%" }}
            {...register("bathrooms")}
            error={errors.bathrooms?.message}
            helperText={errors.bathrooms?.message}
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
                color="secondary"
                sx={{ textTransform: "capitalize", width: "100%" }}
              >
                Upload photos
                <input
                  type="file"                  
                  onChange={onImageChange}
                  hidden
                  ref={inputRef}                  
                />
              </Button>
              {images?.map((element, index) => {
                return (
                  <div key={index} className="userImageDiv">
                    <button type="button" onClick={() => deleteImage(element)}>X</button>
                    <img src={element} alt={"User Pic"} />
                  </div>
                );
              })}
          {errors.imageUrl && (
            <span className="imageError">{errors.imageUrl.message}</span>
          )}
          <InputLabel id="demo-simple-select-label">
            Name your accommodation
          </InputLabel>
          <TextField
            {...register("name")}
            size="small"
            value={valueName.name}
            onChange={handleChangeName("name")}
            sx={{ width: "100%" }}
            inputProps={{
              maxLength: nameCharacterLimit,
            }}
            error={errors.name?.message}
            helperText={errors.name?.message}
          />
          <span style={{ fontSize: "0.63rem", paddingLeft: "0.5rem" }}>
            {valueName.name.length}/{nameCharacterLimit}
          </span>
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
              type="number"
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
