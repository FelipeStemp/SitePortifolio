import * as S from "./styled"
import { InputProps } from "./props"


function InputFormat({type, placeholder, margin, width, height, color, radius, border, shadow, background }: InputProps){
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
            >
            </S.InputAll>
    )
}

export default InputFormat