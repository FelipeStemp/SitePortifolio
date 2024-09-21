import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import imagem from '../../image/test.jpg';
import * as S from './styled';

import 'swiper/css';
import ImagemFormat from '../imagem/imagem';

function SectionFotos(){

  interface Data{
    id: string,
    image: string
  }

  const dataImage: Data[] =[
    {id: '1', image: imagem},
    {id: '2', image: imagem},
    {id: '3', image: imagem},
    {id: '4', image: imagem},
  ];

  return(
    <S.FotosBody>
      <S.Slider>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
        >
          {dataImage.map( (item) => (
            <SwiperSlide key={item.id}>

              <ImagemFormat
                radius="1vw"
                imagem={item.image}
              />
            </SwiperSlide>
          ))}

        </Swiper>

      </S.Slider>

      <S.Texto>
          TEXT
      </S.Texto>
    </S.FotosBody>
  )
}

export default SectionFotos