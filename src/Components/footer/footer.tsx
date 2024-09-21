
import face from '../../image/facebook.png';
import insta from '../../image/instagram.png';
import linkedin from '../../image/linkedin.png';
import ImagemFormat from '../imagem/imagem';
import * as S from './styled';

function Footer(){


  return(
    <S.DivFooter>
      <S.SocialMedias>
        <ImagemFormat imagem={insta} width='3vw'/>
        <ImagemFormat imagem={face} width='3vw'/>
        <ImagemFormat imagem={linkedin} width='3vw'/>
      </S.SocialMedias>

    </S.DivFooter>
  )
}

export default Footer