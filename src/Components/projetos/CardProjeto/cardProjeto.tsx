
import React from 'react';
import * as S from './styled';

interface CardProps{
  imagem: string;
  texto: string;
}

const CardProjeto: React.FC<CardProps> = ({imagem, texto}) => {
  return(
    <S.BodyCard>
      <S.ImageCard src={imagem}/>

      <S.TxtImg>
        {texto}
      </S.TxtImg>

    </S.BodyCard>
  )
}

export default CardProjeto