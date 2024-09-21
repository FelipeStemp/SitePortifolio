import Apresentacao from "../../Components/Apresentacao/Apresentacao"
import Footer from "../../Components/footer/footer"
import HeaderAp from "../../Components/Header/header"
import { LineDiv } from "../../Components/LineDivision/styled"
import Projetos from "../../Components/projetos/projetos"
import SectionFotos from "../../Components/SectionFotos/fotos"
import * as S from "./styled"

function Home(){
  return(
    <S.HomeDiv>
      <HeaderAp/>
      <Apresentacao/>
      <LineDiv margin="5vw 0 1vw 0"></LineDiv>
      <Projetos/>
      <LineDiv margin="10vw 0 0vw 0"></LineDiv>
      <SectionFotos/>
      <Footer></Footer>
      
    </S.HomeDiv>
  )
}

export default Home