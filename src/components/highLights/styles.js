import styled from "styled-components";

export const ContainerHighLights = styled.div`
width: 100%;

margin-top: 1rem;

color: var(--red);

h3{
   margin-bottom: 0.5rem;
 }

button{
 display: flex;
 flex-wrap: wrap;

 justify-content: flex-start;
 height: auto;

 gap: 1rem;

 align-items: center;

 div{
   display: flex;
   flex-direction: column;
   align-items: center;

   span{
     font-size: 0.5rem;
     margin-top: 0.2rem;
   }
 }
}

@media(max-width:1055px){
 button{
   width: 70%;
 }
}
@media(max-width:701px){
 button{
   width: 100%;
 }
}
`