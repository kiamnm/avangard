import React from "react";
import "./style.css";
import { BsCart3 } from "react-icons/bs";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
export default function Item() {
  return (
    <div className="item-container bg_mode_white">
      <div className="header d-flex justify-content-between align-items-center">
        <div className="right d-flex gap_16  ">
          <span className="bg_mode_semiWhite color_mode-semiBlack d-flex align-items-center cursor_pointer" >
            <BsCart3 style={{fontSize:"22px"}} />
          </span>
          <span className="bg_mode_semiWhite color_mode-semiBlack d-flex align-items-center cursor_pointer ">
            <CgArrowsExchangeAlt style={{fontSize:"28px"}} />
          </span>
          <span className="bg_mode_semiWhite color_mode-semiBlack d-flex align-items-center cursor_pointer ">
            <FaRegHeart style={{fontSize:"22px"}} />
          </span>
        </div>
        <div className="left d-flex align-tems-center">
          <span className="sansBoldNum fs_14 color_pink_light">%</span>
          <span className="sansBoldNum fs_14 color_pink_light">30</span>
          <span className="sansBoldNum fs_14 color_pink_light">تخفیف</span>
        </div>
      </div>
      <div className="img-container w-100 d-flex justify-content-center">
        <img src="./images/product1.png" alt="" />
      </div>
      <div className="tag-container d-flex gap_16">
        <span className="fs_14 color_mode_black bg_mode_pink_lightest sansRegular">
          مراقبت پوست
        </span>
        <span className="fs_14 color_mode_black bg_mode_pink_lightest sansRegular">
          ضد چروک
        </span>
      </div>
      <h4 className="sansBold color_mode_black fs_16 ">کرم آبرسان قوی</h4>
      <div className="brand-container d-flex gap_4 ">
        <span className="sansRegular fs_12">برند :</span>
        <span className="sansRegular fs_12">Hyaluronig</span>
      </div>
      <div className="seller-container d-flex align-items-center gap_8">
        <img src="./images/salon-logo1.svg" alt="" />
        <p className="color_mode_black fs_12 sansRegular ">فروشنده :</p>
        <p className="color_pink_light fs_12 sansRegular">سالن زیبایی فرشته</p>
      </div>
      <div className="footer-container d-flex justify-content-end align-items-center gap_8">
        <p className="last-price sansMediumNum fs_12 color_mode_semiBlack m-0">185,500</p>
        <p className="current-price sansBoldNum fs_14 color_mode_black m-0">129,000</p>
        <p className="bg_pink_light color_mode_white sansBold fs_14 m-0">تومان</p>
      </div>
    </div>
  );
}
