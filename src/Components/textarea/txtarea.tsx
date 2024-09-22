import { TxtAreaProps } from "./props";
import * as S from './styled'

function TxtAreaFomart({shadow, margin, width, height}: TxtAreaProps){
    return(
        <S.TxtArea
            width={width}
            height={height}
            margin={margin}
            shadow={shadow}
        >

        </S.TxtArea>
    )
}

export default TxtAreaFomart