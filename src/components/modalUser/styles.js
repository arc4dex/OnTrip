import styled, { css } from "styled-components";

export const Background = styled.div`
  inset: 0;

  width: 100%;

  z-index: 1;

  background-color: rgba(0, 0, 0, 0.1);

  position: fixed;

  animation: appearBackGround 1s;

  ${({ handleCloseUser }) =>
    handleCloseUser &&
    css`
      animation: desappearBackGround 1s;
    `}

  @keyframes appearBackGround {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes desappearBackGround {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const UserMenu = styled.div`
  width: 13rem;

  display: flex;
  flex-direction: column;

  border-radius: 1.1rem 0 0 1.1rem;

  padding: 1.1rem;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  background-color: white;

  animation: appearFromRight 1s;

  ${({ handleCloseUser }) =>
    handleCloseUser &&
    css`
      animation: closeFromRight 1s;
    `}

  .containerIcons {
    width: 100%;

    display: flex;
    justify-content: space-between;

    button {
      :hover {
        color: var(--red);
      }
    }
  }

  .containerOptions {
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 1.1rem;

    margin-top: 5px;

    h3 {
      width: 100%;
      font-weight: 600;

      cursor: pointer;

      :hover {
        color: var(--red);
      }
    }
  }

  @keyframes appearFromRight {
    from {
      right: -100%;
    }
    to {
      right: 0;
    }
  }

  @keyframes closeFromRight {
    from {
      right: 0;
    }
    to {
      right: -100%;
    }
  }
`;
