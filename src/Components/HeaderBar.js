import React, { useState } from "react";
import "./HeaderBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const HeaderBar = () => {
  const AB_LOGO = () => {
    return (
      <div className="logo-container">
        <FontAwesomeIcon icon={faAirbnb} />
        <label className="airbnb_logo_label">airbnb</label>
      </div>
    );
  };

  const AB_SearchBar = () => {
    const [target, setTarget] = useState("");
    const navigations = [
      {
        name: "숙소",
        link: "#!",
      },
      {
        name: "체험",
        link: "#!",
      },
      {
        name: "온라인 체험",
        link: "#!",
      },
    ];
    const handleClick = (e) => {
      console.log(e.target.className);
      console.log(e.target.outerText);
      setTarget(e.target.outerText);

    };
    return (
      <nav className="searchBar-container">
        {navigations.map((navigation) => (
          <div
            className={target==navigation.name ?  "selected-search-state" : "search-state"}
            href={navigation.link}
            onClick={handleClick}
            key={navigation.name}
          >
            {navigation.name}
          </div>
        ))}
      </nav>
    );
  };

  const AB_UserBar = () => {
    return (
      <div className="user-container">
        <div className="to-be-host">호스트 되기</div>
        <div className="language-setting">
          <FontAwesomeIcon icon={faGlobe} />
        </div>
        <div className="user-data">
          <div className="user-menu">
            <FontAwesomeIcon icon={faBars} />
          </div>

          <div className="user-icon">
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="header-bar">
      <AB_LOGO />
      <AB_SearchBar />
      <AB_UserBar />
    </div>
  );
};

export default HeaderBar;
