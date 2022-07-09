import styled from "styled-components";

export const StyledAboutUs = styled.div`
  width: 100vw;
  height: calc(100vh - 4.688em);
  background-color: #f8edeb;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  padding: 3%;
  gap: 5%;

  h1 {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid var(--blue);
    padding-bottom: 0.625rem;
    color: var(--blue);
  }

  @media (max-width: 768px) {
    overflow: auto;
  }
`;

export const StyledText = styled.div`
  font-weight: 400;
  display: flex;
  justify-content: center;
  width: 100%;

  h4 {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 70vw;
    font-size: 1rem;
    text-align: center;
    font-weight: lighter;
  }
`;

export const StyledShowcase = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 0.625rem;
`;

export const StyledCard = styled.div`
  height: 9.375em;
  width: 28vw;
  background-color: var(--blue);
  border-radius: 0.5em;
  display: flex;
  -webkit-box-shadow: 5px 5px 0.938em -3px #000000;
  box-shadow: 5px 5px 0.938em -3px #000000;

  @media (max-width: 768px) {
    width: 70vw;
    height: 9.375em;
  }
`;

export const ImgCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  padding-left: 0.625rem;
  padding-right: 0.625rem;

  img {
    width: 100%;
    max-height: 100%;
    border-radius: 100%;
    -webkit-box-shadow: 5px 5px 0.938em -3px #000000;
    box-shadow: 5px 5px 0.938em -3px #000000;
  }
`;

export const InfoCard = styled.div`
  border-left: 1px solid white;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  justify-content: center;
  gap: 0.625em;

  padding-left: 1.875em;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 1.25em;
  }

  h5 {
    font-size: 1em;
  }

  p {
    font-size: 0.875rem;
  }
`;
