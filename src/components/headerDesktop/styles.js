import styled from "styled-components";

export const NavDesktop = styled.nav`
  width: 90%;
  height: 70px;


  display: none;
  justify-content: space-between;

  padding: 10px;

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

  gap: 30px;

  align-items: center;
  
  margin-left: 70px;
  
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
  
  gap: 10px;

  button{
    background-color: transparent;
    border: none;

    font-weight: 600;
    font-size: 17px;

    color: var(--red);
  }
`