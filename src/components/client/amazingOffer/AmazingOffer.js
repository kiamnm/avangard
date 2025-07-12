import React from "react";
import "./style.css";
import ClientWrapper from "../clientWrapper/ClientWrapper";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import SwiperComponent from "./swiper/SwiperComponent";

export default function AmazingOffer() {
  return (
    <ClientWrapper>
      <div className="amazing-offer-container d-flex flex-column flex-md-row align-items-center">
        
        <div className="offer-container col-12 col-md-3 d-flex flex-row flex-md-column justify-content-around  justify-content-md-center align-items-center ">
          <div className="text-container anjoman_bold fs_28 color_white">
            <p className="text-line m-0">پیشنهاد</p>
            <p className="text-line m-0">شگفت</p>
            <p className="text-line m-0">انگیز</p>
          </div>
          <div className="tag-container d-flex flex-column ">
            <div className="d-flex justify-content-between two-tag">
              <div className="tag fs_12 anjoman_bold">تخفیف</div>
              <div className="tag fs_12 anjoman_bold">رایگان</div>
            </div>
            <div className="d-flex justify-content-between two-tag">
              <div className="tag fs_12 anjoman_bold">جایزه</div>
              <div className="tag fs_12 anjoman_bold">اشانتیون</div>
            </div>
          </div>
          <div className="button-container d-none d-md-block">
            <Link
              className="text-decoration-none d-flex align-items-center color_white"
              href="/"
            >
              <span className="d-flex align-items-center fs_18 anjoman_regular ">
                مشاهده همه
              </span>
              <span className="d-flex align-items-center button-icon fs_24">
                <MdOutlineKeyboardArrowLeft  />
              </span>
            </Link>
          </div>
        </div>
        <div className="swiper-container col-12 col-md-9">
          <SwiperComponent></SwiperComponent>
        </div>
      </div>
    </ClientWrapper>
  );
}
