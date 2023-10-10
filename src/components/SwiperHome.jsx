import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';

import C1 from '/1.png';
import C2 from '/2.png';
import C3 from '/3.png';
import C4 from '/4.png';
import C5 from '/5.png';
import C6 from '/6.png';

const SwiperHome = () => {
  return (
    <div className="flex justify-center items-center h-full md:px-52 mb-5 mr-2">
      <Swiper
        navigation={true}
        
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          type: 'fraction',
        }}
        className="mySwiper"
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 10, // Ajuste o espaço entre slides em dispositivos menores
          },
          740: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          840: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >

        <SwiperSlide>
          <div className="w-68 h-68">
            <div
              className="w-200 h-200 flex items-center justify-center"
              style={{ width: '100%', height: '100%' }}
            >
              <img src={C2} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-68 h-68">
            <div
              className="w-200 h-200 flex items-center justify-center"
              style={{ width: '100%', height: '100%' }}
            >
              <img src={C3} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-68 h-68">
            <div
              className="w-200 h-200 flex items-center justify-center"
              style={{ width: '100%', height: '100%' }}
            >
              <img src={C4} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-68 h-68">
            <div
              className="w-200 h-200 flex items-center justify-center"
              style={{ width: '100%', height: '100%' }}
            >
              <img src={C5} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-68 h-68">
            <div
              className="w-200 h-200 flex items-center justify-center"
              style={{ width: '100%', height: '100%' }}
            >
              <img src={C6} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          </div>
        </SwiperSlide>

    </Swiper>
    </div>
  );
}

export default SwiperHome;
