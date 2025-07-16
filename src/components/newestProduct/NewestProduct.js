import React from "react";
import "./style.css";
import TypicalComponentHeader from "../client/typicatComponentHeader/TypicalComponentHeader";
import ClientWrapper from "../client/clientWrapper/ClientWrapper";

export default function NewestProduct() {
  return (
    <div className="mt-5">
      <ClientWrapper>
        <TypicalComponentHeader
          title="جدیدترین"
          pinkTitle="محصولات"
          subTitle="محصول خودت را پیدا کن"
          href="#"
        ></TypicalComponentHeader>{" "}
        <div className="newest-product-container ">
          <img
            src="./images/productBanner1.png"
            alt=""
            className="main-banner"
          />
          <div className="d-flex gap-16 flex-column flex-md-row">
            <div>
              <img src="./images/productBanner2.png" alt="" />
            </div>
            <div>
              <img src="./images/productBanner3.png" alt="" />
            </div>
          </div>
        </div>
      </ClientWrapper>
    </div>
  );
}
