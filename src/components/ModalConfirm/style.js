import styled from "styled-components";

export const ConfirmDiv = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 6.25rem;
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
    height: 10rem;
    border-radius: 1.125rem;
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  p {
    text-align: center;
    font-weight: bold;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    width: 100%;
    transition: 0.2s;
  }

  span:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
