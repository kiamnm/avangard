"use client"
import React,{useState} from 'react'
import "./style.css"
import { IoIosClose } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function page() {
    const [inputValue,setInputValue]=useState("")
    const [formState,setFormState]=useState("phone")
    const handleChangeFormState=()=>{
        if(formState==="phone"){
setFormState("email")
        }else{
setFormState("phone")
        }
    }
  return (
    <div className='auth-page-container  d-flex justify-content-center align-items-center  bg_mode_semiWhite'>
        <div className="content-container d-flex flex-column justify-content-center align-items-center ">
            <div className="logo-brand-container d-flex justify-content-center align-items-center pb-4">
                    <div className="logo-container">
                            <img src="./images/pink-logo.svg" alt="" />
                    </div>
                    <div className="brand-container">
                            <h2  className='fs_20 sansExtraBold color_mode_black'>آوانگارد</h2>
                    </div>
            </div>
            <div className="form-container bg_mode_white px-3 py-4 ">
                <div className="title-close-container d-flex justify-content-between">
                    <div></div>
                    <div className="title color_mode_black sansBold fs_16">{formState==="phone"?"ورود با موبایل":"ورود با ایمیل"}</div>
                    <span className="close  rounded-circle bg_mode_semiWhite cursor_pointer"><IoIosClose style={{fontSize:"36px"}} /></span>
                </div>
                <p className='sansBold fs_12 color_mode_black text-center mt-3'>برای ادامه لطفا  {formState==="phone"?"شماره موبایل":"آدرس ایمیل"} خود را وارد کنید.</p>
                <div className="input-container position-relative d-flex align-items-center">
                    <input className='bg_mode_semiWhite px-2 rounded-3 w-100 fs_14 sansMedium' type="text" placeholder={`${formState==="phone"?"شماره موبایل":"آدرس ایمیل"}`} />
                    <div className='position-absolute '>
                        {formState==="phone"?(
<FaPhoneAlt style={{fontSize:"20px"}} /> 
                        ):(
<MdEmail style={{fontSize:"20px"}} />
                        )}
                       
                       
                    </div>
                    
                </div>
                <p className='err fs_12 sansMedium color_failure_text mt-2 mb-0'>* لطفا شماره موبایل را وارد کنید</p>
                
                <button className='bg_pink_light color_white sansBold fs_16 w-100 py-2 rounded-2'>ادامه</button>
                <div className="footer-container d-flex justify-content-between mt-4">
                    <p onClick={handleChangeFormState} className='m-0 color_darkBrown fs_12 sansSemiBold cursor_pointer'>{formState==="phone"?"ورود با ایمیل":"ورود با شماره"}</p>
                    <p className='m-0 color_darkBrown fs_12 sansSemiBold'>حریم خصوصی</p>
                </div>
            </div>
            <p className='fs_12 sansSemiBold color_mode_black text-center mt-4'>با عضویت در پلترفم تمامی <span className='color_pink_light text-decoration-underline cursor_pointer'>قوانین و شرایط </span>استفاده از خدمات آوانگارد را پذیرفته‌اید.</p>
        </div>
    </div>
  )
}
