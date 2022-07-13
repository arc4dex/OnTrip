import styled from "styled-components";

export const ContainerMiniCardReview = styled.div`
  width: 14rem;
  height: 18rem;

  display: flex;
  flex-direction: column;

  div{
    width: 100%;
    display: flex;
    justify-content: center;

    img{
    width: 3rem;
    height: 3rem;

    border-radius: 50%;
  }
}

  p{
    font-size: 0.8rem;
    text-align: justify;
  }

  h2{
    font-size: 0.9rem;
  }

  button{
    padding: 0;
  }
`

export const ContainerRaitingReview = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 1rem;

`