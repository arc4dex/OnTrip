import styled from "styled-components";

export const ModalNav = styled.div`
 width: 14rem;
 height: 220px;

 display: flex;
 flex-direction: column;
 justify-content: space-between;

 background-color: #F7F7F7;

 border-radius: 0 8px 8px 0;

 padding: 10px;

 position: fixed;
 top: 0;
 left: 0;
 z-index: 1;

 animation: appearFromLeft 1s;

 .container{
  width: 100%;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
 }

 .container_logo{
  display: flex;
 }

 h1{
  color: var(--red)
 }
 h2{
  color: var(--blue);
 }

 button{
  font-size: 16px;
  font-weight: 700;

  background-color: transparent;

  border: none;

  :hover{
    color: var(--red);
  }
 }

 .menu{
  width: 100%;
  height: 55%;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  margin-bottom: 20px;

  h3{
    width: 100%;

    cursor: pointer;

    :hover{
      color: var(--red);
    }
  }
 }

 @keyframes appearFromLeft{
  from{
    left: -100%;
  }
  to{
    left: 0;
  }
 }

 @keyframes closeFromRight{
  from{
    left: 0%;
  }
  to{
    left: 100;
  }
 }
`