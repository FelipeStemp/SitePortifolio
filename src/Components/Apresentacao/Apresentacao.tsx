
import imagem from '../../image/test.jpg';
import * as S from './styled';

function Apresentacao(){

  return (
    <S.ApBody>
      <S.DivImg src={imagem} />
      <S.TxtApresenta>
        <h1>SOBRE NOS</h1>
        Olá! Meu nome é Felipe Stempkowski e sou desenvolvedor especializado em tecnologias web e mobile...
      </S.TxtApresenta>

      
    </S.ApBody>
  );
}

export default Apresentacao