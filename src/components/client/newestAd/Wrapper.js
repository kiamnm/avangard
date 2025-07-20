import React from "react";
import "./style.css";
import TypicalComponentHeaderWithMenu from "../typicalComponentHeaderWithMenu/TypicalComponentHeaderWithMenu";
import Item from "./item/Item";
import ClientWrapper from "../clientWrapper/ClientWrapper";

export default function Wrapper({ menuItems }) {
  return (
    <div className="newest-ad-wrapper mt-5">
      <TypicalComponentHeaderWithMenu
        title="جدیدترین"
        subTitle="با همکارانت در ارتباط باش"
        pinkTitle="آگهی ها"
        href="/"
        menuItems={menuItems}
        defaultMenu="همه آگهی ها"
      ></TypicalComponentHeaderWithMenu>
      <ClientWrapper>
       <div className=" w-100 ">
  <div className="row  g-0 ">
    <div className="col-12 col-md-6 col-xl-4 ">
      <Item />
    </div>
    <div className="col-12 col-md-6 col-xl-4 ">
      <Item />
    </div>
    <div className="col-12 col-md-6 col-xl-4 ">
      <Item />
    </div>
    <div className="col-12 col-md-6 col-xl-4 ">
      <Item />
    </div>
    <div className="col-12 col-md-6 col-xl-4 ">
      <Item />
    </div>
    <div className="col-12 col-md-6 col-xl-4 ">
      <Item />
    </div>
  </div>
</div>
      </ClientWrapper>
      
    </div>
  );
}
