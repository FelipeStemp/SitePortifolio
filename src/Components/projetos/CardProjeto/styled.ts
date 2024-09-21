import styled from "styled-components";

export const BodyCard = styled.div`
width: auto;
display:ruby;
align-items: center;
justify-content:center;
@media(max-width: 720px){
width: auto;
margin: 1vw;
}
`

export const ImageCard = styled.img`
width: 25vw;
border-radius: 0.5vw;
box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw #10CB5B;

@media(max-width: 720px){
width: 80vw;
}
`
export const TxtImg = styled.div`
  margin-top: 1vw;
  text-align: center;
  font-size: 1.2vw;
  overflow-wrap: anywhere;
  overflow: hidden;
  height: auto;
  padding: 1vw;
  border-radius: 0.5vw;
  background-color: rgba(139, 5, 226, 1);
  color:white;
  box-shadow: 5px 5px #10CB5B;
  width:30vw;

  @media(max-width: 720px){
  width:auto;
  margin: 0px 10px 0px 10px;
  font-size: 5vw;
}

@media(max-width: 1000px){
font-size: 3vw;
}
`