import React from "react";
import { Link } from "react-router-dom";

const Editmodal = (props) => {    //pros:抓父層的屬性值
    return (props.trigger)?(      //三元判斷式 => ?:""
        <div style={{position:"fixed",top:"50%",backgroundColor:"white", height:"10%", width:"10%"}}>   
        {/* 抓高跟寬去置中 */}
        更改姓名<input type="text" /> <br />
        更改email<input type="email" />
        <button onClick={() => props.setisShow(false)}>更改</button>
        <span onClick={() => props.setisShow(false)} style={{position:"fixed",cursor:"pointer",top:"50%"}}>x</span>
        </div>
        
        
    ): "" ;

}
export default Editmodal;