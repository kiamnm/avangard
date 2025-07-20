import React from "react";
import "./style.css";
import TypicalComponentHeaderWithMenu from "../typicalComponentHeaderWithMenu/TypicalComponentHeaderWithMenu";
import SwiperComponent from "./swiperComponent/SwiperComponent";
import ClientWrapper from "../clientWrapper/ClientWrapper";

export default function Wrapper({ menuItems }) {
  return (
    <div className="popular-product-wrapper">
      <TypicalComponentHeaderWithMenu
        title="محبوب ترین"
        subTitle="محصول خودت را پیدا کن"
        pinkTitle="محصولات"
        href="/"
        menuItems={menuItems}
        defaultMenu="همه محصولات"
      ></TypicalComponentHeaderWithMenu>
      <ClientWrapper>
        <div className="mt-5">
          <SwiperComponent></SwiperComponent>
        </div>
        
      </ClientWrapper>
    </div>
  );
}
