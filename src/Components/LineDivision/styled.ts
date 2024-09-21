import styled from "styled-components";

export const LineDiv = styled.div<{margin?: string}>`
height: 1px;
width: 100%;
background-color: #CC9F16;
margin: ${(props) => props.margin};
`