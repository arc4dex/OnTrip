import * as muiStyles from "@mui/material/styles";
import { Paper } from "@mui/material";
import styled from "styled-components";

export const CardPaper = muiStyles.styled(Paper)`
display: flex;
flex-direction: column;

padding: 0 2rem 2rem 2rem;

width: 90%;
height: auto;

border-radius: 0.6rem;

button{
  text-transform: capitalize;
}

.swiper-button-next, .swiper-button-prev {
      color: var(--red);
    }

  .swiper {
    margin-top: 2rem;
    
    width: 100%;

    position: relative;

    z-index: 0;

    .swiper-slide {
    text-align: center;
    font-size: 18px;
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

    z-index: 0;
}

  .swiper-slide img {
    display: block;
    align-self: center;
    width: 100%;
    height: 30rem;
    object-fit: cover;

    border-radius: 0.6rem;

    position: relative;

    z-index: 0;
  }

  @media(max-width:1006px){
    .swiper-slide img{
      position: relative;
    }
  }

  @media(max-width:900px){
    .swiper-slide img{
    height: 20rem;
    }
  }

  @media(max-width:539px){
    .swiper-slide img{
      height: 13rem;
      }
    }  
  }

`;

export const ContainerPriceCity = styled.div`
  width: 95%;
  height: 4.5rem;

  display: none;
  justify-content: flex-start;

  padding: 1rem;

  gap: 2rem;

  position: absolute;

  background: rgba(211, 211, 211, 0.8);

  bottom: 1rem;

  border-radius: 0.8rem;

  div{
    text-align: left;
    margin-right: 2rem;
  }

  h1{
    font-size: 1rem;
    font-weight: 800;
  }

  p{
    font-size: 1rem;
    font-weight: 600;
  }

  @media(max-width: 1007px){
    display: flex;
  }

  @media(max-width:539px){
    height: 2.2rem;

    padding: 0.5rem;

    justify-content: flex-start;

    h1{
      font-size: 0.5rem;
    }

    p{
      font-size: 0.5rem;
      font-weight: 600;
    }
  }
`

export const ContainerAccommodation = styled.div`
  width: 60%;
  display: flex;

  justify-content: space-between;
  align-items: center;

  margin-top: 1rem;

  h1 {
    width: 100%;

    font-size: 1.8rem;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 540px) {
    width: 100%;

    justify-content: center;

    h1 {
      display: flex;
      justify-content: center;

      font-size: 1.5rem;

      margin-bottom: 0.5rem;
    }
  }
`;

export const ContainerRaiting = styled.section`
  @media (max-width: 539px) {
    width: 100%;
    display: flex;

    justify-content: center;
  }
`;

export const ContainerInfo = styled.section`
  width: 100%;

  display: flex;

  justify-content: space-between;

  gap: 1rem;

  margin-top: 1rem;

  .description {
    width: 70%;

    p {
      text-align: justify;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;

    align-items: center;

    .description {
      width: 100%;
    }
  }
`;

export const ContainerButton = styled.div`
  width: 30%;

  display: flex;

  align-items: center;

  justify-content: flex-end;

  button {
    width: 15rem;
    height: 4rem;
  }

  @media (max-width: 700px) {
    width: 100%;
    justify-content: center;

    button {
      width: 80%;
    }
  }
`;


export const ContainerReviews = muiStyles.styled(Paper)`
  width: 100%;

  display: flex;
  flex-direction: column;
 
  margin-top: 2rem;

  padding: 0 2rem 2rem 2rem;

  gap: 1.5rem;

  div{
    display: flex;
    justify-content: center;

    gap: 1rem;
  }

  h1{
    width: 100%;
    
    text-align: center;

    color: var(--red);

    font-size: 20px;
  }

  @media(max-width: 1001px){
    div{
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`
