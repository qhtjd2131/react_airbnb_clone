import React from "react";
import Body from "./Components-Body/Body.js";
import Header from "./Components-Header/Header.js";
import Footer from "./Footer.js";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="top-label">코로나 19 화이링~~</div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
