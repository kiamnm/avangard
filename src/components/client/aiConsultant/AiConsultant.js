import React from "react";
import "./style.css";
import Link from "next/link";

export default function AiConsultant() {
  return (
    <div className="ai-consultant-container d-flex flex-column justify-content-center align-items-center">
      <p className="sansExtraBold fs_18 m-0 text_white">مشاوره هوشمند زیبایی</p>
      <p className="sansRegular fs_16  text_white">بهترین مدل بر اساس آنالیز چهره شما</p>
      <img src="./images/analys-face.svg" alt="" />
      <p className="sansBold fs_16  text_white">تحلیل هوشمند چهره</p>
      <p className="sansRegular fs_14 m-0 text_white text-center">
        تصویر خود را آپلود کنید تا هوش مصنوعی آوانگارد بهترین مدل‌ها را پیشنهاد
        دهد.
      </p>
      <div className="button-container d-flex">
        <Link className="button text-decoration-none d-flex justify-content-center align-items-center fs_14 sansBold text_white bg_accent_1" href="#">
          {" "}
          <span className="d-flex justify-cntent-center align-items-center">
            <img src="./images/upload-icon.svg" alt="" />
          </span>
          آپلود تصویر
        </Link>
        <Link className="button text-decoration-none d-flex justify-content-center align-items-center fs_14 sansBold text_white bg_primary" href="#">
          {" "}
          <span className="d-flex justify-cntent-center align-items-center">
            <img src="./images/chat-icon.svg" alt="" />
          </span>{" "}
          گفت و گو
        </Link>
      </div>
    </div>
  );
}
