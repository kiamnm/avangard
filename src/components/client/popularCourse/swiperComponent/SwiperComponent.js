"use client";
import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/pagination";
import {  Autoplay } from "swiper/modules"; 
import Item from "../item/Item";

export default function SwiperComponent() {
  return (
    <div>
      <Swiper 
       modules={[ Autoplay]} 
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
          pauseOnMouseEnter: true,
        }}
      
      
      breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        //   576: {
        //     slidesPerView: 5,
        //     spaceBetween: 15,
        //   },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        //   1200: {
        //     slidesPerView: 10,
        //     spaceBetween: 20,
        //   },
          1400: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          
        }}>
        
          
            <SwiperSlide >
              <Item ></Item>
            </SwiperSlide>
            <SwiperSlide >
              <Item ></Item>
            </SwiperSlide>
            <SwiperSlide >
              <Item ></Item>
            </SwiperSlide>

            <SwiperSlide >
              <Item ></Item>
            </SwiperSlide>
            <SwiperSlide >
              <Item ></Item>
            </SwiperSlide>
            <SwiperSlide >
              <Item ></Item>
            </SwiperSlide>
            <SwiperSlide >
              <Item ></Item>
            </SwiperSlide>

            <SwiperSlide >
              <Item ></Item>
            </SwiperSlide>
            <SwiperSlide >
              <Item ></Item>
            </SwiperSlide>
        
        {/* <SwiperSlide>
          <Item></Item>
        </SwiperSlide> */}




        
      </Swiper>
    </div>
  );
}
