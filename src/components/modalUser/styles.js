import styled from "styled-components";

export const UserMenu = styled.div`
 width: 13rem;
 height: 9.4rem;

 display: flex;
 flex-direction: column;

 border-radius: 1.1rem 0 0 1.1rem;

 padding: 1.1rem;

 position: fixed;
 top: 0;
 right: 0;
 z-index: 1;

 background-color: var(--grey0);

 .containerIcons{
  width: 100%;

  display: flex;
  justify-content: space-between;

  button{
    :hover{
      color: var(--red);
    }
  }
 }

 .containerOptions{
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 1.1rem;

  margin-top: 5px;

  h3{
    width: 100%;
    font-weight: 600;
    
    cursor: pointer;

    :hover{
      color: var(--red);
    }
  }
 }
`