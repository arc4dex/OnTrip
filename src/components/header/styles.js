import styled from "styled-components";

export const HeaderNav = styled.nav`
  width: 100%;

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  padding: 1rem 1.4rem 0 1.4rem;

  div{
    display: flex;
    align-items: center;

    cursor: pointer;
  }

  h1{
  color: var(--red)
 }
  h2{
  color: var(--blue)
 }

 img{
    width: 2.2rem;
    height: 2.2rem;

    border-radius: 60%;
    border-color: black;

    cursor: pointer;

    :hover{
      opacity: 0.5;
    }
  }

 @media(min-width: 768px){
  display: none;
 }

`



