"use client";
import React,{useState} from "react";
import "./style.css";
import ClientWrapper from "../clientWrapper/ClientWrapper";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function TypicalComponentHeaderWithMenu({
  title,
  pinkTitle,
  subTitle,
  href,
  menuItems,
  defaultMenu
}) {
    const [activeMenu,setActiveMenu]=useState(defaultMenu)
  return (
    <ClientWrapper>
      <div className="typical-component-header-with-menu  ">
        <div className="d-flex justify-content-between">
           <div className="right d-flex justify-content-center align-items-center">
          <div className="icon-container d-flex justify-content-center align-items-center bg_mode_white">
            <img src="./images/service-menu-icon.png" alt="" />
          </div>
          <div className="text-container pe-3">
            <p className="m-0 fs_16 sansSemiBold color_mode_black">
              {title} <span className="color_pink_light">{pinkTitle}</span>
            </p>
            <p className="m-0 color_mode_black sansRegular fs_12">{subTitle}</p>
          </div>
        </div>
        <div className="button-container gap_8 d-none d-lg-flex">
            {menuItems.map((item,index)=>{
                return(
                    <button key={index} onClick={()=>{setActiveMenu(item)}} className={`fs_12 sansRegular color_mode_black bg_mode_white ${(activeMenu===item)?"active":""}`}>{item} </button>
                )
            })}
          
          
        </div>
        <div className="left  ">
          <Link
            href={href}
            className="button-container bg_pink_light d-flex text-decoration-none"
          >
            <p className="m-0 sansRegular color_white fs_14">مشاهده همه</p>
            <span className="d-flex align-items-center justify-content-center me-2">
              <MdKeyboardArrowLeft
                style={{ fontSize: "20px", color: "white" }}
              />
            </span>
          </Link>
        </div>
        </div>
       



 <div className="button-container mobile-mode gap_4  d-flex d-lg-none">
            {menuItems.map((item,index)=>{
                return(
                    <button key={index} onClick={()=>{setActiveMenu(item)}} className={`fs_12 sansRegular color_mode_black bg_mode_white text-nowrap ${(activeMenu===item)?"active":""}`}>{item} </button>
                )
            })}
          
          
        </div>


      </div>
    </ClientWrapper>
  );
}
