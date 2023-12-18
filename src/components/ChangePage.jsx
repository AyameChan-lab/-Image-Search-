import React,{ useState } from 'react'
//  React Icons 
import { FaArrowLeft,FaArrowRight } from 'react-icons/fa';

function ChangePage({setIndex}) {
  const nextPage = ()=>{
   setIndex(e=>e+1);
  }

  const backPage = ()=>{
    setIndex(e=>e-1);
  }
  return (
    <div className="change-page-menu-box">
     <a href="#">
        <FaArrowLeft onClick={backPage} className="change-page-arrow"/>
     </a>
     <a href="#">
        <FaArrowRight onClick={nextPage} className="change-page-arrow"/>
     </a>
    </div>
  )
}

export default ChangePage