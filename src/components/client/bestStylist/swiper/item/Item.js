import React from 'react'
import "./style.css"
export default function Item({data}) {
  return (
    <div className='artist-container d-flex flex-column align-items-center cursor_pointer'>
        {data && (
          <>
          <div className='artist-img-container'>
            <img src={data.imgSrc} alt="" />
          </div>
          
<p className='fs_14 m-0 anjoman_medium'>{data.name}</p>
<p className='fs_12 m-0 anjoman_regular'>{data.job}</p> 
          </> 
        )}

    </div>
  )
}
