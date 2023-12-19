import React, { useEffect, useState } from "react";
import "./main.css";
import Menu from "../../assets/img/dehaze.png";
import axios from "axios";

const Main = () => {
    const SERVERURL ="";
  const [isMenuVisible, setMenuVisible] = useState(true);
  const [posts, setPosts] = useState([]);
  const menuClickTR = () => {
    setMenuVisible(false);
  };
  const menuClickFA = () => {
    setMenuVisible(true);
  };
  useEffect(() => {
    const Posts = async () => {
        const acessToken = localStorage.getItem("acessToken");
        try {
            const response = await axios.get(`${SERVERURL}/list`, {
                acessToken: acessToken,
              });
              setPosts(response.data);
        } catch (error) {
            console.log("error",error);
        }

    };
    Posts();
  }, []);

  return (
    <div className="Main">
      <header className="header">
        <h1 className="LOGO">TEST</h1>
        {isMenuVisible && (
          <div className="menuHeader" onClick={menuClickTR}>
            <img src={Menu} alt="Menu" />
          </div>
        )}
        {!isMenuVisible && (
          <div className="MenuotherDiv">
            <div className="menuHeader" onClick={menuClickFA}>
              <img src={Menu} alt="Menu" />
            </div>
            <div className="menuBar">
              <div className="MenuBarCT" id="MENUNUMBER1">
                <div className="MenuNV">
                  <span>내정보</span>
                </div>
                <div className="UNDERBAR"></div>
              </div>
              <div className="MenuBarCT" id="MENUNUMBER2">
                <div className="MenuNV">
                  <span>작품</span>
                </div>
                <div className="UNDERBAR"></div>
              </div>
              <div className="MenuBarCT" id="MENUNUMBER3">
                <div className="MenuNV">
                  <span>추억</span>
                </div>
                <div className="UNDERBAR"></div>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="MAINVIEW">
        <div className="POST">
          <div className="Create_Post">
            <div className="Real_Post">
            </div>
            {posts?.map((post)=>{
                <div className="Real_Post" key={post.id}>
                    <div className="post_Name">{post.name}</div>
                    <div className="post_pic">{post.image}</div>
                    <div className="post_tit">{post.title}</div>
                    <div className="posst_Like">{post.like}</div>
                </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
