import styled from "styled-components";

export const ProjetosBody = styled.div`
width: 100vw;
height: auto;
display:grid;
justify-content: center;
@media(max-width:720px){
height: 100vh;
}
`

export const Cards = styled.section`
display: flex;
width: 80vw;
@media(max-width:720px){
width:90vw;
}

`

export const Titulo = styled.h1`
  width: 100%;
  text-shadow: 0.1vw 0.1vw 0.1vw #10CB5B;
  color:rgba(139, 5, 226, 1);
  display:flex;
  align-items:center;
  justify-content:center;
  height:auto;
  
`