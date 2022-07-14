import styled from "styled-components";

import Select from '@mui/material/Select';

import * as muiStyled from "@mui/material/styles";

export const NomadeHeaderContent = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: end;
    width: 90%;
    

    .divInfo{
        display: flex;
        height: 100%;
        justify-content: space-around;
        flex-direction: column;
        width: 70vw;
        padding-left: 1rem;

        h1{
            color: var(--blue);
        }

        p{
            font-weight: bold;
        }

        span{
            font-weight: 600;
            color: var(--red);
        }
    }    

    section{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        a{
            display:none;
            cursor: pointer;
            text-decoration: none;
            color: var(--blue);
            font-weight: 600;
            margin-bottom: 2rem;
            margin-top: 0.3rem;

            @media (min-width: 31.25rem){
                display: flex;
            }
            
        }
    }

    height: 9.375rem;
`

export const StyledSelect = muiStyled.styled(Select)`
    border-radius: 0.938rem;
    height: 3.125rem;
    width: 9.375rem;
    margin-bottom: 1rem;

    @media (max-width: 500px){
        margin-right: 1rem;
    }
`

