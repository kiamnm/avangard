import React from "react";
import "./style.css";
import ClientWrapper from "../clientWrapper/ClientWrapper";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SwiperComponent from "./swiper/SwiperComponent";

export default function BestStylist() {
  
  const data=[
    {imgSrc:"./images/femail-model1.jpg",name:"زهرا صادقی",job:"میکاپ آرتیست"},
     {imgSrc:"./images/femail-model2.jpg",name:" مریم باقری",job:"ناخن کار"},
      {imgSrc:"./images/femail-model3.jpg",name:" شیدا احمدی",job:"مژه کار"},
      {imgSrc:"./images/femail-model1.jpg",name:"زهرا صادقی",job:"میکاپ آرتیست"},
     {imgSrc:"./images/femail-model2.jpg",name:" مریم باقری",job:"ناخن کار"},
      {imgSrc:"./images/femail-model3.jpg",name:" شیدا احمدی",job:"مژه کار"},
      {imgSrc:"./images/femail-model1.jpg",name:"زهرا صادقی",job:"میکاپ آرتیست"},
     {imgSrc:"./images/femail-model2.jpg",name:" مریم باقری",job:"ناخن کار"},
      {imgSrc:"./images/femail-model3.jpg",name:" شیدا احمدی",job:"مژه کار"},
      {imgSrc:"./images/femail-model1.jpg",name:"زهرا صادقی",job:"میکاپ آرتیست"},
     {imgSrc:"./images/femail-model2.jpg",name:" مریم باقری",job:"ناخن کار"},
      {imgSrc:"./images/femail-model3.jpg",name:" شیدا احمدی",job:"مژه کار"},
      {imgSrc:"./images/femail-model1.jpg",name:"زهرا صادقی",job:"میکاپ آرتیست"},
     {imgSrc:"./images/femail-model2.jpg",name:" مریم باقری",job:"ناخن کار"},
      {imgSrc:"./images/femail-model3.jpg",name:" شیدا احمدی",job:"مژه کار"},
      {imgSrc:"./images/femail-model1.jpg",name:"زهرا صادقی",job:"میکاپ آرتیست"},
     {imgSrc:"./images/femail-model2.jpg",name:" مریم باقری",job:"ناخن کار"},
      {imgSrc:"./images/femail-model3.jpg",name:" شیدا احمدی",job:"مژه کار"},
       {imgSrc:"./images/femail-model1.jpg",name:"زهرا صادقی",job:"میکاپ آرتیست"},
     {imgSrc:"./images/femail-model2.jpg",name:" مریم باقری",job:"ناخن کار"},
      {imgSrc:"./images/femail-model3.jpg",name:" شیدا احمدی",job:"مژه کار"},
       {imgSrc:"./images/femail-model1.jpg",name:"زهرا صادقی",job:"میکاپ آرتیست"},
     {imgSrc:"./images/femail-model2.jpg",name:" مریم باقری",job:"ناخن کار"},
      {imgSrc:"./images/femail-model3.jpg",name:" شیدا احمدی",job:"مژه کار"},
       {imgSrc:"./images/femail-model1.jpg",name:"زهرا صادقی",job:"میکاپ آرتیست"},
     {imgSrc:"./images/femail-model2.jpg",name:" مریم باقری",job:"ناخن کار"},
      {imgSrc:"./images/femail-model3.jpg",name:" شیدا احمدی",job:"مژه کار"},
       {imgSrc:"./images/femail-model1.jpg",name:"زهرا صادقی",job:"میکاپ آرتیست"},
     {imgSrc:"./images/femail-model2.jpg",name:" مریم باقری",job:"ناخن کار"},
      {imgSrc:"./images/femail-model3.jpg",name:" شیدا احمدی",job:"مژه کار"},
      


  ]
  
  return (
    
      
      <ClientWrapper>
        <div className="best-stylist-container py-5">
          <div className="header  d-flex justify-content-between">
            <div className="right d-flex justify-content-center align-items-center">
              <div className="icon-container d-flex justify-content-center align-items-center">
                <img src="./images/three-star.svg" alt="" />
              </div>
              <div className="text-container pe-3">
                <p className="m-0 fs_16 anjoman_medium">استایلیست‌های <span className="color_pink">برتر</span></p>
                <p className="m-0 anjoman_regular fs_12">برترین استایلیست‌های شهر شما</p>
              </div>
            </div>
            <div className="left  ">
                <div className="button-container bg_color_pink d-flex ">
                    <p className="m-0 color_white anjoman_regular fs_14">مشاهده همه</p>
                <span className="d-flex align-items-center justify-content-center me-2"><MdKeyboardArrowLeft style={{fontSize:"20px",color:"white"}} /></span>
                </div>
                
            </div>
          </div>
<div className="mt-3">
  <SwiperComponent data={data}></SwiperComponent>
</div>


        </div>
      </ClientWrapper>
    
  );
}
