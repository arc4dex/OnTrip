import styled from "styled-components";

export const NavDesktop = styled.nav`
  width: 90%;
  height: 4.4rem;

  display: none;
  justify-content: space-between;

  padding: 1.1rem;

  .containerLogo{
    width: 7rem;

    display: flex;

    align-items: center;

    cursor: pointer;

    h1{
      color: var(--red);
    }
    h2{
      color: var(--blue);
    }
  }

  @media(min-width: 768px){
    display: flex;
  }
`

export const ContainerOptionsNav = styled.div`
  width: 20.5rem;

  display: flex;

  gap: 1.9rem;

  align-items: center;
  
  margin-left: 4.4rem;
  
  h3{

    width: 6rem;
   
    cursor: pointer;

    font-weight: 600;
    
    :hover{
      color: var(--red);
    }
  }
`

export const ContainerIconsNav = styled.div`
  width: 8rem;

  display: flex;
  
  gap: 1.1rem;

  button{
    background-color: transparent;
    border: none;

    font-weight: 600;
    font-size: 1rem;

    color: var(--red);
  }
`