import React from 'react';

function Sekeleton({ items }) {
  return [...Array(items).keys()].map((res,i)=>(
    <div className="animate-pulse" key={i}>
        <div className="sekeleton-item"></div>
    </div>
  ));
}

export default Sekeleton;