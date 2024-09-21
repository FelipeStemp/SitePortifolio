import styled from "styled-components";

export const HeaderBody = styled.div`
  witdh: 100vw;
  height: 60vh;
  margin: none;
  background-color: #6D0EB1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; 
  border-bottom: 1px solid #CCAF2D;
  color: white;
  display: flex;
  align-items: flex-end;
  @media(max-width: 1000px){
  height: auto;
  display:grid;
  }
`

export const NavHeader = styled.nav`
margin-left: 20%;
display: flex;
justify-content: left;
@media(max-width: 1000px){
font-size: 5vw;
margin: 0px;
width: 100vw;
display:flex;
justify-content: center;
}
`

export const ListaUL = styled.ul`
display: flex;
@media(max-width: 730px){
display: contents;
}
`

export const ListaLI = styled.li`
list-style: none;
margin: 0 5vw 1vw 0;
font-size: 1.5vw;
background-color: rgba(0, 0, 0, 0.6);
padding: 0.3vw;
border-radius: 0.2vw;
&:hover{
box-shadow: 0.5vw 0.5vw rgba(0, 0, 0, 0.4);
}

@media(max-width: 800px){
font-size: 5vw;
margin: 20px;
}
`

export const DivImagem = styled.div`
text-align: center;
`

export const ImagemPerfil = styled.img`
border-radius: 100%;
width: 20vw;
@media(max-width:720px){
  width:50vw;
}
`
export const NomeText = styled.p`
font-size: 2vw;
background-color: rgba(0, 0, 0, 0.6);
padding: 0.3vw;
border-radius: 0.2vw;
@media(max-width:720px){
  font-size: 4vw;
}
`