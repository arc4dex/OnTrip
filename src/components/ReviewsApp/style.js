import styled from "styled-components";

import * as muiStyles from "@mui/material/styles";
import { Button } from "@mui/material";

export const DivReviews = styled.div`
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 30rem;
  align-items: center;
  justify-content: space-evenly;
  justify-content: space-between;
  padding: 1rem 0;

  p {
    color: #ee685f;
  }

  @media (min-width: 1000px) {
    width: 85vw;
  }

  @media (min-width: 1150px) {
    width: 80vw;
  }

  .divReviews-content {
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 70%;

    @media (min-width: 600px) {
      flex-direction: column;
    }

    .swiper {
      width: 100%;
      height: 100%;
      padding-bottom: 1.2rem;
      border-radius: 1rem;
    }

    .swiper-slide {
      text-align: center;
      font-size: 1.125rem;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .swiper-pagination-bullets {
      bottom: -3px;
    }

    .swiper-pagination-bullet-active {
      background: #ee685f;
    }
  }
`;

export const StyledButton = muiStyles.styled(Button)`
    width: 60%;
    max-width: 13rem;
    text-transform: capitalize;
    display: ${(props) => (props.userState ? "block" : "none")};

`;
