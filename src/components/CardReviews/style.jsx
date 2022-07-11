import styled from "styled-components";

export const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 19rem;
  height: 96%;
  min-height: 15.5rem;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.4rem;

  .avatar {
    align-self: center;
  }

  p {
    font-size: 0.9rem;
    text-align: start;
    min-height: 7rem;
  }

  span {
    font-size: 0.75rem;
    font-style: italic;
    text-align: start;
    width: 100%;
    display: flex;
    justify-content: space-between;

    b {
      font-weight: bold;
    }
  }
  i {
    display: flex;
    align-items: center;
    transition: transform 0.5s;
    color: var(--red);
  }
  i:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
