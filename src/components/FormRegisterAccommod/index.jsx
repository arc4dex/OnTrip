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

import { useState } from "react";

function FormRegisterAccommod() {
  const [category, setCategory] = useState("House");

  const [kind, setKind] = useState("A whole place");

  const [openModal, setOpenModal] = useState(false);

  const [guestsQuantity, setGuestsQuantity] = useState(1);

  const [bedQuantity, setBedQuantity] = useState(1);

  const [bedroomQuantity, setBedroomQuantity] = useState(1);

  const [bathroomQuantity, setBathroomQuantity] = useState(1);

  const [image, setImage] = useState([]);

  const onImageChange = (e) => {
    const [file] = e.target.files;
    if (file.type === "image/png") {
      setImage([...image, URL.createObjectURL(file)]);
    }
  };

  function handleChangeKind(event) {
    setKind(event.target.value);
  }

  function handleChangeCategory(event) {
    setCategory(event.target.value);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function addQuantity(info) {
    if (info === "guest") {
      setGuestsQuantity(guestsQuantity + 1);
    } else if (info === "bed") {
      setBedQuantity(bedQuantity + 1);
    } else if (info === "bedroom") {
      setBedroomQuantity(bedroomQuantity + 1);
    } else if (info === "bathroom") {
      setBathroomQuantity(bathroomQuantity + 1);
    }
  }

  function subQuantity(info) {
    if (info === "guest" && guestsQuantity > 1) {
      setGuestsQuantity(guestsQuantity - 1);
    } else if (info === "bed" && bedQuantity > 1) {
      setBedQuantity(bedQuantity - 1);
    } else if (info === "bedroom" && bedroomQuantity > 1) {
      setBedroomQuantity(bedroomQuantity - 1);
    } else if (info === "bathroom" && bathroomQuantity > 1) {
      setBathroomQuantity(bathroomQuantity - 1);
    }
  }

  const differentials = ["Wifi", "Monitor", "AC"];

  const formSchema = yup.object().shape({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

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
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            value={category}
            onChange={handleChangeCategory}
            size="small"
          >
            <MenuItem value={"House"}>House</MenuItem>
            <MenuItem value={"Apartment"}>Apartment</MenuItem>
            <MenuItem value={"Flat"}>Flat</MenuItem>
            <MenuItem value={"Inn"}>Inn</MenuItem>
            <MenuItem value={"Boutique Hotel"}>Boutique Hotel</MenuItem>
          </StyledSelect>
          <InputLabel id="demo-simple-select-label">
            What kind of place are you offering to guests?
          </InputLabel>
          <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            value={kind}
            onChange={handleChangeKind}
            size="small"
          >
            <MenuItem value={"A whole place"}>A whole place</MenuItem>
            <MenuItem value={"A whole room"}>A whole room</MenuItem>
            <MenuItem value={"A shared room"}>A shared room</MenuItem>
          </StyledSelect>
          <InputLabel id="demo-simple-select-label">
            Where is your accommodation located?
          </InputLabel>
          <Button
            sx={{
              textTransform: "capitalize",
            }}
            variant="outlined"
            onClick={handleOpenModal}
          >
            Register address
          </Button>
          <InputLabel id="demo-simple-select-label">
            How many guests would you like to accommodate?
          </InputLabel>
          <div>
            <IconButton
              onClick={() => addQuantity("guest")}
              size="small"
              color="primary"
            >
              <AddCircleOutlineIcon sx={{ width: "0.7em", height: "0.7em" }} />
            </IconButton>
            <span className="quantity">{guestsQuantity}</span>
            <IconButton
              onClick={() => subQuantity("guest")}
              size="small"
              color="primary"
            >
              <RemoveCircleOutlineIcon
                sx={{ width: "0.7em", height: "0.7em" }}
              />
            </IconButton>
          </div>
          <InputLabel id="demo-simple-select-label">
            How many beds, bedrooms and bathrooms does your place have?
          </InputLabel>
          <div className="rooms">
            <h4>Beds</h4>
            <div>
              <IconButton
                onClick={() => addQuantity("bed")}
                size="small"
                color="primary"
              >
                <AddCircleOutlineIcon
                  sx={{ width: "0.7em", height: "0.7em" }}
                />
              </IconButton>
              <span className="quantity">{bedQuantity}</span>
              <IconButton
                onClick={() => subQuantity("bed")}
                size="small"
                color="primary"
              >
                <RemoveCircleOutlineIcon
                  sx={{ width: "0.7em", height: "0.7em" }}
                />
              </IconButton>
            </div>
          </div>
          <div className="rooms">
            <h4>Bedrooms</h4>
            <div>
              <IconButton
                onClick={() => addQuantity("bedroom")}
                size="small"
                color="primary"
              >
                <AddCircleOutlineIcon
                  sx={{ width: "0.7em", height: "0.7em" }}
                />
              </IconButton>
              <span className="quantity">{bedroomQuantity}</span>
              <IconButton
                onClick={() => subQuantity("bedroom")}
                size="small"
                color="primary"
              >
                <RemoveCircleOutlineIcon
                  sx={{ width: "0.7em", height: "0.7em" }}
                />
              </IconButton>
            </div>
          </div>
          <div className="rooms">
            <h4>Bathrooms</h4>
            <div>
              <IconButton
                onClick={() => addQuantity("bathroom")}
                size="small"
                color="primary"
              >
                <AddCircleOutlineIcon
                  sx={{ width: "0.7em", height: "0.7em" }}
                />
              </IconButton>
              <span className="quantity">{bathroomQuantity}</span>
              <IconButton
                onClick={() => subQuantity("bathroom")}
                size="small"
                color="primary"
              >
                <RemoveCircleOutlineIcon
                  sx={{ width: "0.7em", height: "0.7em" }}
                />
              </IconButton>
            </div>
          </div>
          <InputLabel id="demo-simple-select-label">
            What makes your space special?
          </InputLabel>
          <Autocomplete
            multiple
            id="tags-outlined"
            options={differentials}
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
            }}
          >
            Upload Files
            <input type="file" onChange={onImageChange} hidden />
          </Button>
          {image.map((element, index) => (
            <img key={index} src={element} alt={""} />
          ))}

          <InputLabel id="demo-simple-select-label">
            Name your accommodation
          </InputLabel>
          <TextField size="small" sx={{ width: "100%" }} />
          <InputLabel id="demo-simple-select-label">
            Create a description for your space
          </InputLabel>
          <TextField size="small" sx={{ width: "100%" }} />
          <InputLabel id="demo-simple-select-label">
            Set a price per night
          </InputLabel>
          <div className="price">
            <span>$</span>
            <TextField size="small" sx={{ width: "95%" }} />
          </div>

          <Button
            variant="contained"
            sx={{ textTransform: "capitalize", alignSelf: "center" }}
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
