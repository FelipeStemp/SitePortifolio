import styled from "styled-components";

export const ApBody = styled.div`
color:white;
height: 100vh;
width: 85vw;
margin: 5vw 0px 0px 5vw;
text-align: left;
border-radius: 1vw;
display: flex;
justify-content: space-between;
align-items: center;
@media(max-width: 1025px){
display: ruby;
margin:auto;
width: 100%;
margin-left: auto;
margin-right: auto;
margin-bottom: 20vw;
margin-top: 20vw;
}
`

export const TxtApresenta = styled.div`
font-size: 1.3vw;
box-shadow: 0.5vw 0.5vw #10CB5B;
background-color: rgba(139, 5, 226, 1);
border-radius: 1vw;
padding: 1vw;
width: 50vw;
padding: 10px;
@media(max-width: 720px){
width: 90vw;
font-size: 4vw;
margin-top: 10vw;
}
@media(max-width: 1000px){
width: 80vw;
font-size: 3vw;
margin-top: 10vw;
}
`

export const DivImg = styled.img`
width: 25vw;
border-radius: 50%;
@media(max-width: 1025px){
width: 50vw;
margin-top: 10vw;
}
`