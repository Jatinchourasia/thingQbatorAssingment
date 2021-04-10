import React from "react";
import "./Nav1.css";
import logo from "../../image/logo(1).png";
const Nav1 = () => {
  return (
    <div className="nav">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="">
                <div className="block"></div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="block"></div>
              </a>
            </li>
            <li>
              <a href="">
                <div className="block"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="bell"></div>
        <div className="profile"></div>
      </div>
    </div>
  );
};

export default Nav1;
