import { scrollToSection } from '../navegação/nav';
import * as S from './styled';

function HeaderAp(){
  return(
    <S.HeaderBody>
      <S.NavHeader>
        <S.ListaUL>
          <S.ListaLI onClick={() => scrollToSection('footer')}>CONTATOS</S.ListaLI>
          <S.ListaLI onClick={() => scrollToSection('projetos')}>PROJETOS</S.ListaLI>
          <S.ListaLI onClick={() => scrollToSection('apresenta')}>SOBRE NÓS</S.ListaLI>
        </S.ListaUL>
      </S.NavHeader>

      
    </S.HeaderBody>
  )
}

export default HeaderAp