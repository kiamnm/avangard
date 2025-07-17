import React from "react";
import "./style.css";
import TypicalComponentHeaderWithMenu from "../typicalComponentHeaderWithMenu/TypicalComponentHeaderWithMenu";

export default function Wrapper({ menuItems }) {
  return (
    <div>
      <TypicalComponentHeaderWithMenu
        title="محبوب ترین"
        subTitle="محصول خودت را پیدا کن"
        pinkTitle="محصولات"
        href="/"
        menuItems={menuItems}
        defaultMenu="همه محصولات"
      ></TypicalComponentHeaderWithMenu>
    </div>
  );
}
