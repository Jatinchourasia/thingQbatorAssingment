import React, { useState } from "react";
import Header from "../Header/Header";

import "./Main.css";
import img1 from "../../image/1876.jpg";
import img2 from "../../image/3255469.jpg";
import img3 from "../../image/4005526.jpg";
import add from "../../image/add.svg";
import Post from "../post/Post";

const Main = () => {
  const image = img1;
  return (
    <div className="main">
      <Header />
      <div className="hero">
        <div className="backlog container">
          <h1>Backlog</h1>
          <div className="post-wrapper">
            <Post />
            <Post image={img2} />

            <button className="addanother">
              <img src={add} alt="add" />
              Add another task
            </button>
          </div>
        </div>
        <div className="work container">
          <h1>Work in progress</h1>
          <div className="post-wrapper">
            <Post />
            <Post image={img1} />
            <Post />
            <button className="addanother">
              <img src={add} alt="add" />
              Add another task
            </button>
          </div>
        </div>
        <div className="review container">
          <h1>In Review</h1>
          <div className="post-wrapper">
            <Post image={img2} />

            <button className="addanother">
              <img src={add} alt="add" />
              Add another task
            </button>
          </div>
        </div>
        <div className="finished container">
          <h1>finished</h1>
          <div className="post-wrapper">
            <Post image={img3} />
            <Post />
            <Post />
            <button className="addanother">
              <img src={add} alt="add" />
              Add another task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
