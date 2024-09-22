import styled from "styled-components";
import { InputProps } from "./props"


export const InputAll = styled.input<InputProps>`
width: ${(props) => props.width};
height: ${(props) => props.height};
color: ${(props) => props.color};
border-radius: ${(props) => props.radius};
border: ${(props) => props.border};
box-shadow: ${(props) => props.shadow};
background-color: ${(props) => props.background};
margin:${(props) => props.margin};
padding-left: 15px;

@media(max-width: 1100px){
height:3vw;
}
@media(max-width: 760px){
height:6vw;
}
`