import styled from "styled-components";

export const StyledSpecialOffers = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding-top: 35px;

    h1{
        padding-bottom: 15px;
    }

    .cards{
        @media (min-width: 700px){
            display: flex;
            flex-direction: row;
        }
    }
`