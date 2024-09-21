import styled from "styled-components";

export const LineDiv = styled.div<{margin?: string}>`
height: 1px;
width: 100%;
background-color: #10CB5B;
margin: ${(props) => props.margin};
`