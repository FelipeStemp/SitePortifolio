
import ButtonAll from '../button/button'
import InputFormat from '../input/input'
import TxtAreaFomart from '../textarea/txtarea'
import * as S from './styled'


function Contato(){
    return(
        <S.ContatoBody>
            <S.FormContato>
                <h2>Envie-nos uma menssagem</h2>
                <label>E-mail</label>
                <InputFormat
                    width="auto"
                    height='auto'
                    radius='0.4vw'
                    margin='5px'
                    placeholder="Email"
                    border='none'
                    shadow='0.1vw 0.1vw #10CB5B'
                    padding="10px"
                />
                
                <label>Assunto</label>
                <InputFormat
                    width="auto"
                    height='auto'
                    radius='0.4vw'
                    margin='5px'
                    placeholder="Assunto"
                    border='none'
                    shadow='0.1vw 0.1vw #10CB5B'
                    padding="10px"
                />

                <label>Descrição</label>
                <TxtAreaFomart
                    width="auto"
                    height="10vw"
                    margin='5px'
                    shadow='0.1vw 0.1vw #10CB5B'
                    radius='0.4vw'
                    border='none'
                />

                <ButtonAll
                    width="auto"
                    height='auto'
                    radius='0.4vw'
                    margin='5px'
                    color='BLACK'
                    background='rgba(255, 255, 255, 1)'
                    border='none'
                    shadow='0.1vw 0.1vw #10CB5B'
                    type='submit'
                    padding="10px"
                >
                    ENVIAR
                </ButtonAll>
            </S.FormContato>
        </S.ContatoBody>
    )
}

export default Contato