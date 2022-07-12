import { NomadeHeaderContent, StyledSelect } from "./styles";
import { useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import StartATrip from "../startATrip";

function NomadeHeader({ filterTrips, setFilterTrips }) {
  const handleChange = (event) => {
    setFilterTrips(event.target.value);
  };

  return (
    <>
      <NomadeHeaderContent>
        <section className="divInfo">
          <h1>Dashboard</h1>
          <p>Hello, userNomade!</p>
          <span></span>
        </section>
        <section>
          <a href="#">Find a new trip!</a>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Filter trips
              </InputLabel>
              <StyledSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterTrips}
                label="Filter trips"
                onChange={handleChange}
              >
                <MenuItem value={"all"}>Filter All</MenuItem>
                <MenuItem value={"booked"}>Next Trips</MenuItem>
                <MenuItem value={"cancelled"}>Cancelled Trips</MenuItem>
                <MenuItem value={"finished"}>Finished Trips</MenuItem>
              </StyledSelect>
            </FormControl>
          </Box>
        </section>
      </NomadeHeaderContent>
      {/* Componente que só irá aparecer quando o Nomade não tive nenhuma viagem programada */}
      {/* <StartATrip/>  */}
    </>
  );
}

export default NomadeHeader;
