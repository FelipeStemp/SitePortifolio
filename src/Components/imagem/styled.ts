import styled from "styled-components";
import { imagemProps } from "./props";

export const ImagemFormat = styled.img<imagemProps>`
width: ${(width) => width.width};
border-radius: ${(props) => props.radius};
`