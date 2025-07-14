import React from "react";
import "./style.css";
import ClientWrapper from "../clientWrapper/ClientWrapper";
import Header from "./header/Header";
import AiConsultant from "../aiConsultant/AiConsultant";

export default function PortfolioGallery() {
  return (
    <div className=" mt-5 portfolio-gallery-container">
      <ClientWrapper>
        <Header></Header>
        <div className=" d-flex flex-column flex-md-row content">
          <div className="right d-flex flex-column justify-content-center align-items-center">
            <AiConsultant></AiConsultant>
          </div>
          <div className="left d-flex">
            <div className="major d-flex flex-column">
              <div className="top">
                <img className="main" src="./images/stylist1.svg" alt="" />
                <div className="layout d-flex flex-column justify-content-center">
                    <p className="sansBlack fs_14 text_white m-0">میکاپ اسموتی</p>
                    <p className="sansMediumNum fs_12 text_white m-0">2 ساعت پیش</p>
                </div>
              </div>
              <div className="bottom d-flex">
                <div className="major-bottom ">
                  <img className="main" src="./images/stylist1.svg" alt="" />
                  <div className="layout"></div>
                </div>
                <div className="major-bottom ">
                  <img className="main" src="./images/stylist1.svg" alt="" />
                  <div className="layout"></div>
                </div>
              </div>
            </div>
            <div className="minor d-flex flex-column">
              <div className="near-major d-flex flex-column ">
                <div className="minor-left  ">
                  <img className="main" src="./images/stylist1.svg" alt="" />
                  <div className="layout"></div>
                </div>
                <div className="minor-left  ">
                  <img className="main" src="./images/stylist1.svg" alt="" />
                  <div className="layout"></div>
                </div>
              </div>

              <div className="minor-left down-near-major ">
                <img className="main" src="./images/stylist1.svg" alt="" />
                <div className="layout"></div>
              </div>
            </div>
          </div>
        </div>
      </ClientWrapper>
    </div>
  );
}
