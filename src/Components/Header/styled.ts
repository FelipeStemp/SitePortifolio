import styled from "styled-components";
import topo from '../../image/topo.jpeg';

export const HeaderBody = styled.div`
  witdh: 100vw;
  height: 20vh;
  margin: none;
  background:#6B10B1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; 
  border-bottom: 3px solid #10CB5B;
  justify-content:center;
  color: white;
  display: flex;
  align-items: flex-end;
  @media(max-width: 1000px){
  display:grid;
  margin-bottom: 5vw;
  }
`

export const NavHeader = styled.nav`
display: flex;
justify-content: left;
@media(max-width: 1000px){
font-size: 3vw;
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

export const BtnNav = styled.button`
font-weight:600;
color:white;
border:none;
list-style: none;
margin: 0 5vw 1vw 0;
font-size: 1.5vw;
background-color: rgba(103, 3, 169, 0.8);
box-shadow: 0.2vw 0.2vw #10CB5B;
padding: 0.6vw;
border-radius: 0.2vw;
&:hover{
box-shadow: 0.5vw 0.5vw rgba(0, 0, 0, 0.4);
cursor:pointer;
}

@media(max-width: 800px){
font-size: 3vw;
margin: 20px;
}
`
