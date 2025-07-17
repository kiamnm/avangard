import React from 'react'
import "./style.css"
import TypicalComponentHeaderWithMenu from '../typicalComponentHeaderWithMenu/TypicalComponentHeaderWithMenu'
export default function Wrapper({ menuItems }) {
  return (
    <div>
        <TypicalComponentHeaderWithMenu title="محبوب‌ترین"
                subTitle="محصول خودت را پیدا کن"
                pinkTitle="دوره ها"
                href="/"
                menuItems={menuItems}
                defaultMenu="همه دوره ها"
                ></TypicalComponentHeaderWithMenu>
                
    </div>
  )
}
