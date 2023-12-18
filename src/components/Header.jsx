import React from 'react';
// React Icons 
import { GiChargedArrow } from 'react-icons/gi';

function Header({ children }) {
  return (
    <div className="header-style">
         <div className="logo-box-style ">
            <h1 className="hero-text">ค้นหารูปภาพ</h1>
            <GiChargedArrow className="arrow-hero"/>
         </div>
         {children}
    </div>
  )
}

export default Header