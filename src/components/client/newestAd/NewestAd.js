import React from 'react'
import "./style.css"
import Wrapper from './Wrapper'

export default function NewestAd() {
    const menuItems=["همه آگهی ها","استخدام کارآموز","دعوت به همکاری"," استخدام مدل"]
  return (
    <div className='mt-5'>
        <Wrapper menuItems={menuItems}></Wrapper>
    </div>
  )
}
