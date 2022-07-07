import styled from "styled-components";

export const ContainerAWCU = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.5rem;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const CardAWCU = styled.div`
  width: 20%;
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    width: 100%;
    max-width: 5rem;
  }
  > div {
    width: 30%;
    min-width: 9rem;
    max-height: 18rem;
    height: fit-content;

    h2 {
      font-size: 1.25rem;
      font-weight: bolder;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: .9rem;
    }
  }
`;
