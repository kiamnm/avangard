
"use client";
import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import ClientWrapper from "../clientWrapper/ClientWrapper";
import Header from "./header/Header";
import data from "./data";
import { RiArrowDownSLine } from "react-icons/ri";
import { useDraggable } from "react-use-draggable-scroll";

export default function ServiceMenu() {
  const [activeMenu, setActiveMenu] = useState("خدمات صورت");
  const [activeSubMenu, setActiveSubMenu] = useState("میکاپ و آرایش");
  const [openSub, setOpenSub] = useState(null);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4=useRef();
  const { events: events1 } = useDraggable(ref1);
  const { events: events2 } = useDraggable(ref2);
  const { events: events3 } = useDraggable(ref3);
   const { events: events4 } = useDraggable(ref4);
  useEffect(() => {
    setActiveSubMenu(
      data.find((item) => item.title === activeMenu).subMenu[0].title
    );
  }, [activeMenu]);
  return (
    <ClientWrapper>
      <div className="service-menu-container py-5 ">
        <Header></Header>

        <div className="menu-container bg_color_white d-flex mt-4 pt-4 ps-2">


            {/* handle main menu */}
          <div
            className="main-menu  d-flex flex-column scroll-hidden "
            {...events1}
            ref={ref1}
          >
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
{/* handle main menu */}

{/* handle submenu desktop */}
          <div
            className="sub-menu d-none d-md-flex flex-column px-2 scroll-hidden"
            {...events2}
            ref={ref2}
          >
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

                  <span className={activeSubMenu === subItem.title ? "active" : ""}>
                    <RiArrowDownSLine style={{ fontSize: "24px" }} />
                  </span>
                </div>
              ))}
          </div>
{/* handle sub-sub-menu desktop */}
          <div
            className="sub-sub-menu  px-2 scroll-hidden d-none d-md-block"
            {...events3}
            ref={ref3}
          >
            <div className="title d-flex justify-content-center py-4 anjoman_medium fs_14 my-2">
              خدمات میکاپ و آرایش
            </div>
            <div className="items-container d-flex  flex-wrap  ">
              {data
                .find((menu) => menu.title === activeMenu)
                ?.subMenu.find((sub) => sub.title === activeSubMenu)
                ?.subSubMenu.map((item, index) => (
                  <div
                    key={index}
                    className="item-container  px-2 py-2 mb-3 d-flex flex-column"
                  >
                    <div className="top d-flex ">
                      <div className="img-container w-50 ">
                        <img src={item.imgSrc} alt="" />
                      </div>
                      <div className="d-flex flex-column justify-content-around align-items-center w-50">
                        <p className="m-0 anjoman_medium fs_14 title-text pb-1">
                          {" "}
                          {item.title}{" "}
                        </p>
                        <div className="d-flex ">
                          <div className="three-img-container d-flex justify-content-center  text-center position-relative ">
                            <div className="other-stylist fs_8 d-flex flex-column justify-content-center color_white align-items-center gap-2 position-relative">
                              <p className="m-0 lh_0 ">+</p>
                              <p className="m-0 lh_0">1160</p>
                            </div>
                            <img
                              className="position-relative three-img"
                              src={item.stylist1Src}
                              alt=""
                            />
                            <img
                              className="position-relative three-img"
                              src={item.stylist2Src}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="button py-1 w-100 color_pink d-flex justify-content-center anjoman_regular mt-3 cursor_pointer">
                      رزرو نوبت
                    </div>
                  </div>
                ))}
            </div>
          </div>
{/* handle sub-sub-menu desktop */}


{/* handle submenu for mobile */}
          <div
            className="sub-menu d-flex d-md-none flex-column px-2 scroll-hidden"
            {...events4}
            ref={ref4}
          >
            {data
              .find((item) => item.title === activeMenu)
              ?.subMenu.map((subItem, index) => (
                <div className="accordion-item">
                  <div
                    onClick={() => {
                      setActiveSubMenu(subItem.title);
                      setOpenSub((prev) =>
                        prev === subItem.title ? null : subItem.title
                      );
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

                    <span className={activeSubMenu === subItem.title ? "active" : ""}>
                      <RiArrowDownSLine style={{ fontSize: "24px" }} />
                    </span>
                  </div>
                        {/* content in accordion */}
                  <div
                    className={`accordion-content sub-sub-menu w-100 ${
                      openSub === subItem.title ? "open" : ""
                    }`}
                  >
                    <div className="items-container  mt-3">
                      {subItem.subSubMenu.map((item, index) => (
                        <div
                          key={index}
                          className="item-container px-2 py-2 mb-3 d-flex flex-column"
                        >
                          <div className="top d-flex">
                            <div className="img-container w-50 ">
                              <img src={item.imgSrc} alt="" />
                            </div>
                            <div className="d-flex flex-column justify-content-around align-items-center w-50">
                              <p className="m-0 anjoman_medium fs_14 title-text pb-1">
                                {item.title}
                              </p>
                              <div className="d-flex">
                                <div className="three-img-container d-flex justify-content-center text-center position-relative">
                                  <div className="other-stylist fs_8 d-flex flex-column justify-content-center color_white align-items-center gap-2 position-relative">
                                    <p className="m-0 lh_0">+</p>
                                    <p className="m-0 lh_0">1160</p>
                                  </div>
                                  <img
                                    className="position-relative three-img"
                                    src={item.stylist1Src}
                                    alt=""
                                  />
                                  <img
                                    className="position-relative three-img"
                                    src={item.stylist2Src}
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="button py-1 w-100 color_pink d-flex justify-content-center anjoman_regular mt-3 cursor_pointer">
                            رزرو نوبت
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* content in accordion */}
                </div>
              ))}
          </div>


          {/* handle submenu for mobile */}
        </div>
      </div>
    </ClientWrapper>
  );
}
