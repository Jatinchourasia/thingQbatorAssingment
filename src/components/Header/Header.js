import React from "react";
import "./Header.css";
import back from "../../image/back.svg";
import Clogo from "../../image/Clogo.svg";
import user from "../../image/user.svg";
import group from "../../image/group.svg";
import filter from "../../image/filter.svg";
import bookmark from "../../image/bookmark.svg";
import setting from "../../image/setting.svg";

const Header = () => {
  return (
    <div className="head">
      <div className="left">
        <a className="back" href="">
          <img src={back} alt="backbtn" />
        </a>
        <div className="headlogo">
          <img className="Clogo" src={Clogo} alt="" />

          <div className="detail">
            <h2>Cover Cast</h2>
            <p>In Progress</p>
          </div>
        </div>
      </div>
      <div className="right">
        <a href="" className="me">
          <div className="me-Wrapper">
            <div className="user">
              <img src={user} alt="" /> Me
            </div>
            <div className="group">
              <img src={group} alt="" />
            </div>
          </div>
        </a>
        <a href="" className="filter">
          <img src={filter} alt="" />
        </a>
        <a href="" className="bookmark">
          <img src={bookmark} alt="" />
        </a>
        <a href="" className="task">
          + Add Task
        </a>
        <a href="" className="setting">
          <img src={setting} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
