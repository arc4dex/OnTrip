import styled from "styled-components";

import * as muiStyled from "@mui/material/styles";

import { Button } from "@mui/material";

export const NomadeHeaderContent = styled.section`
    
    height: 6rem;
    
    .divInfo{
        display: flex;
        height: 100%;
        justify-content: space-around;
        flex-direction: column;
        width: 70vw;
        padding-left: 1rem;
        width: 12.5rem;

        h1{
            color: var(--blue);
        }

        p{
            font-weight: bold;
        }
    }     
    
    .btnSection{
        width:  18.5rem;;
    }

    @media (min-width: 32.188rem){
        display: flex;
        align-items: end;
        justify-content: space-between;
    }   
`

export const StyledButton = muiStyled.styled(Button)`
    margin-left: 1rem;
    margin-top: 0.5rem;
    text-transform: capitalize;
    border-radius: 0.5rem;
    font-size: 0.8rem;

    @media (min-width: 25rem){
        height: 2.281rem;
    }
`