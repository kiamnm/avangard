import React from "react";
import "./style.css";
import ClientWrapper from "../clientWrapper/ClientWrapper";
import { MdHome } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TbMap2 } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
//test
export default function DesktopNavbar() {
  return (
    <ClientWrapper>
      <div className="desktop-navbar-container d-flex justify-content-between align-items-center ">
        <div className="right d-flex align-items-center">
          <div className="logo-container d-flex align-items-center ps-5 ">
            <img className="logo" src="./images/pink-logo.svg" alt="آوانگارد" />
            <p className="p-0 m-0 fs_18 anjoman_bold">آوانگارد</p>
          </div>
          <ul className="items-container d-flex  align-items-center p-0 m-0">
            <li className="d-flex fs_14 anjoman_regular cursor_pointer active ">
              <span className="p-0 m-0 d-flex align-items-center">
                <MdHome style={{color:"#C12E5C",fontSize:"24px"}} />
              </span>

              <p className="p-0 m-0">خانه</p>
            </li>
            <li className="d-flex  fs_14 anjoman_regular cursor_pointer">
              

              <p className="p-0 m-0">خدمات</p>
              <span className="p-0 m-0 d-flex align-items-center">
                <MdOutlineArrowDropDown style={{color:"#C12E5C",fontSize:"24px"}} />
              </span>
            </li>
            <li className="d-flex  fs_14 anjoman_regular cursor_pointer">
              

              <p className="p-0 m-0">ارتباط با ما</p>
              <span className="p-0 m-0 d-flex align-items-center">
                <MdOutlineArrowDropDown style={{color:"#C12E5C",fontSize:"24px"}} />
              </span>
            </li>
            <li className="d-flex  fs_14 anjoman_regular cursor_pointer">
              <span className="p-0 m-0 d-flex align-items-center">
                <TbMap2 style={{color:"#C12E5C",fontSize:"24px"}} />
                
              </span>

              <p className="p-0 m-0">نقشه</p>
            </li>
          </ul>
        </div>
        <div className="left d-flex align-items-center">
          <div className="login-btn-container d-flex align-items-center px-3 py-2 cursor_pointer">
            <span className="d-flex align-items-center">
<CiUser style={{fontSize:"24px"}} />
            </span>
           
            
            <p className="p-0 m-0 fs_14 anjoman_regular">ثبت نام |ورود </p>
            
          </div>
          <div className="dark-mode-btn-container p-2 cursor_pointer">
            <IoMoonOutline style={{fontSize:"22px"}} />
          </div>
          <div className="notification-btn-container p-2 cursor_pointer">
            <IoIosNotificationsOutline style={{fontSize:"24px"}} />
          </div>
          <div className="cart-btn-container p-2 cursor_pointer">
            <IoBagOutline style={{fontSize:"22px"}} />
          </div>
        </div>
      </div>
    </ClientWrapper>
  );
}
