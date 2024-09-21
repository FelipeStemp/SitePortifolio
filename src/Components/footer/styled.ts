import styled from "styled-components";

export const DivFooter = styled.div`
height: auto;
background-color: rgba(139, 5, 226, 1);
display: flex;
align-items: center;
justify-content: center;
border-top: 3px solid #10CB5B;

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
margin: 3vw;
@media(max-width: 720px){
width: 90vw;

}
`