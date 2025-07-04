"use client";
import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // استایل پایه
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules"; // اضافه شد
import Item from "./item/Item";

export default function SwiperComponent({ data }) {
  return (
    <div>
      <Swiper 
       modules={[Pagination, Autoplay]} // اضافه شد
        autoplay={{
          delay: 2000, // تاخیر بین اسلایدها (میلی‌ثانیه)
          disableOnInteraction: false, // با کلیک یا لمس کاربر autoplay متوقف نشود
          pauseOnMouseEnter: true,
        }}
      
      
      breakpoints={{
          320: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 10,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 10,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 12,
            spaceBetween: 20,
          },
        }}>
        {data.map((item,index) => {
          return (
            <SwiperSlide key={index}>
              <Item data={item}></Item>
            </SwiperSlide>
          );
        })}

        <SwiperSlide>
          <Item></Item>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
