import React from "react";
import "./style.css";
import { CgClose } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { GoGoal } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";
import { LuTicketPercent } from "react-icons/lu";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { RiSpeakAiLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { LiaHandshake } from "react-icons/lia";
import { GoQuestion } from "react-icons/go";
import { GoLaw } from "react-icons/go";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { RxExit } from "react-icons/rx";

export default function MobileSidebarMenu({
  isSideMenuOpen,
  setIsSideMenuOpen,
}) {
  return (
    <div
      className={`mobile-sidebar-menu-container bg_mode_semiWhite d-flex flex-column gap-3 p-3 ${
        isSideMenuOpen ? "open" : "close"
      }`}
    >
      <div className="header d-flex justify-content-between align-items-center">
        <div className="right d-flex align-ietms-center gap-2">
          <span className="d-flex align-items-center bg_mode_white rounded-circle p-2">
            <MdEmail style={{fontSize:"24px"}} />
          </span>
          <span className="d-flex align-items-center bg_mode_white rounded-circle p-2">
            <FaRegHeart style={{fontSize:"24px"}} />
          </span>
          <span className="d-flex align-items-center bg_mode_white rounded-circle p-2">
            <IoIosNotificationsOutline style={{fontSize:"26px"}} />
          </span>
        </div>
        <div onClick={()=>{setIsSideMenuOpen(false)}} className="left ">
          <span className="d-flex align-items-center bg_mode_white rounded-circle p-2">
            <IoClose style={{fontSize:"26px"}} />
          </span>
        </div>
      </div>
      <div className="user-info d-flex justify-content-between gap-2">
        <div className="right d-flex bg_mode_white py-2 px-2 rounded-3 gap-2 col-8">
          <div className="img-container">
            <img className="user rounded-circle" src="./images/femail-model3.jpg" alt="" />
          </div>
          <div className="info-container d-flex flex-column justify-content-between align-items-start">
            <p className="m-0 sansBold color_mode_black ">نرجس برادران</p>
            <p className="m-0 sansSemiBoldNum color_mode_black text-decoration fs_14">09372959779</p>
            <p className="m-0 sansSemiBoldNum color_pink_light">کاربر ساده</p>
          </div>
        </div>
        <div className="left d-flex flex-column justify-content-between col-4">
          <div className="d-flex align-items-center gap-1 bg_mode_white px-2 py-2 rounded-2">
            <span className="d-flex align-items-center">
              <IoSettingsSharp style={{fontSize:"20px"}} />
            </span>
            <p className="m-0 sansSemiBold fs_14 color_mode_black">تنضیمات</p>
          </div>
          <div className="d-flex align-items-center gap-1 bg_mode_white px-2 py-2 rounded-2">
            <span className="d-flex align-items-center">
              <HiUsers style={{fontSize:"20px"}} />
            </span>
            <p className="m-0 sansSemiBold fs_14 color_mode_black">دوستان</p>
          </div>
        </div>
      </div>
      <div className="reserve-container  bg_mode_white rounded-3 p-2 ">
        <div className="detail-container d-flex justify-content-between align-items-center">
          <div className="right d-flex gap-2 ">
            <div className="icon-container">
              <span className="d-flex align-items-center bg_mode_pink_lightest rounded-circle p-2">
                <GoGoal style={{fontSize:"30px",color:"var(--pink-dark)"}} />
              </span>
            </div>
            <div className="text-container d-flex flex-column justify-content-between">
              <p className="m-0 color_mode_black sansSemiBold">رزرو اولین نوبت</p>
              <p className="m-0 color_mode_black fs_14 sansMediumNum">امتیاز شما : 1250</p>
            </div>
          </div>
          <div className="left color_white sansSemiBold bg_pink_dark px-2 py-2 rounded-2">ماموریت‌های من</div>
        </div>
        <div className="progress-container d-flex justify-content-between align-items-center mt-3">
            <div className="progress">
                <div className="progress-bar"></div>
            </div>
            <span className="fs_14 sansMediumNum color_mode_black">3/5</span>
        </div>
      </div>
      <div className="three-box-container d-flex justify-content-between gap-3 ">
        <div className="d-flex justify-cotent-between align-items-center flex-column bg_white rounded-3 flex-grow-1 py-4 gap-1">
          <span className="d-flex align-items-center">
            <IoWalletOutline style={{fontSize:"28px"}} />
          </span>
          <p className="m-0 sansSemiBold color_mode_black" >کیف پول</p>
        </div>
        <div className="d-flex justify-cotent-between align-items-center flex-column bg_white rounded-3 flex-grow-1 py-4 gap-1">
          <span className="d-flex align-items-center">
            <PiHandbag style={{fontSize:"28px"}} />
          </span>
          <p className="m-0 sansSemiBold color_mode_black">سبد خرید</p>
        </div>
        <div className="d-flex justify-cotent-between align-items-center flex-column bg_white rounded-3  flex-grow-1 py-4 gap-1">
          <span className="d-flex align-items-center">
            <LuTicketPercent style={{fontSize:"28px"}} />
          </span>
          <p className="m-0 sansSemiBold color_mode_black">تخفیف‌ها</p>
        </div>
      </div>
      <div className="three-accardion-container bg_mode_white rounded-3 px-2">
        <div className="d-flex align-items-center justify-content-between  py-2 border-accardion">
          <div className="right d-flex align-items-center gap-2">
            <span className="d-flex align-items-center">
              <FaRegCalendarCheck style={{fontSize:"22px"}} />
            </span>
            <p className="m-0 color_mode_black sansSemiBold">رزرو های من</p>
          </div>
          <div className="left">
            <span className="d-flex align-items-center">
              <MdOutlineKeyboardArrowLeft style={{fontSize:"28px"}} />
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between  py-2 border-accardion" >
          <div className="right d-flex align-items-center gap-2">
            <span className="d-flex align-items-center">
              <GiGraduateCap style={{fontSize:"24px"}} />
            </span>
            <p className="m-0 color_mode_black sansSemiBold">دوره های من</p>
          </div>
          <div className="left">
            <span className="d-flex align-items-center">
              <MdOutlineKeyboardArrowLeft style={{fontSize:"28px"}} />
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between  py-2 ">
          <div className="right d-flex align-items-center gap-2">
            <span className="d-flex align-items-center">
              <RiSpeakAiLine style={{fontSize:"22px"}} />
            </span>
            <p className="m-0 color_mode_black sansSemiBold">مشاوره های من</p>
          </div>
          <div className="left">
            <span className="d-flex align-items-center">
              <MdOutlineKeyboardArrowLeft style={{fontSize:"28px"}} />
            </span>
          </div>
        </div>
      
      </div>
      <div className="six-box-container d-flex flex-column gap-2">
        <div className="top d-flex justify-content-between gap-2">
            <div className="d-flex align-items-center flex-column bg_mode_white each-six py-4 rounded-2">
          <span className="d-flex align-items-center">
            <MdSupportAgent style={{fontSize:"28px"}} />
          </span>
          <p className="m-0 color_mode_black sansSemiBold">پشتیبانی</p>
        </div>
        <div className="d-flex align-items-center flex-column bg_mode_white each-six py-4 rounded-2">
          <span className="d-flex align-items-center">
            <MdOutlineStickyNote2 style={{fontSize:"28px"}} />
          </span>
          <p className="m-0 color_mode_black sansSemiBold">درباره ما</p>
        </div>
        <div className="d-flex align-items-center flex-column bg_mode_white each-six py-4 rounded-2">
          <span className="d-flex align-items-center">
            <LiaHandshake style={{fontSize:"28px"}} />
          </span>
          <p className="m-0 color_mode_black sansSemiBold">همکاری با ما</p>
        </div>
        </div>
        <div className="bottom d-flex justify-content-between gap-2">
            <div className="d-flex align-items-center flex-column bg_mode_white each-six py-4 rounded-2">
          <span className="d-flex align-items-center">
            <GoQuestion style={{fontSize:"28px"}} />
          </span>
          <p className="m-0 color_mode_black sansSemiBold">سوالات متداول</p>
        </div>
        <div className="d-flex align-items-center flex-column bg_mode_white each-six py-4 rounded-2">
          <span className="d-flex align-items-center">
            <GoLaw style={{fontSize:"28px"}} />
          </span>
          <p className="m-0 color_mode_black sansSemiBold">قوانین</p>
        </div>
        <div className="d-flex align-items-center flex-column bg_mode_white each-six py-4 rounded-2">
          <span className="d-flex align-items-center">
            <HiOutlineUserPlus style={{fontSize:"28px"}} />
          </span>
          <p className="m-0 color_mode_black sansSemiBold">دعوت دوستان</p>
        </div>
        </div>
      </div>
      <div className="exit d-flex justify-content-center gap-2 bg_mode_white py-3 rounded-3">
        <span className="d-flex align-items-center">
          <RxExit style={{color:"var(--pink-darkest)",fontSize:"24px"}} />
        </span>
        <p className="m-0 color_pink_darkest sansSemiBold">خروج از حساب</p>
      </div>
    </div>
  );
}
