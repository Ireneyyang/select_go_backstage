import React, { useState } from "react";
import { Link, MemoryRouter } from "react-router-dom";
import Editmodal from "./Editmodal";
import Style from "../styles/css/backstage_member.css";
import Editdelete from "./Editdelete";

const Posteach = () => {
  const [isShow, setisShow] = useState(false); //isShow is initial value which is false and setisShow is a state which can be changed
  const isDisplay = isShow ? "flex" : "none";

  const [isDelete, setisDelete] = useState(false);
  const PostDelete = () => {
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
        <td>大阪環球影城限量爆米花桶🍿</td>
        <td>5</td>
        <td>24</td>
        <td>45</td>
        <td>
          <select name="status" class="postStatus">
            <option value="1">集氣中</option>
            <option value="2">流標</option>
            <option value="3">準備中</option>
            <option value="4">販售中</option>
          </select>
        </td>

        <td>
          <button onClick={() => setisShow(true)} style={{backgroundColor:"orange"}}>編輯</button>
          <Editmodal trigger={isShow} setisShow={setisShow} />
        </td>
        <td>
          {/* <button onClick={memberDelete}>刪除</button> */}
          <button onClick={PostDelete} style={{backgroundColor:"orange"}}>刪除</button>
          <Editdelete trigger={isDelete} setisDelete={setisDelete} />
        </td>
      </tr>
    </>
  );
};

export default Posteach;
