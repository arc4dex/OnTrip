import styled from "styled-components";

export const BackGroundModalBooking = styled.div`
  inset: 0;

  width: 100%;

  z-index: 1;

  background-color: rgba(0, 0, 0, 0.1);

  position: fixed;
`;

export const ContainerBooking = styled.div`
  width: 33rem;

  background-color: white;

  padding: 2rem;

  position: fixed;
  z-index: 1;

  border-radius: 1rem;

  .bookingHeader {
    width: 100%;
    display: flex;

    justify-content: space-between;

    margin-bottom: 1rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;

    section {
      width: 100%;
      
      button {
        width: 100%;
        margin-top: 1rem;
      }
    }
  }

  section{
    width: 100%;

    display: flex;
    
    align-items: center;
    text-align: center;

  
    h1{
      width: 80%;
      display: flex;
      
      margin-top: 1rem;

      font-size: 16px;

      gap: 0.3rem;

    }

    p{
      width: 20% ;
      margin-top: 1rem;

      font-weight: 600;
      }
  }
`;
