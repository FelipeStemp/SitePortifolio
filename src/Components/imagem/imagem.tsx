import { imagemProps } from "./props";
import * as S from './styled';

function ImagemFormat({width, imagem, radius}: imagemProps){
  return(
    <S.ImagemFormat
    width={width}
    src={imagem}
    radius={radius}
    />
  )
}

export default ImagemFormat