import styled from "styled-components";

import * as muiStyles from "@mui/material/styles";

import { Button } from "@mui/material";


export const StyledCard = styled.article`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 90%;
    height: 34.375rem;
    
    padding: 0.625rem;

    @media (min-width: 37.5rem){
        height: 95vh;
        justify-content: space-between;
    }

    img{
        width: 100%;
    }

    p{
        height: 8.125rem;

        @media (min-width: 37.5rem){
            height: max-content;
        }
    }

    div{
        height: 7rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (min-width: 37.5rem){
            flex-direction: row;
            height: 3rem;
        }
    }
`

export const StyledButton = muiStyles.styled(Button)`

    width: 100%;
    height: 3rem;

    border-radius: 0.625rem;
    border: 2px solid #EE685F;


    text-transform: capitalize;

    @media (min-width: 37.5rem){
            width: 45%;
        }

`