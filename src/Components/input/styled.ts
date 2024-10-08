import styled from "styled-components";
import { Props } from "../../PropsInterface/props"


export const InputAll = styled.input<Props>`
width: ${(props) => props.width};
height: ${(props) => props.height};
color: ${(props) => props.color};
border-radius: ${(props) => props.radius};
border: ${(props) => props.border};
box-shadow: ${(props) => props.shadow};
background-color: ${(props) => props.background};
margin:${(props) => props.margin};
padding: ${(props) => props.padding};
padding-left: 15px;


`