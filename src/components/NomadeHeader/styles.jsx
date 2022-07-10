import styled from "styled-components";

import Select from '@mui/material/Select';

import * as muiStyled from "@mui/material/styles";

export const NomadeHeaderContent = styled.section`
    display: flex;
    align-items: end;
    width: 100vw;
    
    @media (min-width: 768px){
        padding-left:2rem;
    }


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
        display: flex;
        flex-direction: column;

        a{
            display:none;
            margin-bottom: 3.125rem;
            cursor: pointer;
            text-decoration: none;
            color: var(--blue);
            font-weight: 600;

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

