import React from "react";
import "./style.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header portfolio-gallery-container   d-flex justify-content-between">
      <div className="right d-flex justify-content-center align-items-center">
        <div className="icon-container d-flex justify-content-center align-items-center bg_surface">
          <img src="./images/service-menu-icon.png" alt="" />
        </div>
        <div className="text-container pe-3">
          <p className="m-0 fs_16 sansSemiBold text_default">
            گالری <span className="text_primary">نمونه کارها</span>
          </p>
          <p className="m-0 text_default sansRegular fs_12">بهترین مدل خود را انتخاب کنید</p>
        </div>
      </div>
      <div className="left  ">
        <Link href="#" className="button-container bg_primary d-flex text-decoration-none">
          <p className="m-0 sansRegular text_white fs_14">مشاهده همه</p>
          <span className="d-flex align-items-center justify-content-center me-2">
            <MdKeyboardArrowLeft style={{ fontSize: "20px", color: "white" }} />
          </span>
        </Link>
      </div>
    </div>
  );
}
