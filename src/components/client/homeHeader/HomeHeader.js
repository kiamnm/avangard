import React from "react";
import "./style.css";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { FaRegKeyboard } from "react-icons/fa";
import { MdOutlineMyLocation } from "react-icons/md";
import { TbMenu3 } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";

export default function HomeHeader() {
  return (
    <div className="home-header-container">
      <div className="content d-flex flex-column justify-content-center ">
        <div className="text d-flex flex-column align-items-center">
          <p className="color_white fs_24 anjoman_semibold">
            وقت درخشش توست ...
          </p>
          <p className="color_white anjoman_regular">
            اعتماد به نفسی که با یک نگاه در آینه به دست می‌آید، از همین جا شروع
            می‌شود.
          </p>
        </div>

        <div className="search-type-container d-flex flex-column align-items-center ">
          <div className="types-container d-flex justify-content-center ">
            <div className="type-container d-flex flex-column align-items-center justify-content-center bg_color_white px-1 py-1">
              <div className="img-container">
                <img src="./images/person-sample.svg" alt="" />
              </div>

              <p className="color_pink anjoman_regular m-0">رزرو نوبت</p>
            </div>

            <div className="type-container d-flex flex-column align-items-center justify-content-center bg_color_white px-1 py-1">
              <div className="img-container">
                <img src="./images/person-sample.svg" alt="" />
              </div>

              <p className="color_pink anjoman_regular m-0">رزرو نوبت</p>
            </div>

            <div className="type-container d-flex flex-column align-items-center justify-content-center bg_color_white px-1 py-1">
              <div className="img-container">
                <img src="./images/person-sample.svg" alt="" />
              </div>

              <p className="color_pink anjoman_regular m-0">رزرو نوبت</p>
            </div>

            <div className="type-container d-flex flex-column align-items-center justify-content-center bg_color_white px-1 py-1">
              <div className="img-container">
                <img src="./images/person-sample.svg" alt="" />
              </div>

              <p className="color_pink anjoman_regular m-0">رزرو نوبت</p>
            </div>

            <div className="type-container d-flex flex-column align-items-center justify-content-center bg_color_white px-1 py-1">
              <div className="img-container">
                <img src="./images/person-sample.svg" alt="" />
              </div>

              <p className="color_pink anjoman_regular m-0">رزرو نوبت</p>
            </div>
          </div>

          <div className="search-container mt-5 d-flex  py-2 align-items-center">
            <div className="service d-flex align-items-center ">
              <span className="d-flex align-items-center ps-2"><FaRegKeyboard style={{fontSize:"20px",color:"#C12E5C"}} /></span>
              <p className="color_black m-0 anjoman_regular fs_12">دنبال چه خدمتی میگردی؟</p>
            </div>
            <div className="location d-flex align-items-center ">
              <span className="d-flex align-items-center ps-2"><MdOutlineMyLocation style={{fontSize:"20px",color:"#C12E5C"}} /></span>
              <p className="color_black m-0 anjoman_regular fs_12">موقعیت مکانی؟</p>
            </div>
            <div className="category d-flex align-items-center ">
              <span className="d-flex align-items-center ps-2">
                <TbMenu3 style={{fontSize:"20px",color:"#C12E5C"}} />
              </span>
              <p className="color_black m-0 anjoman_regular fs_12">همه دسته بندی ها</p>
            </div>
            <div className="btn-container d-flex align-items-center  flex-grow-1">
                <button className="d-flex align-items-center bg_color_pink px-3 py-2">
                      
              <p className="color_black m-0 anjoman_regular fs_12 color_white anjoman_regular ps-2">جستجو</p>
              <span className="d-flex align-items-center"><IoSearchOutline style={{color:"white"}} /></span>
                </button >
            
            </div>
          </div>
        </div>
      </div>

      <div className="small-arc-container">
        <svg
          width="140"
          height="60"
          viewBox="0 0 140 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 
         C35 0, 105 0, 140 60 
         L140 60 
         L0 60 
         Z"
            fill="white"
          />
        </svg>
        <div className="icon-react ">
          <MdOutlineKeyboardDoubleArrowDown />
        </div>
      </div>
    </div>
  );
}
