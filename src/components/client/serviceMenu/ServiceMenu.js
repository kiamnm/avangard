"use client";
import React, { useState,useEffect } from "react";
import "./style.css";
import ClientWrapper from "../clientWrapper/ClientWrapper";
import Header from "./header/Header";
import data from "./data";
import { RiArrowDownSLine } from "react-icons/ri";

export default function ServiceMenu() {
  const [activeMenu, setActiveMenu] = useState("خدمات صورت");
  const [activeSubMenu, setActiveSubMenu] = useState("میکاپ و آرایش");
  useEffect(()=>{
    setActiveSubMenu(data.find((item) => item.title === activeMenu).subMenu[0].title)
    
  },[activeMenu])
  return (
    <ClientWrapper>
      <div className="service-menu-container py-5">
        <Header></Header>

        <div className="menu-container bg_color_white d-flex mt-4 pt-4">
          <div className="main-menu col-2  d-flex flex-column scroll-hidden">
            {data.map((item, index) => {
              return (
                <div
                key={index}
                  onClick={() => {
                    setActiveMenu(item.title);
                  }}
                  className={`d-flex flex-column justify-content-center align-items-center px-2 py-4  cursor_pointer item-container ${
                    activeMenu === item.title ? "active" : "not-active"
                  }`}
                >
                  <img src={item.iconSrc} alt="" />
                  <p className="fs_12 anjoman_medium pt-1 m-0">{item.title}</p>
                </div>
              );
            })}
          </div>
          <div className="sub-menu col-3 d-flex flex-column px-2 scroll-hidden">
            {data
              .find((item) => item.title === activeMenu)
              ?.subMenu.map((subItem, index) => (
                <div
                  onClick={() => {
                    setActiveSubMenu(subItem.title);
                  }}
                  key={index}
                  className={`item-container px-2 py-3 d-flex justify-content-between align-items-center mt-2 cursor_pointer ${
                    activeSubMenu === subItem.title ? "active" : ""
                  }`}
                >
                  <div className="img-container p-2">
                    <img src={subItem.iconSrc} alt={subItem.title} />
                  </div>

                  <p className="fs_12 anjoman_regular m-0">{subItem.title}</p>

                  <span>
                    <RiArrowDownSLine style={{ fontSize: "24px" }} />
                  </span>
                </div>
              ))}
          </div>

          <div className="sub-sub-menu col-7 px-2 scroll-hidden">
            <div className="title d-flex justify-content-center py-4 anjoman_medium fs_14 my-2">
              خدمات میکاپ و آرایش
            </div>
            <div className="items-container d-flex  flex-wrap  ">





                


{data
  .find((menu) => menu.title === activeMenu)
  ?.subMenu.find((sub) => sub.title === activeSubMenu)
  ?.subSubMenu.map((item, index) => (
    <div key={index} className="item-container  px-2 py-2 mb-3 d-flex flex-column">
                        <div className="top d-flex ">
                            <div className="img-container w-50 ">
                                <img src={item.imgSrc} alt="" />
                            </div>
                            <div className="d-flex flex-column justify-content-around align-items-center w-50">
                                <p className="m-0 anjoman_medium fs_14 title-text pb-1"> {item.title} </p>
                                <div className="d-flex ">
                                    <div className="three-img-container d-flex justify-content-center  text-center position-relative ">
                                    <div className="other-stylist fs_8 d-flex flex-column justify-content-center color_white align-items-center gap-2 position-relative">
                                        <p className="m-0 lh_0 ">+</p>
                                        <p className="m-0 lh_0">1160</p>
                                    </div>
                                    <img className="position-relative" src={item.stylist1Src} alt="" />
                                    <img className="position-relative" src={item.stylist2Src}  alt="" />
                                    
                                </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="button py-1 w-100 color_pink d-flex justify-content-center anjoman_regular mt-3 cursor_pointer">رزرو نوبت</div>
                </div>
))}
                




            </div>
          </div>
        </div>
      </div>
    </ClientWrapper>
  );
}
