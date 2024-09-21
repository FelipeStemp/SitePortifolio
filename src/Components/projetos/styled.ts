import styled from "styled-components";

export const ProjetosBody = styled.div`
width: 100vw;
height: 100vh;
display:grid;
justify-content: center;
@media(max-width:720px){
height: 100vh;
}
`

export const Cards = styled.section`
display: flex;
width: 50vw;
@media(max-width:720px){
width:80vw;
height: auto;
}
`

export const Titulo = styled.div`
  width: 100%;
  text-shadow: 0.15vw 0.15vw 0.15vw #075727;
  color:#CCAF2D;
  margin-top: 5vh;
  font-size: 3vw;
  @media(max-width: 1200px){
  font-size: 4vw;
  margin:0px;
  }
`