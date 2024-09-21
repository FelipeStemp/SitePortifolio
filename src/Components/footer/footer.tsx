
import face from '../../image/facebook.png';
import insta from '../../image/instagram.png';
import linkedin from '../../image/linkedin.png';
import ImagemFormat from '../imagem/imagem';
import * as S from './styled';

function Footer(){
  return(
    <S.DivFooter id="footer">
      <S.SocialMedias>
        <a href="https://www.instagram.com/eh.duarda/">
          <ImagemFormat imagem={insta} width='3vw'/>
        </a>
        
        <a href="https://www.instagram.com/eh.duarda/">
          <ImagemFormat imagem={face} width='3vw'/>
        </a>

        <a href="https://www.instagram.com/eh.duarda/">
          <ImagemFormat imagem={linkedin} width='3vw'/>
        </a>
        
      </S.SocialMedias>

    </S.DivFooter>
  )
}

export default Footer