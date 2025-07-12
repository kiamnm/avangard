"use client";
import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/pagination";
import {  Autoplay } from "swiper/modules";
import Item from "./item/Item"; 
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";





export default function SwiperComponent() {

  const swiperRef = useRef(null); // ریفرنس به Swiper
  const [isBeginning, setIsBeginning] = useState(true); // آیا در ابتدای اسلاید هستیم؟
  const [isEnd, setIsEnd] = useState(false); // آیا به انتهای اسلاید رسیدیم؟
  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };


  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        setIsBeginning(swiperRef.current.isBeginning);
        setIsEnd(swiperRef.current.isEnd);
      });
    }
  }, []);
  return (
    <div className="d-flex justify-content-center align-itesm-center swiper-container">
      <div className="right-navigator d-none d-md-flex align-items-center ">
        <span style={{
          
          opacity: isBeginning ? 0.6 : 1, 
          pointerEvents: isBeginning ? "none" : "auto", 
        }} onClick={handlePrev} className="d-flex align-items-center justify-content-center navigator left">
          <MdOutlineKeyboardArrowRight style={{fontSize:"30px",color:"#C12E5C"}} />
        </span>
      </div>
      <Swiper 
      onSwiper={(swiper) => (swiperRef.current = swiper)}
       modules={[ Autoplay]} 
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
          pauseOnMouseEnter: true,
        }}
      
      
      breakpoints={{
          320: {
            slidesPerView: 1.4,
            spaceBetween: 16,
          },
       
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
        
          1400: {
            slidesPerView: 3,
            spaceBetween: 16,
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
      <div className="left-navigator d-none d-md-flex align-items-center ">
        <span
        style={{
          cursor: "pointer",
          opacity: isEnd ? 0.3 : 1, // اگر به ابتدای اسلاید رسیدیم کمرنگ کن
          pointerEvents: isEnd ? "none" : "auto", // غیرفعال کن
        }}
        
        
         onClick={handleNext} className="d-flex align-items-center justify-content-center navigator right">
          <MdOutlineKeyboardArrowLeft style={{fontSize:"30px",color:"#C12E5C"}} />
        </span>
        
      </div>
    </div>
  );
}
