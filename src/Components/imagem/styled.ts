import styled from "styled-components";
import { imagemProps } from "./props";

export const ImagemFormat = styled.img<imagemProps>`
  width: ${(props) => props.width || 'auto'};
  border-radius: ${(props) => props.radius || '0'};

  @media (max-width: 720px) {
    width: ${(props) => (props.width ? `${parseFloat(props.width) * 7}px` : 'auto')};
  }
`;