import React from 'react'
import "./style.css"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

export default function Header() {
  return (
    <div className="header service-menu-header  d-flex justify-content-between">
              <div className="right d-flex justify-content-center align-items-center">
                <div className="icon-container d-flex justify-content-center align-items-center">
                  <img src="./images/service-menu-icon.png" alt="" />
                </div>
                <div className="text-container pe-3">
                  <p className="m-0 fs_16 anjoman_medium">
                    دسته‌بندی <span className="color_pink">خدمات</span>
                  </p>
                  <p className="m-0 anjoman_regular fs_12">
                 دسترسی سریع به خدمات
                  </p>
                </div>
              </div>
              <div className="left  ">
                
                 
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
  )
}
