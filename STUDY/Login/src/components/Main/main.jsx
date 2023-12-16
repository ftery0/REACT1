import React, { useState } from "react";
import "./main.css";
import Menu from "../../assets/img/dehaze.png";

const Main = () => {
    const [isMenuVisible, setMenuVisible] = useState(true);

    const menuClickTR = () => {
        setMenuVisible(false);
    };
    const menuClickFA = () => {
        setMenuVisible(true);
    };

    return (
        <div className="Main">
            <header className="header">
                <h1 className="LOGO">TEST</h1>
                {isMenuVisible && (
                    <div className="menuHeader" onClick={menuClickTR}>
                        <img src={Menu} alt="Menu"/>
                    </div>
                )}
                {!isMenuVisible && (
                    <div className="MenuotherDiv">
                        <div className="menuHeader" onClick={menuClickFA}>
                            <img src={Menu} alt="Menu"/>
                        </div>
                        <div className="menuBar">
                            <div className="MenuBarCT" id="MENUNUMBER1">
                                <div className="MenuNV"><span>내정보</span></div>
                                <div className="UNDERBAR"></div>
                            </div>
                            <div className="MenuBarCT" id="MENUNUMBER2">
                            <div className="MenuNV"><span>작품</span></div>
                            <div className="UNDERBAR"></div>
                            </div>
                            <div className="MenuBarCT" id="MENUNUMBER3">
                            <div className="MenuNV"><span>추억</span></div>
                            <div className="UNDERBAR"></div>
                            </div>
                        </div>
                        
                    </div>
                )}
            </header>
            <div className="MAINVIEW">
            </div>
        </div>
    );
};

export default Main;
