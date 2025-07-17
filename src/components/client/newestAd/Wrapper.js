import React from "react";
import "./style.css";
import TypicalComponentHeaderWithMenu from "../typicalComponentHeaderWithMenu/TypicalComponentHeaderWithMenu";

export default function Wrapper({ menuItems }) {
  return (
    <div>
      <TypicalComponentHeaderWithMenu
        title="جدیدترین"
        subTitle="با همکارانت در ارتباط باش"
        pinkTitle="آگهی ها"
        href="/"
        menuItems={menuItems}
        defaultMenu="همه آگهی ها"
      ></TypicalComponentHeaderWithMenu>
    </div>
  );
}
