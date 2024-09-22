import * as S from './styled'
import { Props } from "../../PropsInterface/props"

function ButtonAll({ cursor, onClick, gap, alignItens, justify, estilo ="button", href, textDecoration, display, padding, children, width, height, color, background, margin, border, radius, shadow, type}:Props){
    return(
        <S.ButtonContainer
            onClick={onClick}
            as={estilo} // Renderiza como um link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            textDecoration={textDecoration}
            display={display}
            padding={padding}
            width={width}
            height={height}
            color={color}
            background={background}
            margin={margin}
            border={border}
            radius={radius}
            shadow={shadow}
            justify={justify}
            alignItens={alignItens}
            gap={gap}
            cursor={cursor}
            
        >
            {children}
        </S.ButtonContainer>
    ) 
    
}

export default ButtonAll