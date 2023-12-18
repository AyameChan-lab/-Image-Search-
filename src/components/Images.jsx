import React,{ useContext } from "react";
import { GlobalState } from "../App";
// Component
import Img from './Img';
import Sekeleton from './Sekeleton';
import NotFound from './NotFound';

function Images({ searchthe }) {
    const {response,loading} = useContext(GlobalState);
  return (
    <div className="image-box">
        <h1 className="text-center">
            แสดงผลลัพธ์การค้นหาของ 
            <span className="display-text-search">"{searchthe}"</span>    
        </h1>
        {/* Display Images */}
        {/* Todo: Fix Gird in sm min width bearkpoint */}
        <div className="display-main">
           {loading ? <Sekeleton items={response.length}/> : response.length < 2 ? <NotFound/>:response.map((res,i)=>(
                <Img res={res} key={i}/>
            ))}
        </div>
    </div>
  );
}


  



export default Images;