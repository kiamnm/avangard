import React from 'react'
import "./style.css"
import Wrapper from './Wrapper'


export default function PopularProduct() {
  const menuItems=["همه محصولات","مراقبت مو ","آرایش صورت","درمان جوش"]
  return (
    <div className='mt-5'>
        <Wrapper menuItems={menuItems}></Wrapper>
    </div>
  )
}
