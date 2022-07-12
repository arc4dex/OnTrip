import styled from "styled-components";

export const BackGroundModalReadMore = styled.div`
inset: 0;

width: 100%;

z-index: 1;

background-color: rgba(0, 0, 0, 0.1);

position: fixed;
`;

export const ContainerReadMore = styled.div`
  width: 33rem;

  background-color: white;

  padding: 2rem;

  position: fixed;
  z-index: 1;

  border-radius: 1rem;

  section{
    width: 100%;
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 1rem;

    h1{
      width: 2rem;
      color: var(--red)
    }
  }

  p{
      text-align: justify;
    }
`