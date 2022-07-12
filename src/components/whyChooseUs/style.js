import styled from "styled-components";

export const ContainerWCU = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem;
`;
export const HeaderWCU = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  h1 {
    font-size: 1.5rem;
    font-weight: bolder;
    text-align: center;
  }
  > div {
    width: 30%;
    min-width: 15rem;
    height: 6rem;

    p {
      text-align: center;
    }
  }
`;
