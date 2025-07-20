import React from 'react'
import "./style.css"
import TypicalComponentHeaderWithMenu from '../typicalComponentHeaderWithMenu/TypicalComponentHeaderWithMenu'
import ClientWrapper from '../clientWrapper/ClientWrapper'
import SwiperComponent from "./swiperComponent/SwiperComponent";

export default function Wrapper({ menuItems }) {
  return (
    <div className='popular-course-wrapper'>
        <TypicalComponentHeaderWithMenu title="محبوب‌ترین"
                subTitle="محصول خودت را پیدا کن"
                pinkTitle="دوره ها"
                href="/"
                menuItems={menuItems}
                defaultMenu="همه دوره ها"
                ></TypicalComponentHeaderWithMenu>
                <div className='mt-5'>
                  <ClientWrapper>
                    <SwiperComponent></SwiperComponent>
                  </ClientWrapper>
                </div>
    </div>
  )
}
