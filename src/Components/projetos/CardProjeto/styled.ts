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
width: 30vw;
border-radius: 0.5vw;
&:hover{
  box-shadow: 0.5vw 0.5vw rgba(0, 0, 0, 0.3);
  transform: scale(1.01,1.01);
}

@media(max-width: 720px){
width: 80vw;
}
`
export const TxtImg = styled.div`
  margin-top: 1vw;
  border: 1px solid #CCAF2D;
  text-align: center;
  font-size: 1vw;
  overflow-wrap: anywhere;
  overflow: hidden;
  height: auto;
  padding: 1vw;
  border-radius: 0.5vw;
  background-color: #0EB052;
  color:white;
  box-shadow: 5px 5px #053B1B;
  width:30vw;

  @media(max-width: 720px){
  width:auto;
  margin: 0px 10px 0px 10px;
  font-size: 4vw;
}
`