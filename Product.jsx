import React from "react";
import { Link } from "react-router-dom";
import Style from '../styles/css/backstage_product.css';
import Producteach from "./Producteach"

const About = () => {
  return (
    <>
      <body>
        {/* <!-- 下面為後台管理頁面 --> */}
        <div class="orderPageContainer" style={{backgroundColor:"white"}}>
          <div class="memberLeftSider" style={{backgroundColor:"lightgray"}}>
            <div class="memberSelect" style={{backgroundColor:"lightgray"}}>
              {/* <!-- <input type="file" name="" id=""> --> */}
              <div class="memberProfile" style={{backgroundColor:"lightgray"}}>
                <img src="/img/profilePic.jpeg" alt="" />
              </div>
              <span>選擇圖片</span>
              <span>Irene Yang</span>
              <div class="sidebarSelect" style={{backgroundColor:"lightgray"}}>
                <Link to="/Member">會員</Link>
                <Link to="/Order">訂單</Link>
                <Link to="/Product">商品</Link>
                <Link to="/Post">文章</Link>
              </div>
              <span>登出</span>
              {/* <!-- <div class="forspace"></div> --> */}
            </div>
          </div>
          <div class="memberRightSider" style={{backgroundColor:"lightgray"}}>
            <div class="memberColumn">
              <span class="memberText" style={{backgroundColor:"lightgray"}}>商品資料</span>
              <div class="indivisualOrder">
                <div>
                  <table>
                    <tr>
                      <th>商品ID</th>
                      <th>商品名稱</th>
                      <th>價格</th>
                      <th>庫存量</th>
                      <th>成本價</th>
                      <th>利潤</th>
                    </tr>
                   <Producteach />
                   <Producteach />
                   <Producteach />
                   <Producteach />
                  </table>
                </div>
                <div class="changePage">
                  <a href="">
                    <i class="fa-solid fa-arrow-left"></i>
                  </a>
                  1/10
                  <a href="">
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default About;
