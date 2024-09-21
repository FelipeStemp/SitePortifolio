import styled from "styled-components";

export const DivFooter = styled.div`
height: 50vh;
background-color: #6D0EB1;
display: flex;
align-items: center;
justify-content: space-between;
border-top: 1px solid #CCAF2D;
box-shadow: 0vw 0vw 0vw 0.1vw #26053E;

@media(max-width: 720px){
display: grid;
justify-content: center;
height: auto;
}
`

export const SocialMedias = styled.section`
width: 30vw;
background-color: blue;
height: 40vh;
margin-left: 15vw;
@media(max-width: 720px){
width: 90vw;
margin: 3vw;
}
`

export const Contato = styled.form`
width: 30vw;
background-color: blue;
height: 40vh;
margin-right: 15vw;
@media(max-width: 720px){
width: 90vw;
margin: auto;
}
`