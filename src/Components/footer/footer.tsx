
import face from '../../image/facebook.png';
import insta from '../../image/instagram.png';
import linkedin from '../../image/linkedin.png';
import ButtonAll from '../button/button';
import ImagemFormat from '../imagem/imagem';
import * as S from './styled';

function Footer(){
  return(
    <S.DivFooter id="footer">
      <S.SocialMedias>
        <ButtonAll
          color='white'
          estilo="a"
          width='auto'
          height='5vw'
          display='flex'
          alignItens='center'
          textDecoration='none'
          margin='2vw 3vw 2vw 0vw'
          gap="10px"
          href="https://www.instagram.com/eh.duarda/"
        >
          <ImagemFormat imagem={insta} width='3vw'/>
          Instagram
        </ButtonAll>

        <ButtonAll
          color='white'
          estilo="a"
          width='auto'
          height='5vw'
          display='flex'
          alignItens='center'
          textDecoration='none'
          margin='2vw 3vw 2vw 0vw'
          gap="10px"
          href="https://www.instagram.com/eh.duarda/"
        >
          <ImagemFormat imagem={face} width='3vw'/>
          Facebook
        </ButtonAll>

        <ButtonAll
          color='white'
          estilo="a"
          width='auto'
          height='5vw'
          display='flex'
          alignItens='center'
          textDecoration='none'
          margin='2vw 3vw 2vw 0vw'
          gap="10px"
          href="https://www.instagram.com/eh.duarda/"
        >
          <ImagemFormat imagem={linkedin} width='3vw'/>
          LinkedIn
        </ButtonAll>
        
      </S.SocialMedias>

    </S.DivFooter>
  )
}

export default Footer