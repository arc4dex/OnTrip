import styled from 'styled-components';

import banner from "./banner.png";

export const MainCardImage = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 19.625rem;
	background-image: url(${banner});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	@media (min-width: 48rem) {
		height: 31.25rem;
		background-image: url(${banner});
		border-radius: 1.563rem;
		width: 90%;
	}

	h1 {
		width: 14rem;
		margin-top: 1.5rem;
		margin-left: 1rem;
		font-size: 1.8rem;

		@media (min-width: 48rem) {
			width: 20rem;
			font-size: 2.5rem;
			margin-top: 6rem;
			margin-left: 4rem;
			line-height: 3rem;
		}
	}

	p {
		width: 16rem;
		font-weight: 500;
		margin-top: 1rem;
		margin-left: 1rem;

		@media (min-width: 48rem) {
			width: 32rem;
			font-size: 1.3rem;
			margin-top: 2rem;
			margin-left: 4rem;
			line-height: 2rem;
		}
	}
`;
