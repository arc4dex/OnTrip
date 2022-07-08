
import styled, { css } from "styled-components";

export const BackGround = styled.div`
  inset: 0;
  min-height: 100vh;

  position: fixed;

  background-color: rgba(0,0,0,0.1);

  z-index: 1;

  animation: appearBackGround2 1s;

${({handleClose}) => handleClose && css`
  animation: desappearBackGround2 1s;
`
} 

@keyframes appearBackGround2{
from{
  opacity: 0;
}
to{
  opacity: 1;
}
}

@keyframes desappearBackGround2{
from{
  opacity: 1;
}
to{
  opacity: 0;
}
}
`

export const ModalNav = styled.div`
 width: 14rem;
 height: 13.75rem;

 display: flex;
 flex-direction: column;
 justify-content: space-between;

 background-color: white;

 border-radius: 0 0.5rem 0.5rem 0;

 padding: 0.62rem;

 position: fixed;
 top: 0;
 left: 0;
 z-index: 1;

  animation: appearFromLeft 1s;
 

${({handleClose}) => handleClose && css`

  animation: closeFromLeft 1s;
 ` 
 }


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
  font-size: 1rem;
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

  margin-bottom: 1.25rem;

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

 @keyframes closeFromLeft{
  from{
    left: 0;
  }
  to{
    left: -100%;
  }
 }
`