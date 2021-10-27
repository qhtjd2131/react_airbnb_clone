import React, { useState, useContext, useEffect, createRef } from "react";
import "./HeaderBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faBars,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";
import UserMenuDialog from "./UserMenuDialog";
import Search from "./Search";

const HeaderBarContainer = styled.div`
  position: relative;
  ${(props) =>
    props.isOverScrollY &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 995;
      // background-color : white;
    `}
`;
const ContentsWrapper = styled.div`
  padding: 0 60px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

const LogoContainer = styled.div`
  width: 300px;
  font-size: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  cursor: pointer;
  ${(props) =>
    props.isOverScrollY &&
    css`
      color: red;
    `}
`;

const LogoLabel = styled.label`
  font-size: 30px;
  padding-bottom: 10px;
  padding-left: 10px;
  cursor: pointer;

  @media only screen and (max-width: 1228px) {
    display: none;
  }
`;

const SearchBarContainer = styled.nav`
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (max-width: 1070px) {
    top: 90px;
  }
`;

const SearchState = styled.div`
  text-decoration: none;
  padding: 20px;
  display: inline-block;
  margin: 0;
  cursor: pointer;
  justify-items: center;

  &:hover {
    color: rgb(206, 198, 198);
  }
  &:after {
    display: block;
    content: "";
    border-bottom: solid 2px white;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    margin-top: 7px;
  }
  &:hover:after {
    transform: scaleX(0.2);
  }
  &:active:after {
    transform: scaleX(0.8);
  }
  ${(props) =>
    props.target === props.stateName &&
    css`
      &:after {
        display: block;
        content: "";
        border-bottom: solid 2px white;
        transition: transform 250ms ease-in-out;
        transform: scaleX(0.8);
      }

      &:hover:after {
        transform: scaleX(0.8);
      }
      &:hover {
        color: white;
      }
    `}
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToBeHost = styled.div`
  width: 100px;
  padding: 10px;
  border-radius: 20px/50%;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const LanguageSetting = styled.div`
  padding: 14px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const UserWrapper = styled.div`
  position: relative;
  width: 70px;
  display: flex;
  justify-content: space-around;
  background-color: white;
  color: gray;
  padding: 10px 10px;
  border-radius: 50px;
  cursor: pointer;
`;
const UserMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 0px;
`;
const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
`;

export const SelectedItemContext = React.createContext({});
export const IsOverScrollYContext = React.createContext({});

const AB_SEARCH_BAR = ({ target, targetChange }) => {
  const { isOverScrollY, setIsOverScrollY } = useContext(IsOverScrollYContext);
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
    targetChange(e.target.outerText);
  };
  return (
    <SearchBarContainer>
      {navigations.map((navigation) => (
        <SearchState
          target={target}
          stateName={navigation.name}
          href={navigation.link}
          onClick={handleClick}
          key={navigation.name}
        >
          {navigation.name}
        </SearchState>
      ))}
      <Search search_state={target} />
    </SearchBarContainer>
  );
};

const AB_LOGO = ({ isOverScrollY }) => {
  return (
    <LogoContainer isOverScrollY={isOverScrollY}>
      <FontAwesomeIcon icon={faAirbnb} />
      <LogoLabel>airbnb</LogoLabel>
    </LogoContainer>
  );
};

const AB_USER_BAR = () => {
  const { isSelectedMenu, setIsSelectedMenu } = useContext(SelectedItemContext);
  const UserWrapperRef = createRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (UserWrapperRef.current) {
        if (!UserWrapperRef.current.contains(e.target)) {
          setIsSelectedMenu(false);
          console.log("outside click");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [UserWrapperRef]);
  return (
    <UserContainer>
      <ToBeHost>호스트 되기</ToBeHost>
      <LanguageSetting>
        <FontAwesomeIcon icon={faGlobe} />
      </LanguageSetting>

      <UserWrapper
        onClick={() =>
          isSelectedMenu ? setIsSelectedMenu(false) : setIsSelectedMenu(true)
          // setIsSelectedMenu(true)
        }
        ref={UserWrapperRef}
      >
        <UserMenuDialog
          isSelectedMenu={isSelectedMenu}
          setIsSelectedMenu={setIsSelectedMenu}
        />
        <UserMenu>
          <FontAwesomeIcon icon={faBars} />
        </UserMenu>

        <UserIcon>
          <FontAwesomeIcon icon={faUserCircle} />
        </UserIcon>
      </UserWrapper>
    </UserContainer>
  );
};

const HeaderBar = ({ target, targetChange }) => {
  const [isSelectedMenu, setIsSelectedMenu] = useState(false);
  const [isOverScrollY, setIsOverScrollY] = useState(false);
  // 1. react -> context, useContext
  // 2. global state management -> redux, mobx

  return (
    <HeaderBarContainer isOverScrollY={isOverScrollY}>
      <ContentsWrapper>
        <IsOverScrollYContext.Provider
          value={{ isOverScrollY, setIsOverScrollY }}
        >
          <SelectedItemContext.Provider
            value={{ isSelectedMenu, setIsSelectedMenu }}
          >
            <AB_LOGO isOverScrollY={isOverScrollY} />
            <AB_SEARCH_BAR target={target} targetChange={targetChange} />
            <AB_USER_BAR />
          </SelectedItemContext.Provider>
        </IsOverScrollYContext.Provider>
      </ContentsWrapper>
    </HeaderBarContainer>
  );
};

export default HeaderBar;
