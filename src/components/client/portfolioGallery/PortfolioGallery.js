import React from "react";
import "./style.css";
import ClientWrapper from "../clientWrapper/ClientWrapper";
import TypicalComponentHeader from "../typicatComponentHeader/TypicalComponentHeader";
import AiConsultant from "../aiConsultant/AiConsultant";
import { FaHeart } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";

export default function PortfolioGallery() {
  return (
    <div className=" mt-5 portfolio-gallery-container">
      <ClientWrapper>
        <TypicalComponentHeader title="گالری" pinkTitle="نمونه کارها" subTitle="بهترین مدل خود را انتخاب کنید" href="#" ></TypicalComponentHeader>
        <div className=" d-flex flex-column-reverse flex-md-row content">
          <div className="right d-flex flex-column justify-content-center align-items-center">
            <AiConsultant></AiConsultant>
          </div>
          <div className="left d-flex">
            <div className="major d-flex flex-column">
              <div className="top">
                <img className="main" src="./images/stylist1.svg" alt="" />
                <div className="main-layout d-flex flex-column justify-content-end ">
                  <div className="main-content  ">
                    <p className="m-0 color_white fs_18 sansMedium ">مدل کوتاهی پیکسلی ترند 2024</p>
                    <div className="tag-time-container d-flex justify-content-between align-items-center">
                      <div className="tag-container d-flex gap_8">
                        <span className="color_white fs_10 sansRegular ">#پیکسلی</span>
                        <span className="color_white fs_10 sansRegular ">#کوتاهی مو</span>
                      </div>
                      <div className="time-container color_white fs_12 sansRegular "> 5 دقیقه پیش</div>
                    </div>
                    <div className="footer d-flex justify-content-between align-items-center">
                      <div className="img-name-container d-flex gap_8">
                        <div className="img-container">
                           <img src="./images/stylist1.svg" alt="" />
                        </div>
                         
                          <div className="name-container d-flex flex-column justify-content-around">
                            <p className="m-0 fs_12 color_white sansMedium">الناز رضایی</p>
                            <p className="m-0 fs_12 color_white sansRegular">متخصص رنگ مو</p>
                          </div>
                        
                      </div>
                      <div className="like-comment-container d-flex gap-2">
                        <div className="like-container d-flex align-items-center gap-1">
                          <span className="d-flex align-items-center"><FaHeart style={{color:"var(--semiWhite)"}} /></span>
                          <p className="fs_12 color_white sansRegularNum m-0 d-flex align-items-center lh_0">1.2k</p>
                        </div>
                        <div className="comment-container d-flex align-items-center gap-1">
                          <span className="d-flex align-items-center"><FaComment style={{color:"var(--semiWhite)"}} /></span>
                          <p className="fs_12 color_white sansRegularNum m-0 d-flex align-items-center lh_0">45</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom d-flex">
                <div className="major-bottom ">
                  <img className="main" src="./images/stylist1.svg" alt="" />
                  <div className="layout d-flex flex-column justify-content-end">
                    <p className="sansBlack fs_14 color_white m-0">
                      میکاپ اسموتی
                    </p>
                    <p className="sansRegular fs_12 color_semiWhite m-0">
                      20 ساعت پیش
                    </p>
                  </div>
                </div>
                <div className="major-bottom ">
                  <img className="main" src="./images/stylist1.svg" alt="" />
                  <div className="layout d-flex flex-column justify-content-end">
                    <p className="sansBlack fs_14 color_white m-0">
                      میکاپ اسموتی
                    </p>
                    <p className="sansRegular fs_12 color_white m-0">
                      2 ساعت پیش
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="minor d-flex flex-column">
              <div className="near-major d-flex flex-column ">
                <div className="minor-left  ">
                  <img className="main" src="./images/stylist1.svg" alt="" />
                  <div className="layout d-flex flex-column justify-content-end">
                    <p className="sansBlack fs_14 color_white m-0">
                      میکاپ اسموتی
                    </p>
                    <p className="sansRegular fs_12 color_white m-0">
                      2 ساعت پیش
                    </p>
                  </div>
                </div>
                <div className="minor-left  ">
                  <img className="main" src="./images/stylist1.svg" alt="" />
                  <div className="layout d-flex flex-column justify-content-end">
                    <p className="sansBlack fs_14 color_white m-0">
                      میکاپ اسموتی
                    </p>
                    <p className="sansRegular fs_12 color_white m-0">
                      2 ساعت پیش
                    </p>
                  </div>
                </div>
              </div>

              <div className="minor-left down-near-major ">
                <img className="main" src="./images/stylist1.svg" alt="" />
                <div className="layout d-flex flex-column justify-content-end">
                  <p className="sansBlack fs_14 color_white m-0">
                    میکاپ اسموتی
                  </p>
                  <p className="sansRegular fs_12 color_white m-0">
                    2 ساعت پیش
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClientWrapper>
    </div>
  );
}
