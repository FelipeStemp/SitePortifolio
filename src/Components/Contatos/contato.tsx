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
                    type="email"
                    height='2vw'
                    radius='0.2vw'
                    margin='5px'
                    placeholder="Email"
                    border='none'
                    shadow='0.1vw 0.1vw #10CB5B'
                />
                
                <label>Assunto</label>
                <InputFormat
                    width="auto"
                    height='2vw'
                    radius='0.2vw'
                    margin='5px'
                    placeholder="Assunto"
                    border='none'
                    shadow='0.1vw 0.1vw #10CB5B'
                />

                <label>Descrição</label>
                <TxtAreaFomart
                    width="auto"
                    height="10vw"
                    margin='5px'
                    shadow='0.1vw 0.1vw #10CB5B'
                />
            </S.FormContato>
        </S.ContatoBody>
    )
}

export default Contato