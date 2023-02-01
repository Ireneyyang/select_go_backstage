import React from "react";
import { Link } from "react-router-dom";
// import "../styles/css/backstage_post.css"
import Posteach from "./Posteach"

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
              <div class="sidebarSelect">
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
              <span class="memberText" style={{backgroundColor:"lightgray"}}>文章資料</span>
              <div class="indivisualOrder">
                <div>
                  <table>
                    <tr>
                      <th>會員ID</th>
                      <th>文章ID</th>
                      <th>標題</th>
                      <th>留言數</th>
                      <th>集氣數</th>
                      <th>點擊率</th>
                      <th>文章狀態</th>
                    </tr>
                   <Posteach />
                   <Posteach />
                   <Posteach />
                   <Posteach />
                   <Posteach />
                   <Posteach />
                   
                  </table>
                </div>
                <div class="changePage" >
                  <a href="">
                    <i class="fa-solid fa-arrow-left"></i>
                  </a>
                  <span style={{cursor: "pointer"}}>1/10</span>
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
