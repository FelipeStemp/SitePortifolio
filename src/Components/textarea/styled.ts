import styled from "styled-components";
import { Props } from "../../PropsInterface/props"

export const TxtArea = styled.textarea<Props>`
width: ${(props) => props.width};
height: ${(props) => props.height};
margin: ${(props) => props.margin};
box-shadow: ${(props) => props.shadow};
border-radius: ${(props) => props.radius};
border: ${(props) => props.border};
resize: none;
@media(max-width: 1300px){
height:15vh;
}
`