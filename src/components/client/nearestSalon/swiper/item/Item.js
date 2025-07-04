import React from "react";
import "./style.css";
import { AiFillClockCircle } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function Item() {
  return (
    <div className="nearest-salon-item-container  ">
      <div className="header d-flex justify-content-between p-2">
        <div className="right d-flex align-items-center">
          <span className="d-flex align-items-center ps-2">
            <AiFillClockCircle style={{color:"#C12E5C",fontSize:"20px"}} />
          </span>
          <p className="m-0 fs_14 anjoman_regular">اخرین نوبت: </p>
          <p className="m-0 fs_14 anjoman_regular">فردا ساعت 14:30</p>
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
      <div className="percent d-flex justify-content-end align-items-center pt-2 px-2">
        <span className="d-flex align-items-center ">
          <AiFillLike style={{color:"#C12E5C",fontSize:"20px"}}/>
        </span>
        <p className="m-0  fs_12 anjoman_regular">96% پیشنهاد کاربران</p>
      </div>
      <div className="title-container d-flex justify-content-between pt-4 px-2 align-items-center">
        <p className="m-0 anjoman_medium fs_16 px-2 ">سالن زیبایی نگار</p>
        <div className="d-flex align-items-center">
          <span className="d-flex align-items-center">
            <FaStar style={{color:"yellow"}} />
          </span>
          <p className="fs_10 anjoman_num_regular m-0">4.5</p>
        </div>
      </div>

      <div className="location-container d-flex justify-content-between px-2">
        <div className="right d-flex align-items-center">
          <span className="d-flex align-items-center "><MdLocationPin style={{fontSize:"22px"}} /></span>
          <p className="fs_12 anjoman_regular m-0">خیابان بهشتی ، 500متر</p>
        </div>
        <div className="left">
          <p className="m-0 anjoman_num_regular fs_12">( 5029نظر )</p>
        </div>
      </div>
      <p className="fs_16 anjoman_medium px-2 py-2 m-0">خدمات برتر:</p>
      <div className="tag-container d-flex justify-content-around px-2">
        <div className="px-2 py-1 anjoman_regular fs_12">کراتین</div>
        <div className="px-2 py-1 anjoman_regular fs_12">فیبروز ابرو</div>
        <div className="px-2 py-1 anjoman_regular fs_12">فیشیال</div>
      </div>

      <div className="footer d-flex justify-content-between align-items-center py-2 px-2 mt-3 ">
        <div className="right d-flex">
            <div className="d-flex justify-content-center align-items-center color_white anjoman_num_regular">+3</div>
          <img src="./images/femail-model1.jpg" alt="" />
          <img src="./images/femail-model1.jpg" alt="" />
          
        </div>
        <div className="left fs_14 anjoman_regular color_pink ">رزرو نوبت</div>
      </div>
    </div>
  );
}
