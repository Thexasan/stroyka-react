import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swipper.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Swipp(props) {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={props.Img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.Img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.Img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.Img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.Img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.Img6} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
