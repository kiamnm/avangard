import React from "react";
import "./style.css";
import { AiFillClockCircle } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";


export default function Item() {
  return (
    <div className="item-container  ">
      <div className="header d-flex justify-content-between ">
        <div className="right d-flex align-items-center">
          <span className="d-flex align-items-center ps-2">
            <FaLocationArrow style={{color:"#C12E5C",fontSize:"20px"}} />
          </span>
          <p className="m-0 fs_12 anjoman_num_regular">500</p>
          &nbsp;
          <p className="m-0 fs_12 anjoman_regular">متر فاصله</p>
        </div>
        <div className="left">
          <span className="like-icon d-flex align-items-center justify-content-center cursor_pointer">
            <CiHeart style={{color:"#C12E5C",fontSize:"24px"}} />
          </span>
        </div>
      </div>
      <div className="img-container">
        <img className="salon" src="./images/salon1.svg" alt="" />
        <img className="logo" src="./images/salon-logo1.svg" alt="" />
      </div>
      <div className="content-container">
        <p className="fs_16 anjoman_medium text-center  title">سالن زیبایی ژون</p>
        <p className="fs_12 anjoman_regular text">سالن زیبایی فرشته به 10 نفر مدل جهت رنگ مو برای عکاسی و فیلم برداری نیاز دارد.</p>
        <div className="special-container d-flex justify-content-center">
          <div className="right fs_12 anjoman_medium color_white">
            ظرفیت
          </div>
          <span className="fs_12 anjoman_medium">:</span>
          <div className="left fs_12 anjoman_medium color_white">
            2 نفر
          </div>
        </div>
      </div>

      
    

      
      
   

      <div className="footer d-flex justify-content-between align-items-center  ">
        <div className="right d-flex fs_14 anjoman_regular">
         رایگان
          
        </div>
        <div className="left fs_14 anjoman_medium color_pink ">رزرو نوبت</div>
      </div>
    </div>
  );
}
