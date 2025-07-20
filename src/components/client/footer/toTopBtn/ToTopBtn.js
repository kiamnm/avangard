"use client"
import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import "./style.css"
export default function ToTopBtn() {
    const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  return (
    <div onClick={scrollToTop} className="d-flex align-items-center justify-content-between  to-top cursor_pointer">
                      <p className="fs_14 sansMedium color_mode_white m-0 ">
                        بازگشت به بالا
                      </p>
                      <span className="d-flex align-items-center">
                        <IoIosArrowUp style={{ color: "var(--mode-white) " }} />
                      </span>
                    </div>
  )
}
