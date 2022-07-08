import styled from "styled-components";

export const UserMenu = styled.div`
 width: 13rem;
 height: 150px;

 display: flex;
 flex-direction: column;

 border-radius: 8px 0 0 8px;

 padding: 10px;

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

  gap: 10px;

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