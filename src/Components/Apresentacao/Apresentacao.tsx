
import imagem from '../../image/test.jpg';
import * as S from './styled';

function Apresentacao(){

  return (
    <S.ApBody id="apresenta">
      <S.DivImg src={imagem} />
      <S.TxtApresenta>
        <h1 >SOBRE NÓS</h1>
        Olá, sou [Seu Nome], um entusiasta da tecnologia e desenvolvedor de software apaixonado por criar soluções inovadoras. Com formação em [Sua Área de Estudo], venho adquirindo experiência em diversas linguagens de programação, incluindo JavaScript, Python e React. Tenho um forte interesse em desenvolvimento front-end e back-end, sempre buscando melhorar a experiência do usuário e a eficiência das aplicações.

        Além da programação, sou curioso por design e usabilidade, o que me ajuda a construir interfaces intuitivas. Ao longo da minha carreira, trabalhei em projetos que variam de pequenos aplicativos a sistemas complexos, colaborando com equipes multidisciplinares. Acredito na importância do aprendizado contínuo e frequentemente busco novos desafios que me façam crescer.

        Fora do trabalho, gosto de participar de comunidades de tecnologia, onde troco ideias e aprendo com outros profissionais. Estou animado para explorar novas oportunidades e contribuir com meu conhecimento!
      </S.TxtApresenta>

      
    </S.ApBody>
  );
}

export default Apresentacao