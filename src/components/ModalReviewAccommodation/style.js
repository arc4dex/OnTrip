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
    width: 20rem;
    height: 20rem;
    border-radius: 1.125rem;
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  p {
    align-self: flex-end;
    transition: transform 0.2s;
  }
  p:hover {
    transform: scale(1.5);
  }

  span {
    align-self: ce;
    display: flex;
    justify-content: space-between;
    transition: transform 0.2s;
  }
  p,
  span:hover {
    cursor: pointer;
  }

  button {
    width: 100%;
    justify-self: flex-end;
  }

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 1rem;
  }

  textarea {
    resize: none;
    width: 100%;
    border-radius: 0.5rem;
    height: 8ch;
    overflow: hidden;
    padding: 0.5rem;
  }
`;
