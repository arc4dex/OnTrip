import { NomadeHeaderContent, StyledSelect } from "./styles";
import { useState } from "react";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function NomadeHeader() {
    const [filterTrips, setFilterTrips] = useState('');

    const handleChange = (event) => {
        setFilterTrips(event.target.value);
    };   

    
    return (        
        <NomadeHeaderContent>
            <section className="divInfo">
                <h1>Dashboard</h1>
                <p>Hello, userNomade!</p>
                <span>Your next trips (filter applied)</span>
            </section>  
            <section>
                <a href="#">Find a new trip!</a>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Filter trips</InputLabel>
                        <StyledSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filterTrips}
                        label="Filter trips"
                        onChange={handleChange}
                        >
                            <MenuItem value={"Next Trips"}>Next Trips</MenuItem>
                            <MenuItem value={"Canceled Trips"}>Canceled Trips</MenuItem>
                        </StyledSelect>
                    </FormControl>
                </Box>
            </section> 
        </NomadeHeaderContent>

        
    );
}

export default NomadeHeader;