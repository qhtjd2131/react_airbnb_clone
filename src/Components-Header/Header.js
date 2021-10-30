import React, { useState } from "react";
import FlexibleSearch from "./FlexibleSearch";
import "./Header.css";
import HeaderBar from "./HeaderBar.js";

const Header = () => {
  const [target, setTarget] = useState("숙소");

  const targetChange = (text) => {
    setTarget(text);
  };

  return (
    <div className="header-container">
      
      <HeaderBar
        targetChange={targetChange}
        target={target}
        // isOverScrollY={isOverScrollY}
        // setIsOverScrollY={setIsOverScrollY}
      />
      {/* <Search
        search_state={target}
        isOverScrollY={isOverScrollY}
        setIsOverScrollY={setIsOverScrollY}
      /> */}
      <FlexibleSearch />
    </div>
  );
};

export default Header;
