import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { Paper, Select } from "@mui/material";

export const StyledPaper = muiStyles.styled(Paper)`
    display: flex;
    flex-direction: column;
    padding: 1rem; 
    width: 95%;
    justify-content: center;
    align-items: stretch;
    gap: 1.5rem;

    header {
        color: #EE685F;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.8rem;

        label {
            font-size: 1rem;
            line-height: 1.4em;
            white-space: normal;
            overflow: unset;
        }

        span {
            font-weight: 400;
        }

        .guests {
            width: 5.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .rooms {
            width: 48%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h4 {
                font-size: 0.9rem;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.6);
                width: 8rem;
            }

            div {
                width: 5.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;


            }
            
        }

        .price {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            justify-content: flex-start;
            width: 100%;

            span {
                color: var(--red)
            }
        }

        .AccommodImageDiv {
            width: 60%;
            position: relative;

            button {
                border: none;
                outline: none;
                background-color: transparent;
                color: var(--red);
                font-size: 1.2rem;
                position: absolute;
                right: 0;
            }
            

            img {
                width: 92%;
            }
  
            .imageError {
                width: 100%;
                font-weight: 400;
                font-size: 0.75rem;
                text-align: left;
                margin-left: 1.6rem;
                color: #d32f2f;
            }
        }
    }

`;

export const StyledSelect = muiStyles.styled(Select)`
    width: 100%;
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledPaperModal = muiStyles.styled(Paper)`
    display: flex;
    padding: 1.5rem; 
    width: 90%;
    justify-content: center;
    align-items: stretch;
    position: absolute;
    max-width: 28.8rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);


    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1.5rem;
        width: 100%;

        h2 {
            color: var(--red);
            font-size: 1.2rem;
            font-weight: 600;
        }


        button {
            text-transform: capitalize;
            align-self: center;
            width: 50%;
            margin-top: 0.5rem;
        }
    }


`;
