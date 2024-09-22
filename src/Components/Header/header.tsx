import { scrollToSection } from '../navegação/nav';
import * as S from './styled';

function HeaderAp(){
  return(
    <S.HeaderBody>
      <S.NavHeader>
        <S.ListaUL>
          <S.BtnNav onClick={() => scrollToSection('footer')}>CONTATOS</S.BtnNav>
          <S.BtnNav onClick={() => scrollToSection('projetos')}>PROJETOS</S.BtnNav>
          <S.BtnNav onClick={() => scrollToSection('apresenta')}>SOBRE NÓS</S.BtnNav>

        </S.ListaUL>
      </S.NavHeader>

      
    </S.HeaderBody>
  )
}

export default HeaderAp