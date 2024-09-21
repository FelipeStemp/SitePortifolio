import styled from "styled-components";

export const HeaderBody = styled.div`
  min-witdh: 100vw;
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
  @media(max-width: 1360px){
  height: 30vh;
  }
`

export const NavHeader = styled.nav`
width: 50%;
margin-left: 20%;
display: flex;
justify-content: left;
`

export const ListaUL = styled.ul`
display: flex;
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
`

export const DivImagem = styled.div`
text-align: center;
`

export const ImagemPerfil = styled.img`
border-radius: 100%;
width: 20vw;
`
export const NomeText = styled.p`
font-size: 2vw;
background-color: rgba(0, 0, 0, 0.6);
padding: 0.3vw;
border-radius: 0.2vw;
`