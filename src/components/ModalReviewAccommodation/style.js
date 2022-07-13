import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  div {
    background-color: #fefefe;
    margin: auto;
    padding: 1.25rem;
    border: 1px solid #888;
    width: 15rem;
    height: 15rem;
    border-radius: 1.125rem;
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  span {
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
  }
  span:hover {
    cursor: pointer;
  }

  button {
    width: 100%;
    justify-self: flex-end;
  }
`;
