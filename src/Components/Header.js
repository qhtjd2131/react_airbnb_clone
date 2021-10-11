import React, { useState } from "react";
import FlexibleSearch from "./FlexibleSearch";
import "./Header.css";
import HeaderBar from "./HeaderBar.js";
import Search from "./Search.js";


// import treeImage from "../images/Sample.jpg"

const Header = () => {
  const [target, setTarget] = useState("숙소");

  const targetChange = (text) => {
    setTarget(text);
  };

  return (
    <div className="header-container">
      <HeaderBar targetChange={targetChange} target={target} />
      <Search search_state={target} />
      <FlexibleSearch />
    </div>
  );
};

export default Header;
