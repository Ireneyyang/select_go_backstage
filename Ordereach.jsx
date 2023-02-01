import React, { useState } from "react";
import { Link, MemoryRouter } from "react-router-dom";
import Editmodal from "./Editmodal";
// import Style from "../styles/css/backstage_member.css";
import Style from "./memindex.css";
import Editdelete from "./Editdelete";

const Ordereach = () => {
  const [isShow, setisShow] = useState(false); //isShow is initial value which is false and setisShow is a state which can be changed
  const isDisplay = isShow ? "flex" : "none";

  const [isDelete, setisDelete] = useState(false);
  const OrderDelete = () => {
    setisDelete(true);
    // const isMerge = isShow ? "flex" : "none";
    // const isMerge = isDelete===true ? Style.memberTable : Style.memberTablenone;
  };
  //use fetch api then change the content of the the below table content
  return (
    <>
      <tr
        className={
          isDelete === true ? Style.memberTablenone : Style.memberTable
        }
      >
        <td>1</td>
        <td>1234</td>
        <td>01/12/2021</td>
        <td>$134</td>
        <td>訂單已成立</td>
        <td>大阪環球影城限量爆米花桶🍿</td>
        <td>
          <button onClick={() => setisShow(true)} style={{backgroundColor:"orange"}}>編輯</button>
          <Editmodal trigger={isShow} setisShow={setisShow} />
        </td>
        <td>
          {/* <button onClick={memberDelete}>刪除</button> */}
          <button onClick={OrderDelete} style={{backgroundColor:"orange"}}>刪除</button>
          <Editdelete trigger={isDelete} setisDelete={setisDelete} />
        </td>
      </tr>
    </>
  );
};

export default Ordereach;
