import React from "react";
import { Link } from "react-router-dom";
import Style from '../styles/css/style.css';

const Navbar = () => {
  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="style.css"></link>
      </div>
      <div id="body">
        <nav>
          <header>
            2023 謹賀新年！名店禮盒🎁兔年限定款🐰日式年味小物🍡都在這！
          </header>
          <div className="nav_bar">
            <div className="nav_bar_container">
              <div className="nav_bar1">
                <a href="">
                  <img src="/img/select go_logo.png" />
                </a>
              </div>
              <div className="nav_bar2">
                <a href="">熱門動態</a>
                <a href="">限時發售</a>
                <a href="">許願池</a>
                <a href="">百貨商場</a>
              </div>
              <div className="searchdiv">
                <input type="text" />
                <a href="">
                  <i className="nav-icon fa-solid fa-magnifying-glass"></i>
                </a>
              </div>

              <div className="nav_bar3">
                <a href="">
                  <i className="nav-icon fas fa-shopping-cart"></i>
                </a>

                <Link to={"/"}>
                  <div className="dropdown">
                    <div id="member-icon">
                      <img src="/img/馬里歐.webp" className="dropbtn" />
                      <div className="dropmenu">
                        <Link to={"/Member"}>會員</Link>
                        <Link to={"/Order"}>訂單</Link>
                        <Link to={"/Product"}>商品</Link>
                        <Link to={"/Post"}>文章</Link>
                        <a href="">登出</a>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;