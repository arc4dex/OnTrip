import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { Paper, Select, TextField } from "@mui/material";

export const StyledPaper = muiStyles.styled(Paper)`
    display: flex;
    flex-direction: column;
    padding: 1rem; 
    width: 25.25rem;
    justify-content: center;
    align-items: stretch;
    gap: 1.5rem;

    header {
        color: #EE685F;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;

         li {
            background-color: #3d97b4;
        }

        
    }

`;

export const StyledSelect = muiStyles.styled(Select)`

    width: 12rem;

    /* .css-1c7vrj5-MuiButtonBase-root-MuiMenuItem-root.Mui-selected {
         background-color: rgba(61, 151, 180, 0.08);
      
    } */

`;
