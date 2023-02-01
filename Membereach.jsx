import React, { useState } from "react";
import { Link, MemoryRouter } from "react-router-dom";
import Editmodal from "./Editmodal";
import Style from "../styles/css/backstage_member.css";
import Editdelete from "./Editdelete"

const Membereach = () => {
  const [isShow, setisShow] = useState(false); //isShow is initial value which is false and setisShow is a state which can be changed
  const isDisplay = isShow ? "flex" : "none";

  const [isDelete, setisDelete] = useState(false);
  const memberDelete = () => {
    setisDelete(true);
    // const isMerge = isShow ? "flex" : "none";
    // const isMerge = isDelete===true ? Style.memberTable : Style.memberTablenone;
  };
//use fetch api then change the content of the the below table content
  return (
    <>
      <tr className={isDelete===true ? Style.memberTablenone:Style.memberTable }>
        <td>1</td>   
        {/* {product.pid} */}
        <td>Jess Smith</td>
        <td>Jess.S</td>
        <td>jess.s@gmail.com</td>
        <td>0912345678</td>
        <td>台中</td>
        <td>西區公益路二號</td>
        <td>女</td>
        <td>02/19/1992</td>
        <td>
          <button onClick={() => setisShow(true)}>編輯</button>
          <Editmodal trigger={isShow} setisShow={setisShow} />
        </td>
        <td>
          <button onClick={memberDelete}>刪除</button>
          <Editdelete trigger={isDelete} setisDelete={setisDelete} />
        </td>
      </tr>
    </>
  );
};

export default Membereach;
