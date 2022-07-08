import styled from "styled-components";

export const HeaderNav = styled.nav`
  width: 100%;

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  div{
    display: flex;
    align-items: center;
  }

  h1{
  color: var(--red)
 }
  h2{
  color: var(--blue)
 }

 @media(min-width: 768px){
  display: none;
 }

`



