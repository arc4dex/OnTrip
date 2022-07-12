import styled from "styled-components";

export const StyledH1 = styled.h1`
    color: var(--blue);
    width: 100%;
    margin-left: 4rem;
    margin-top: 1rem;
    margin-bottom: 4rem;

    @media (min-width: 768px){
        margin-left: 6.5rem;
    }

`

export const ContainerMainTrip = styled.section`
    width: 100%;

    margin-top: 2rem;

    gap: 2rem;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`