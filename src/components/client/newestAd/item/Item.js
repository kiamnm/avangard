import React from "react";
import "./style.css";
import { CiHeart } from "react-icons/ci";

export default function Item() {
  return (
    <div className="item-container bg_mode_white">
      <div className="header d-flex justify-content-between  align-items-center ">
        <span className="bg_mode_semiWhite d-flex align-items-center">
          <CiHeart style={{ color: "var(--mode-semiBlack)",fontSize:"24px" }} />
        </span>
        <p className="fs_12 sansBoldNum color_pink_light m-0">دقایق پیش</p>
      </div>
      <div className="middle d-flex justify-content-between">
        
        <div className="content-container d-flex flex-column justify-content-between">
            <h4 className="color_mode_black sansBold fs_14 m-0 ">نیازمند آرایشگر حرفه‌ای</h4>
            <p className="sansSemiBold fs_12 color_mode_black m-0">پورسانتی/درصدی</p>
            <p className="fs_12 sansRegular color_mode_black m-0 bg_mode_pink_lightest  align-self-start">دعوت به همکاری</p>
        </div>
        <div className="img-container">
            <img src="./images/course.png" alt="" />
        </div>
      </div>
      <div className="footer d-flex justify-content-between">
        <div className="right d-flex align-items-center gap_4">
            <img src="./images/femail-model3.jpg" alt="" />
            <p className="m-0 sansRegular  color_mode_black m-0 fs_12">آگهی گذار :</p>
            <p className="m-0 sansRegular  color_pink_light m-0 fs_12">نرجس برادران</p>
        </div>
        <div className="left">
            <p className="m-0 sansBold color_pink_light fs_12 cursor_pointer">مشاهده آگهی</p>
        </div>
      </div>
    </div>
  );
}
