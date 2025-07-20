import React from "react";
import "./style.css";
import { BsCart3 } from "react-icons/bs";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { IoIosVideocam } from "react-icons/io";
import { TbAntennaBars5 } from "react-icons/tb";
export default function Item() {
  return (
    <div className="item-container bg_mode_white">
      <div className="header d-flex justify-content-between align-items-center">
        <div className="right d-flex gap_16  ">
          <span className="bg_mode_semiWhite color_mode-semiBlack d-flex align-items-center cursor_pointer ">
            <img src="./images/education-logo.svg" alt="" />
          </span>
          <span className="bg_mode_semiWhite color_mode-semiBlack d-flex align-items-center cursor_pointer ">
            <FaRegHeart style={{ fontSize: "22px" }} />
          </span>
        </div>
        <div className="left d-flex align-tems-center">
          <p className="sansBoldNum fs_14 color_pink_light m-0">
            اعطای مدرک معتبر
          </p>
        </div>
      </div>
      <div className="img-container w-100 d-flex justify-content-center">
        <img src="./images/course.png" alt="" />
      </div>
      <div className="tag-container d-flex align-items-center justify-content-between gap_16">
        <span className="fs_14 color_mode_black bg_mode_pink_lightest sansRegular">
          ضد چروک
        </span>
        <div className="d-flex gap_4">
          <p className="fs_12 sansMediumNum color_mode_black m-0">8350</p>
          <p className="fs_12 sansRegular color_mode_black m-0">شرکت کننده</p>
        </div>
      </div>
      <h4 className="sansBold color_mode_black fs_16 ">
        تدرییس کامل آرایش چشم
      </h4>
      <div className="brand-container d-flex gap_4 ">
        <span className="sansRegular fs_12">برند :</span>
        <span className="sansRegular fs_12">Hyaluronig</span>
      </div>
      <div className="detail-container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap_4" >
          <span className="d-flex align-items-between "><GoClockFill style={{fontSize:"20px",color:"var(--pink-light)"}} /></span>
          <p className=" fs_10 sansMedium color_mode_black m-0 lh_0">8 ساعت</p>
        </div>
        <div className="d-flex align-items-center gap_4">
          <span className="d-flex align-items-between "><IoIosVideocam style={{fontSize:"22px",color:"var(--green)" }} /></span>
          <p className=" fs_10 sansMedium color_mode_black m-0 lh_0">12 جلسه</p>
        </div>
        <div className="d-flex align-items-center gap_4">
          <span className="d-flex align-items-between "><TbAntennaBars5 style={{fontSize:"22px",color:"var(--orange)" ,backgroundColor:""}} /></span>
          <p className=" fs_10 sansMedium color_mode_black m-0 lh_0">مقدماتی</p>
        </div>
      </div>
      <div className="seller-container d-flex align-items-center gap_8">
        <img src="./images/salon-logo1.svg" alt="" />
        <p className="color_mode_black fs_12 sansRegular ">مدرس :</p>
        <p className="color_pink_light fs_12 sansRegular">نرجس برادران</p>
      </div>
      <div className="footer-container d-flex justify-content-between align-items-center ">
        <div className="m-0 sansRegularNum fs_12 color_mode_white percent bg_pink_light">
               
                    70%
              
        </div>
        <div className="d-flex justify-content-end align-items-center gap_8">
             <p className="last-price sansMediumNum fs_12 color_mode_semiBlack m-0">
          185,500
        </p>
        <p className="current-price sansBoldNum fs_14 color_mode_black m-0">
          129,000
        </p>
        <p className="bg_pink_light color_mode_white sansBold fs_14 m-0">
          تومان
        </p>
        </div>
       
      </div>
    </div>
  );
}
