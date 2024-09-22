import { Props } from "../../PropsInterface/props"
import * as S from './styled'

function TxtAreaFomart({border, shadow, margin, width, height, radius}: Props){
    return(
        <S.TxtArea
            width={width}
            height={height}
            margin={margin}
            shadow={shadow}
            radius={radius}
            border={border}
        >

        </S.TxtArea>
    )
}

export default TxtAreaFomart