"use client"
import React from "react";
import { usePathname } from 'next/navigation'
import "./style.css";
import ClientWrapper from "../clientWrapper/ClientWrapper";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";

export default function DownMenu() {
    const pathname = usePathname();
  return (
    <div className="down-menu-container bg_mode_semiWhite position-fixed bottom-0 start-0 end-0 d-flex d-lg-none align-items-center ">
      <ClientWrapper>
        <div className="d-flex justify-content-between">
          <Link className={`text-decoration-none p-2 d-flex align-items-center gap-1 ${pathname==="/"?"bg_mode_pink_lightest active":""}`} href="#">
            <AiFillHome
              style={{ color: "var(--mode-semiBlack)", fontSize: "26px" }}
            />
            {pathname === "/" && (
                <span className="color_pink_dark sansMedium fs_16 d-flex align-items-center">خانه</span>
            )}
            
          </Link>
          <Link className={`text-decoration-none p-2 d-flex align-items-center gap-1 ${pathname==="/map"?"bg_mode_pink_lightest active":""}`} href="#">
            <FaMapMarkedAlt
              style={{ color: "var(--mode-semiBlack)", fontSize: "26px" }}
            />
              {pathname === "/map" && (
                <span className="color_pink_dark sansMedium fs_16 d-flex align-items-center">نقشه</span>
            )}
          </Link>
          <Link className={`text-decoration-none p-2 d-flex align-items-center gap-1 ${pathname==="/cart"?"bg_mode_pink_lightest active":""}`} href="#">
            <FaBagShopping
              style={{ color: "var(--mode-semiBlack)", fontSize: "26px" }}
            />
              {pathname === "/cart" && (
                <span className="color_pink_dark sansMedium fs_16 d-flex align-items-center">سبد خرید</span>
            )}
          </Link>
          <Link className={`text-decoration-none p-2 d-flex align-items-center gap-1 ${pathname==="/reserve"?"bg_mode_pink_lightest active":""}`} href="#">
            <FaCalendar
              style={{ color: "var(--mode-semiBlack)", fontSize: "26px" }}
            />
              {pathname === "/reserve" && (
                <span className="color_pink_dark sansMedium fs_16 d-flex align-items-center">رزرو نوبت</span>
            )}
          </Link>
        </div>
      </ClientWrapper>
    </div>
  );
}
