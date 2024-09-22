import styled from "styled-components";
import { Props } from "../../PropsInterface/props"


export const ButtonContainer = styled.button<Props>`
width: ${(props) => props.width};
height: ${(props) => props.height};
color: ${(props) => props.color};
border-radius: ${(props) => props.radius};
border: ${(props) => props.border};
box-shadow: ${(props) => props.shadow};
background-color: ${(props) => props.background};
margin:${(props) => props.margin};
padding: ${(props) => props.padding};
display: ${(props) => props.display};
text-decoration: ${(props) => props.textDecoration};
justify-content: ${(props) => props.justify};
align-items: ${(props) => props.alignItens};
gap: ${(props) => props.gap};
&:hover{
cursor: ${(props) => props.cursor};
}
`