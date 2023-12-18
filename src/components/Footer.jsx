import React from 'react'
// React Icons
import { GiBranchArrow,GiSpiralArrow } from 'react-icons/gi';

function Footer() {
  return (
    <div className="footer">
        <GiSpiralArrow className="arrow-footer"/>
        <h1 className="inline-block">นาย ยุทธวีร์ ประภัศร เลขที่ 2 ม.5/8</h1>
        <GiBranchArrow className="arrow-footer"/>
    </div>
  )
}

export default Footer