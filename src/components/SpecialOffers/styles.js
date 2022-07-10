import styled from "styled-components";

export const StyledSpecialOffers = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 2rem;

  h1 {
    padding-bottom: 1rem;
  }

  .cards {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 700px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .swiper {
      width: 90%;
      background: #fff;
      border-radius: 1rem;
      margin-bottom: 2rem;

      @media (min-width: 600px) {
        width: 94%;
      }

      @media (min-width: 1150px) {
        width: 90%;
      }

      @media (min-width: 1400px) {
        width: 71%;
      }
    }

    .swiper-slide {
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

      article {
        margin-left: 0;
        padding: 0 1.3rem;
        max-width: 37.25rem;
        height: 20rem;
        height: 39rem;

        @media (min-width: 1000px) {
          height: 50rem;
        }
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: var(--red);
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .swiper-pagination-bullets {
      bottom: 2rem;
    }

    .swiper-pagination-bullet-active {
      background: #ee685f;
    }
  }
`;
