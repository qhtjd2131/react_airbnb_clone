import React from "react";
import "./Header.css";
import styled from "styled-components";
import HeaderBar from "./HeaderBar";

// import treeImage from "../images/Sample.jpg"

const Header = () => {
  const Button = styled.button`
    font-size: 400px;
  `;

  return (
    <div className="header-container">
      <HeaderBar />
      <div className="search"></div>
      <div className="flexible search"></div>
    </div>
  );
};

export default Header;
