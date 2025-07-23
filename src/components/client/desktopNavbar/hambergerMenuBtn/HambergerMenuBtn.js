"use client"
import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import "./style.css"
import MobileSidebarMenu from '../../mobileSidebarMenu/MobileSidebarMenu';

export default function HambergerMenuBtn() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  return (
    <>
      <div
        onClick={() => {
          setIsSideMenuOpen(true);
        }}
        className="cart-btn-container p-2 cursor_pointer d-flex"
      >
        <LuMenu style={{ fontSize: "22px" }} />
      </div>

      {/* منو باید خارج از دکمه باشه */}
      <MobileSidebarMenu
        isSideMenuOpen={isSideMenuOpen}
        setIsSideMenuOpen={setIsSideMenuOpen}
      />
    </>
  );
}
