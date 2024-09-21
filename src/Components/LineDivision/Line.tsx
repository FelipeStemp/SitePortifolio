import React from 'react';
import * as S from './styled';

interface LineProps{
  margin?: string;
}

const Line: React.FC<LineProps> = ({margin}) => {
  return(
    <S.LineDiv
      margin={margin}
    />
  )
}

export default Line