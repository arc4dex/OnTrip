import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";

import { StyledPaper, StyledSelect } from "./style";
import { Button, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function FormRegisterAccommod() {
  const [category, setCategory] = useState("House");

  const [kind, setKind] = useState("A whole place");

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

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeKind = (event) => {
    setKind(event.target.value);
  };

  return (
    <StyledPaper>
      <header>
        <h3>Register a accommodation</h3>
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
        >
          <MenuItem value={"A whole place"}>A whole place</MenuItem>
          <MenuItem value={"A whole room"}>A whole room</MenuItem>
          <MenuItem value={"A shared room"}>A shared room</MenuItem>
        </StyledSelect>

        <Button sx={{ textTransform: "capitalize" }}>
          Where is your accommodation located?
        </Button>
      </form>
    </StyledPaper>
  );
}

export default FormRegisterAccommod;
