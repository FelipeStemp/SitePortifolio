import perfil from '../../image/test.jpg'
import * as S from './styled'

function HeaderAp(){
  return(
    <S.HeaderBody>
      <S.NavHeader>
        <S.ListaUL>
          <S.ListaLI>Contatos</S.ListaLI>
          <S.ListaLI>Projetos</S.ListaLI>
          <S.ListaLI>Fotos</S.ListaLI>
        </S.ListaUL>
      </S.NavHeader>

      <S.DivImagem>
        <S.ImagemPerfil src={perfil}/>
        
        <S.NomeText>
          Felipe Stempkowski
        </S.NomeText>
      </S.DivImagem>

      
    </S.HeaderBody>
  )
}

export default HeaderAp