import React from "react";
import "./style.css";
import ClientWrapper from "../clientWrapper/ClientWrapper";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import SwiperComponent from "./swiper/SwiperComponent";

export default function NearestSalon() {
  return (
    <ClientWrapper>
      <div className="nearest-salon-container py-5">
        <div className="header  d-flex justify-content-between">
          <div className="right d-flex justify-content-center align-items-center">
            <div className="icon-container d-flex justify-content-center align-items-center">
              <img src="./images/location-logo.svg" alt="" />
            </div>
            <div className="text-container pe-3">
              <p className="m-0 fs_16 anjoman_medium">
                نزدیک‌ترین <span className="color_pink">سالن‌ها</span>
              </p>
              <p className="m-0 anjoman_regular fs_12">
                نزدیک‌ترین سالن‌های اطراف شما
              </p>
            </div>
          </div>
          <div className="left  ">
            <div className="d-flex gap-4">
              <div className="on-map bg_color_black d-flex align-items-center gap-2 px-3 py-1 rounded-2 cursor_pointer d-none d-md-flex">
                <span className="d-flex align-items-center"><GrMapLocation style={{color:"white"}} /></span>
                <p className="m-0 color_white fs_12 anjoman_regular">مشاهده روی نقشه</p>
              </div>
              <div className="button-container bg_color_pink d-flex ">
                <p className="m-0 color_white anjoman_regular fs_14">
                  مشاهده همه
                </p>
                <span className="d-flex align-items-center justify-content-center me-2">
                  <MdKeyboardArrowLeft
                    style={{ fontSize: "20px", color: "white" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>




<div className="mt-4">
    <SwiperComponent></SwiperComponent>
</div>
        




      </div>
    </ClientWrapper>
  );
}
