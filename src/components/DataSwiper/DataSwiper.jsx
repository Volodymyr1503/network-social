import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Autoplay,
  Controller,
  EffectCube,
  EffectFlip,
  Pagination,
  Navigation
} from 'swiper/modules'

import 'swiper/css/bundle'
import './swiper.css'

const items = [1, 2, 3, 4, 5]

const DataSwiper = ({}) => {
  console.log('gggg', [...Array.from(8)])
  const containerRef = useRef()
  return (
    <div ref={containerRef}>
      <Swiper
        effect={'flip'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[Autoplay, EffectFlip, Pagination, Navigation]}
      >
        {items.map((el) => {
          return <SwiperSlide key={el}>Test {el + 1}</SwiperSlide>
        })}
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default DataSwiper
