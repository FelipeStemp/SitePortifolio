import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import imagem from '../../image/test.jpg';
import CardProjeto from './CardProjeto/cardProjeto';
import * as S from './styled';

function Projetos(){


  interface Data{
    id: string,
    image: string,
    texto: string,
  }
  const dataCard: Data[] =[
    {id: '1', image: imagem, texto:"Lorem ipsum molestie aliquam tempus hac senectus purus quis sollicitudin ante elementum, fames himenaeos tempor sagittis tempor eleifend nibh"},
    {id: '2', image: imagem, texto:"Lorem ipsum molestie aliquam tempus hac senectus purus quis sollicitudin ante elementum, fames himenaeos tempor sagittis tempor eleifend nibh"},
    {id: '3', image: imagem, texto:"Lorem ipsum molestie aliquam tempus hac senectus purus quis sollicitudin ante elementum, fames himenaeos tempor sagittis tempor eleifend nibh"},
    {id: '4', image: imagem, texto:"Lorem ipsum molestie aliquam tempus hac senectus purus quis sollicitudin ante elementum, fames himenaeos tempor sagittis tempor eleifend nibh"},
  ];
  return(
    <S.ProjetosBody id="projetos">

      <S.Titulo>
        <h2>PROJETOS</h2>
      </S.Titulo>

      <S.Cards>

        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={2}
            slidesPerView={1}
            breakpoints={{
              720: {
                slidesPerView: 2,
              },
            }}
            navigation
            onSlideChange={() => console.log('slide change')}
          >
            {dataCard.map( (item) => (
              <SwiperSlide key={item.id}>
                <CardProjeto imagem={item.image} texto={item.texto}/>
              </SwiperSlide>
            ))}

          </Swiper>
        </S.Cards>
    </S.ProjetosBody>
  )
}

export default Projetos