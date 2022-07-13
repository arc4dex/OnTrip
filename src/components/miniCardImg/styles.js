import styled, { css } from "styled-components";

export const ContainerStyle = styled.div`
  
  .desktop {
    width: 25%;
    display: flex;
    justify-content: space-between;

    section {
      margin-top: 0;

      justify-content: center;
      gap: 0.3rem;
    }

    @media (max-width: 1007px) {
      display: none;
    }
  }

  div {
    width: 8rem;

    gap: 1rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .line {
      height: 60%;
      border-right: 2px solid black;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      height: 100%;

      p {
        font-size: 1rem;
        font-weight: 450;
      }

      .boldText {
        font-weight: 600;
      }
    }

    ${(props) =>
      props.imgMobile &&
      css`
        width: 95%;
        height: 4.4em;

        padding: 0.6rem;

        border-radius: 0.6rem;

        background: rgba(211, 211, 211, 0.8);

        display: flex;
        flex-direction: row;
        justify-content: center;

        gap: 1.5rem;

        position: absolute;
        bottom: 1rem;
        left: 6px;

        .line {
          width: 0;
        }

        p {
          color: black;
        }

        @media (min-width: 1007px) {
          display: none;
        }

        @media (max-width: 822px) {
          height: 2.2rem;

          padding: 5px;

          section {
            gap: 2px;
            p {
              font-size: 0.5rem;
            }
          }
        }
      `}
  }
`;
