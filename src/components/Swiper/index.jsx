import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

import * as S from './styled';

SwiperCore.use([Navigation, Pagination]);

export const SwiperComponent = () => (
  <S.SwiperWrapper>
    <Swiper
      id="main"
      tag="section"
      wrapperTag="ul"
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src="/swiperimage.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/swiperimage.png" alt="" />
      </SwiperSlide>
    </Swiper>
    <S.TextWrapper>
      <S.Title>
        Marcenas mattis egestas
      </S.Title>
      <S.Text>
        Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.
      </S.Text>
    </S.TextWrapper>
  </S.SwiperWrapper>
);

export default SwiperComponent;
