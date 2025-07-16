import React from "react";
import "./style.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import Link from "next/link";

export default function TypicalComponentHeader({title,pinkTitle,subTitle,href}) {
  return (
    <div className="portfolio-gallery-container   d-flex justify-content-between typical-component-header">
      <div className="right d-flex justify-content-center align-items-center">
        <div className="icon-container d-flex justify-content-center align-items-center bg_mode_white">
          <img src="./images/service-menu-icon.png" alt="" />
        </div>
        <div className="text-container pe-3">
          <p className="m-0 fs_16 sansSemiBold color_mode_black">
            {title} <span className="color_pink_light">{pinkTitle}</span>
          </p>
          <p className="m-0 color_mode_black sansRegular fs_12">
             {subTitle}
          </p>
        </div>
      </div>
      <div className="left  ">
        <Link
          href={href}
          className="button-container bg_pink_light d-flex text-decoration-none"
        >
          <p className="m-0 sansRegular color_white fs_14">مشاهده همه</p>
          <span className="d-flex align-items-center justify-content-center me-2">
            <MdKeyboardArrowLeft style={{ fontSize: "20px", color: "white" }} />
          </span>
        </Link>
      </div>
    </div>
  );
}
