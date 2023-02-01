import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./memindex.css"
// import Membereach from "./Membereach"

// function Edit() {
//   const [isShow, setisShow] = useState(false);
//   const togleModal = () => {
//     setisShow(!isShow);
//   };
//   const isDisplay = isShow ? "flex" : "none";
// }

function CRUD() {
  // 自己設定的變數 之後會用fetch api回傳類似的格式
  const list = [
    {
      id: 1,
      name: "Jess Smith",
      nickname: "Jess.S",
      email: "jess.s@gmail.com",
      phoneNumber: "0912345678",
      city: "台中",
      address: "西區公益路二號",
      sex: "女",
      birthDay: "02/19/1992",
    },
    {
      id: 1,
      name: "Jess Smith",
      nickname: "Jess.S",
      email: "jess.s@gmail.com",
      phoneNumber: "0912345678",
      city: "台中",
      address: "西區公益路二號",
      sex: "女",
      birthDay: "02/19/1992",
    },
  ]
  const [lists, setList] = useState(list)
  const [updateState, setUpdateState] = useState(-1)

  function handleEdit(id) {
    {
      /* handleSubmit changes to handleEdit */
    }
    setUpdateState(id);
  }
  function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id);
    setList(newlist);
  }
  function handleSubmit(event) {
    console.log(event);
    // event出現在onClick on...之類的事件裡
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const newlist = lists.map((li) =>
      // map is similar to forEach funtino, for creating an array
      li.id === updateState ? { ...li, name: name, price: price } : li
    );

    setList(newlist);
    setUpdateState(-1);
  }
  return (
    <>
      {/* <!-- 下面為後台管理頁面 --> */}
      <div className="orderPageContainer" style={{backgroundColor:"white"}}>
        <div className="memberLeftSider" style={{backgroundColor:"lightgray"}}>
          <div className="memberSelect" style={{backgroundColor:"lightgray"}}>
            {/* <!-- <input type="file" name="" id=""> --> */}
            <div className="memberProfile" style={{backgroundColor:"lightgray"}}>
              <img src="/img/profilePic.jpeg" alt="" />
            </div>
            {/* <span>選擇圖片</span> */}
            {/* <input type="file" name="" id="profilePic" /> */}
            <span>Irene Yang</span>
            {/* <button style={{width:"30%", height:"30%"}}>更改姓名</button> */}
            <div className="sidebarSelect">
              <Link to="/Member">會員</Link>
              <Link to="/Order">訂單</Link>
              <Link to="/Product">商品</Link>
              <Link to="/Post">文章</Link>
            </div>
            <span>登出</span>
            {/* <!-- <div class="forspace"></div> --> */}
          </div>
        </div>
        <div className="memberRightSider" style={{backgroundColor:"lightgray"}}>
          <div className="memberColumn">
            <span className="memberText" style={{backgroundColor:"lightgray"}}>會員資料</span>
            <div className="tableMember">
                <table>
                  <tr className="tableColumn">
                    <th></th>
                    <th>MemberID</th>
                    <th>姓名</th>
                    <th>暱稱</th>
                    <th>Email</th>
                    <th>電話號碼</th>
                    <th>縣市</th>
                    <th>地址</th>
                    <th>性別</th>
                    <th>生日</th>
                  </tr>
                  {/* <Membereach />
                <Membereach />
                <Membereach />
                <Membereach /> */}
                  <div className="crud">
                    <div >
                      <AddList setList={setList} />
                      <form onSubmit={handleSubmit}>
                        <table>
                          {lists.map((current) =>
                            updateState === current.id ? (
                              <EditList
                                current={current}
                                lists={lists}
                                setList={setList}
                              />
                            ) : (
                              <tr>
                                <td>{current.name}</td>
                                <td>{current.price}</td>
                                <td>
                                  <button
                                    className="edit"
                                    onClick={() => handleEdit(current.id)}
                                  >
                                    Edit
                                  </button>
                                  {/* handleSubmit changes to handleEdit */}
                                  <button
                                    className="delete"
                                    type="button"
                                    onClick={() => handleDelete(current.id)}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            )
                          )}
                        </table>
                      </form>
                    </div>
                  </div>
                </table>
              </div>
            <div className="indivisualOrder">
              
              <div className="changePage">
                <a href="">
                  <i className="fa-solid fa-arrow-left"></i>
                </a>
                1/10
                <a href="">
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="editButton">
      <Editmodal />

    </div> */}
    </>
  );
}

function EditList({ current, lists, setList }) {
  function handInputname(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, name: value } : li
    );

    setList(newlist);
  }
  function handInputprice(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, name: value } : li
    );

    setList(newlist);
  }
  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handInputname}
          name="name"
          value={current.name}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handInputprice}
          name="price"
          value={current.price}
        />
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
}

function AddList({ setList }) {
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const nicknameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();
  const sexRef = useRef();
  const birthDayRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
      <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
      <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
      <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
      <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
      <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
      <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
      <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
      <button type="submit">Add</button>
    </form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const id = event.target.elements.id.value;
    const name = event.target.elements.name.value;
    const nickname = event.target.elements.nickname.value;
    const email = event.target.elements.email.value;
    const phoneNumber = event.target.elements.phoneNumber.value;
    const city = event.target.elements.city.value;
    const address = event.target.elements.address.value;
    const sex = event.target.elements.sex.value;
    const birthDay = event.target.elements.birthDay.value;
    const newList = {
      id: 3,
      name,
      nickname,
      email,
      phoneNumber,
      city,
      address,
      sex,
      birthDay,
    };
    setList((prevList) => {
      return prevList.concat(newList);
    });
    nameRef.current.value = "";
    priceRef.current.value = "";
  }
  // return (
  //   <form className="addForm" onSubmit={handleSubmit}>
  //     <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
  //     <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
  //     <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
  //     <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
  //     <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
  //     <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
  //     <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
  //     <input type="text" name="price" placeholder="Enter Price" ref={priceRef}/>
  //     <button type="submit">Add</button>
  //   </form>
  // );
}

export default CRUD;
