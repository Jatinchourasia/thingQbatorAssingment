import React from "react";

import "./Post.css";
import comment from "../../image/comment.svg";
import clip from "../../image/clip.svg";

const Post = ({ image }) => {
  return (
    <div className="post">
      <div className="header">
        <div className="tags">
          <div className="tag"></div>
          <button className="addtag">+</button>
        </div>
        <div className="burger">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="content">
        <div className="paragraph">
          <p>Lorem, ipsum dolor sit amet consectetur</p>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="footer">
        <div className="pic"></div>
        <div className="pin">
          <button className="pinbtn">
            <img src={clip} alt="" />
          </button>
          <button className="pinbtn">
            <img src={comment} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
