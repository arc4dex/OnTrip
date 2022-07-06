import styled from "styled-components";

export const ContainerAWCU = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const CardAWCU = styled.div`
  width: 20%;
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    width: 100%;
    max-width: 5rem;
  }
  > div {
    width: 30%;
    min-width: 15rem;
    height: fit-content;

    h2 {
      font-size: 1.25rem;
      font-weight: bolder;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 1rem;
    }
  }
`;
