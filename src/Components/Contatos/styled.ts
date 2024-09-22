import styled from "styled-components";

export const ContatoBody = styled.div`
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
`

export const FormContato = styled.form`
background-color: #6B10B1;
color: white;
max-width:22vw;
display: grid;
align-items: center;
justify-content: center;
padding: 1vw;
border-radius: 1vw;
box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw #10CB5B;
@media(max-width: 1300px){
max-width:80vw;
}
`