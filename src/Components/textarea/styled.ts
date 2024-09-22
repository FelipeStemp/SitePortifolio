import styled from "styled-components";
import { TxtAreaProps } from "./props";

export const TxtArea = styled.textarea<TxtAreaProps>`
width: ${(props) => props.width};
height: ${(props) => props.height};
margin: ${(props) => props.margin};
box-shadow: ${(props) => props.shadow};
resize: none;
@media(max-width: 1300px){
height:15vh;
}
`