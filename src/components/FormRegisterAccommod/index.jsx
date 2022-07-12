/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-use-before-define */
import { useRef, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";

import { useSelector } from "react-redux";

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

import axios from "axios";

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

  const [addressError, setAddressError] = useState(false);

  const inputRef = useRef(null);

  const accommodAddress = useSelector((store) => store.accommodAddress);

  const [files, setFiles] = useState([]);

  const [imageSrc, setImageSrc] = useState(undefined);

  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);

    const rawFiles = [];

    incommingFiles.forEach((fileObj) => {
      rawFiles.push(fileObj.file);
    });

    const reader = new FileReader();

    rawFiles.forEach((file, index) => {
      if (index === 0) {
        reader.readAsDataURL(file);
      }

      if (reader.result) {
        reader.readAsDataURL(file);
      }
    });

    reader.onload = function () {
      const url = reader.result;

      setImage([...image, url]);
      setValue("imageUrl", [...image, url]);
    };
  };

  const onDelete = (id) => {
    setFiles(files.filter((file) => file.id !== id));
    setImage(image.filter((file) => file.id !== id));
    setValue(
      "imageUrl",
      image.filter((file) => file.id !== id)
    );
    console.log(image);
    console.log(files);
  };

  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };

  const handleClean = (files) => {
    console.log("list cleaned", files);
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
      .string()
      .required("Please select a number of guests. The minimum is one."),
    beds: yup
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

  async function onSubmitFunction(data) {
    console.log(accommodAddress);

    const location = accommodAddress;

    console.log(data);

    console.log(location);

    //   {
    //     "streetAddress": "5151 Rua dos Mares",
    //     "complement": "",
    //     "zipCode": "81210310",
    //     "city": "Curitiba",
    //     "state": "Paraná",
    //     "country": "brasil"
    // }

    console.log(image);

    if (
      location.hasOwnProperty("streetAddress") &&
      location.hasOwnProperty("complement") &&
      location.hasOwnProperty("zipCode") &&
      location.hasOwnProperty("city") &&
      location.hasOwnProperty("state") &&
      location.hasOwnProperty("country")
    ) {
      // setAddressError(false);

      const dataToSend = {
        name: data.name,
        userId: parseInt(localStorage.getItem("userId")),
        avaliable: true,
        imageUrl: image,
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

      console.log(dataToSend);

      await Api.post("/accommodation", dataToSend, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      })
        .then((response) => {
          console.log(response);
          toast.success("Accommodation successfully registered!");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ops! Something went wrong.");
        });
    } else {
      // setAddressError(true);
      toast.error("Please register an address.");
      // não fazer o post na api
      // mensagem de erro
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
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            {...register("category")}
            value={category}
            onChange={(event) => handleChange(event, "category")}
            error={errors.category?.message}
            helperText={errors.category?.message}
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
            onChange={(event) => {
              if (
                event.target.value !== " " &&
                event.target.value !== "" &&
                event.target.value < 1
              ) {
                event.target.value = 1;
              }
            }}
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
            onChange={(event) => {
              if (
                event.target.value !== " " &&
                event.target.value !== "" &&
                event.target.value < 1
              ) {
                event.target.value = 1;
              }
            }}
            error={errors.beds?.message}
            helperText={errors.beds?.message}
          />
          <TextField
            type="number"
            label="Bedrooms"
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
            {...register("rooms")}
            error={errors.rooms?.message}
            helperText={errors.rooms?.message}
          />
          <TextField
            type="number"
            label="Bathrooms"
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
          <Dropzone
            // style={{ minWidth: "550px" }}
            // view={"list"}
            onChange={updateFiles}
            minHeight="120px"
            onClean={handleClean}
            value={files}
            // maxFiles={5}
            // header={false}
            // footer={false}
            // maxFileSize={2998000}
            //label="Drag'n drop files here or click to browse"
            //label="Suleta tus archivos aquí"
            accept=".png,image/*"
            // uploadingMessage={"Uploading..."}
            // url="https://my-awsome-server/upload-my-file"
            //of course this url doens´t work, is only to make upload button visible
            //uploadOnDrop
            //clickable={false}
            fakeUploading
            //localization={"FR-fr"}
            disableScroll
          >
            {files.map((file) => (
              <FileItem
                {...file}
                key={file.id}
                onDelete={onDelete}
                onSee={handleSee}
                //localization={"ES-es"}
                resultOnTooltip
                preview
                hd
              />
            ))}
            <FullScreenPreview
              imgSource={imageSrc}
              openImage={imageSrc}
              onClose={(e) => handleSee(undefined)}
            />
          </Dropzone>
          {errors.imageUrl && (
            <span className="imageError">{errors.imageUrl.message}</span>
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
            inputProps={{
              maxlength: 35,
            }}
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
