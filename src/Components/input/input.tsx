import * as S from "./styled"
import { Props } from "../../PropsInterface/props"


function InputFormat({padding, type, placeholder, margin, width, height, color, radius, border, shadow, background }: Props){
    return(
            <S.InputAll
                width={width}
                height={height}
                color={color}
                radius={radius}
                border={border}
                shadow={shadow}
                background={background}
                margin={margin}
                placeholder={placeholder}
                type={type}
                padding={padding}
            >
            </S.InputAll>
    )
}

export default InputFormat