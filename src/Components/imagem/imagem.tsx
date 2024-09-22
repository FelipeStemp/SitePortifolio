import { Props } from "../../PropsInterface/props"
import * as S from './styled';

function ImagemFormat({width, imagem, radius}: Props){
  return(
    <S.ImagemFormat
    width={width}
    src={imagem}
    radius={radius}
    />
  )
}

export default ImagemFormat