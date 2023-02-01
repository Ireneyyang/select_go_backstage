import React, { useState } from "react";
import { Link, MemoryRouter } from "react-router-dom";
import Editmodal from "./Editmodal";
import Style from "../styles/css/backstage_member.css";
import Editdelete from "./Editdelete";

const Producteach = () => {
  const [isShow, setisShow] = useState(false); //isShow is initial value which is false and setisShow is a state which can be changed
  const isDisplay = isShow ? "flex" : "none";

  const [isDelete, setisDelete] = useState(false);
  const ProductDelete = () => {
    setisDelete(true);
    // const isMerge = isShow ? "flex" : "none";
    // const isMerge = isDelete===true ? Style.memberTable : Style.memberTablenone;
  };
  //use fetch api then change the content of the the below table content
  return (
    <>
      <tr>
        <td>1</td>
        {/* {product.pid} */}
        <td>大阪環球影城限量爆米花桶🍿</td>
        <td>$100</td>
        <td>50</td>
        <td>$50</td>
        <td>$50</td>
        <td>
        <button onClick={() => setisShow(true)} style={{backgroundColor:"orange"}}>編輯</button>
          <Editmodal trigger={isShow} setisShow={setisShow} />
        </td>
        <td>
        {/* <button onClick={memberDelete}>刪除</button> */}
        <button onClick={ProductDelete} style={{backgroundColor:"orange"}}>刪除</button>
          <Editdelete trigger={isDelete} setisDelete={setisDelete} />
        </td>
      </tr>
    </>
  );
};

export default Producteach;
