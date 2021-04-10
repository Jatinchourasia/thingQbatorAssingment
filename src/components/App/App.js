import React from "react";
import Main from "../Main/Main";
import Nav1 from "../Nav1/Nav1";
import Nav2 from "../Nav2/Nav2";

import Post from "../post/Post";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Nav1 />
      <div className="line"></div>
      <Nav2 />
      <div className="line"></div>

      <Main />
    </div>
  );
};
export default App;
