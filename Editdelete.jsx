import React from "react";
import { Link } from "react-router-dom";
import Membereach from "./Membereach";

const handleDelete = (membereach) => {
    const newMember = isDelete.filter(memberDelete => memberDelete.setisDelete !== setisDelete);
    setisDelete(newMember);
}
const Editdelete = (props) => {    //pros:抓父層的屬性值
    return (props.trigger)?(      //三元判斷式 => ?:""
        <div style={{position:"fixed",top:"50%",backgroundColor:"white", height:"10%", width:"10%"}}>   
        {/* 抓高跟寬去置中 */}
        <div>
        <p>確定刪除？</p>
        
        </div>
        {/* <button onClick={() => props.setisDelete(false)} >刪除</button> */}
        <button onClick={() => handleDelete} >刪除</button>
        </div>
        
        
    ): "" ;

}
export default Editdelete;