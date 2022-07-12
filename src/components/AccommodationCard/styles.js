import styled from 'styled-components';

import * as muiStyles from '@mui/material/styles';

import { Button, Paper, Box } from '@mui/material';


export const StyledCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: left;
	max-width: 31.25rem;
	width: 90%;
	height: 34.375rem;
	gap: 0.5rem;

	margin-bottom: 1rem;

	h2 {
		display: flex;
		justify-content: start;
		align-items: center;
		font-size: 1.25rem;
		width: 100%;
		height: 2rem;
	}

	p {
		display: flex;
		justify-content: start;
		text-align: justify;
		align-items: center;
		width: 100%;
		height: 30%;
	}


	@media (min-width: 37.5rem) {
		height: 95vh;
	}

	.divImg {
		position: relative;
		width: 100%;
		height: 40%;
		border-radius: 1.25rem;
		img {
			width: 100%;
		}
	}

	.btn {
		height: 7rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		@media (min-width: 32.813rem) {
			flex-direction: row;
			height: 3rem;
		}
	}
`;

export const StyledButton = muiStyles.styled(Button)`

    width: 100%;
    height: 3rem;

    border-radius: 0.625rem;
    border: 0.125rem solid #EE685F;

    text-transform: capitalize;

    @media (min-width: 32.813rem){
            width: 45%;
        }

`;

export const StyledPaper = muiStyles.styled(Paper)`
    position: absolute;
   	bottom: 1rem;
    opacity: 0.9;
    height: 4.063rem;
    width: 90%;
    left: 5%;
    border-radius: 0.875rem;
    display: flex;
    justify-content: space-around;
`;

export const StyledBox = muiStyles.styled(Box)`
    width: 50%;
    display: flex;
    align-items: start;
    padding-left: 0.625rem;
    height: 3rem;
    margin-top: 0.5rem;
    flex-direction: column;

    @media (min-width: 43.75rem){
        width: 33%;
    }

    :nth-of-type(2), :nth-of-type(3) {
        border-left: 0.063rem solid #999999;
    }

    :nth-of-type(2){
        display:none;
        @media (min-width: 43.75rem){
            display: flex;
        }
    }

`;

export const ContainerRaitingAccommodation = styled.section`

margin-top: 1rem;

  @media (max-width: 539px) {
    width: 100%;
    display: flex;

		align-items: flex-start;

    justify-content: flex-start;
  }
`;
