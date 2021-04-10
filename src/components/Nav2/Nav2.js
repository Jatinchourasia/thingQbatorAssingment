import React from "react";

import "./Nav2.css";
import add from "../../image/add.svg";

const Nav2 = () => {
  return (
    <div className="nav2">
      <div className="dashup">
        <p>
          {" "}
          <span className="D">D</span> Dashup
        </p>
      </div>
      <div className="search">
        <p>PAGES</p>
        <button>search</button>
      </div>
      <div className="pages">
        <div className="page page1">
          <ul>
            action
            <li>ssf</li>
            <li>szdf</li>
            <li>sdfsdf</li>
          </ul>
        </div>{" "}
        <div className="page page2">
          <ul>
            action
            <li>ssf</li>
            <li>szdf</li>
            <li>sdfsdf</li>
          </ul>
        </div>
        <div className="page page3">
          <ul>
            action
            <li>ssf</li>
            <li>szdf</li>
            <li>sdfsdf</li>
          </ul>
        </div>
      </div>

      <button className="addItem">
        <img src={add} alt="add" />
        Add item
      </button>
    </div>
  );
};

export default Nav2;
