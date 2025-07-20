import React from "react";
import "./style.css";
import ClientWrapper from "../clientWrapper/ClientWrapper";
import { FaInstagram } from "react-icons/fa";
import { PiWhatsappLogo } from "react-icons/pi";
import { SlSocialYoutube } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";
import ToTopBtn from "./toTopBtn/ToTopBtn";
import Link from "next/link";

export default function Footer() {
  
  return (
    <div className="bg_mode_black">
      <ClientWrapper>
        <div className="main-footer-container ">
          <div className="row-container d-flex flex-column-reverse flex-xl-row justify-content-between">
            <div className="about-social-container d-flex flex-column mt-5 mt-xl-0">
              <h2 className="fs_18 sansExtraBold color_mode_white ">
                درباره آوانگارد
              </h2>
              <p className="fs_14 sansMedium color_mode_white text_justify  ">
                در پلتفرم آوانگارد، مجموعه‌ای بی‌نظیر از برترین استایلیست ها و
                سالن‌های زیبایی برای شما فراهم آورده‌ایم. ما باور داریم شما لایق
                بهترین‌ها هستید. و با پلتفرم ما، تجربه‌ای حرفه‌ای و سرشار از
                آرامش را در معتبرترین مراکز زیبایی داشته باشید و حس خوب و اعتماد
                به نفس را به خود هدیه دهید. در آوانگارد، زیبایی شما با اطمینان و
                به راحتی در دسترس است.
              </p>
              <div className="social-container d-flex justify-content-center justify-content-xl-start  gap_16">
                <span className="d-flex align-item-center bg_mode_semiBlack social cursor_pointer">
                  <FaInstagram
                    style={{ color: "var(--mode-white)", fontSize: "24px" }}
                  />
                </span>
                <span className="d-flex align-item-center bg_mode_semiBlack social cursor_pointer">
                  <PiWhatsappLogo
                    style={{ color: "var(--mode-white)", fontSize: "26px" }}
                  />
                </span>
                <span className="d-flex align-item-center bg_mode_semiBlack social cursor_pointer">
                  <SlSocialYoutube
                    style={{ color: "var(--mode-white)", fontSize: "26px" }}
                  />
                </span>
              </div>
            </div>
            <div className="two-menu-container d-flex justify-content-center gap-5">
              <div className="quick-access-container d-flex flex-column gap_16">
                <p className="fs_16 color_mode_white sansBold m-0">
                  دسترسی سریع
                </p>
                <Link
                  href="#"
                  className="color_mode_white text-decoration-none fs_14 sansSemiBold"
                >
                  صفحه اصلی
                </Link>
                <Link
                  href="#"
                  className="color_mode_white text-decoration-none fs_14 sansSemiBold"
                >
                  رزرو نوبت
                </Link>
                <Link
                  href="#"
                  className="color_mode_white text-decoration-none fs_14 sansSemiBold"
                >
                  مشاوره آنلاین
                </Link>
                <Link
                  href="#"
                  className="color_mode_white text-decoration-none fs_14 sansSemiBold"
                >
                  فروشگاه آنلاین
                </Link>
                <Link
                  href="#"
                  className="color_mode_white text-decoration-none fs_14 sansSemiBold"
                >
                  آموزشگاه آنلاین
                </Link>
              </div>
              <div className="contact-us-menu-container d-flex flex-column gap_16">
                <p className="fs_16 color_mode_white sansBold m-0">
                  ارتباط با ما
                </p>
                <Link
                  href="#"
                  className="color_mode_white text-decoration-none fs_14 sansSemiBold"
                >
                  درباره ما
                </Link>
                <Link
                  href="#"
                  className="color_mode_white text-decoration-none fs_14 sansSemiBold"
                >
                  سوالات متداول
                </Link>
                <Link
                  href="#"
                  className="color_mode_white text-decoration-none fs_14 sansSemiBold"
                >
                  پشتیبانی
                </Link>
                <Link
                  href="#"
                  className="color_mode_white text-decoration-none fs_14 sansSemiBold"
                >
                  همکاری با ما
                </Link>
                <Link
                  href="#"
                  className="color_mode_white text-decoration-none fs_14 sansSemiBold"
                >
                  انتقادات و پیشنهادات
                </Link>
              </div>
            </div>
            <div className="enamad-btn-container d-flex flex-column-reverse flex-xl-column mb-4 mb-xl-0">
              <div className="enamds-container d-flex justify-content-between justify-content-xl-start  gap_16">
                <div className="bg_mode_semiBlack cursor_pointer">
                  <img src="./images/enamad.svg" alt="" />
                </div>
                <div className="bg_mode_semiBlack cursor_pointer">
                  <img src="./images/enamad.svg" alt="" />
                </div>
                <div className="bg_mode_semiBlack cursor_pointer">
                  <img src="./images/enamad.svg" alt="" />
                </div>
              </div>
              <div className="button d-flex  justify-content-center justify-content-xl-end mb-4 mb-xl-0">
                <ToTopBtn></ToTopBtn>
              </div>
            </div>
          </div>
          <div className="bar-container bg_mode_semiBlack d-flex flex-column flex-xl-row  align-items-center justify-content-between">
            <div className="right d-flex gap_16 align-items-center">
              <img src="./images/logo-footer.svg" className="logo" alt="" />
              <p className="fs_16 sansExtraBold color_mode_white m-0">
                آوانگارد
              </p>
            </div>
            <div className="left bg_mode_black d-flex align-items-center gap_16">
              <p className="fs_14 sansSemiBold color_mode_white m-0">
                از جدیدترین تخفیف ها باخبر شوید
              </p>
              <div className="button bg_pink_light sansBold fs_14 color_mode_white cursor_pointer ">
                ثبت
              </div>
            </div>
          </div>
        </div>
      </ClientWrapper>
      <div className="w-100">
        <img src="./images/last.svg" alt="" className="last-img" />
      </div>
    </div>
  );
}
