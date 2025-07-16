import React from "react";
import "./style.css";
import TypicalComponentHeader from "../client/typicatComponentHeader/TypicalComponentHeader";
import ClientWrapper from "../client/clientWrapper/ClientWrapper";

export default function Academy() {
  return (
    <div className="mt-5">
      <ClientWrapper>
        <TypicalComponentHeader
          title="آکادمی"
          pinkTitle="آوانگارد"
          subTitle="بهترین مطالب آموزشی "
          href="#"
        ></TypicalComponentHeader>
        <div className="academy-container d-flex flex-column flex-md-row mt-3">
          <div className="three-img d-flex flex-column">
            <div>
              <img src="./images/femail-model3.jpg" alt="" />
            </div>
            <div>
              <img src="./images/femail-model3.jpg" alt="" />
            </div>
            <div>
              <img src="./images/femail-model3.jpg" alt="" />
            </div>
          </div>
          <div className="main-img">
            <img src="./images/femail-model3.jpg" alt="" />
          </div>
        </div>
      </ClientWrapper>
    </div>
  );
}
