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
  transition: 0.15s;
  ${(props) =>
    props.isOverScrollY &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 995;
      background-color: white;
      box-shadow: 0px 6px 26px rgb(0 0 0 / 22%);

      ${props.openSearchBarInOverScroll &&
      css`
        padding-bottom: 120px;
        @media only screen and (max-width: 1070px) {
          padding-bottom: 210px;
        }
      `}
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
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: absolute;
  top : 12px;
  left: 50%;
  transform-origin: -10% 30%;
  transform: translateX(-50%);
  transition: 0.2s;

  ${(props) => !props.isOverScrollY && css``}
  ${(props) =>
    props.isOverScrollY && //스크롤바 내릴 시
    css`
      transform: scale(0.3, 0.3) translateX(-50%);
      opacity: 0;

      @media only screen and (max-width: 1070px) {
        transform-origin: -100% -30%;
      }
      ${props.openSearchBarInOverScroll && //스크롤바 내리고, 검색시작하기 버튼 클릭 시
      css`
        @media only screen and (max-width: 1070px) {
          margin-top: 170px;
        }
        opacity: 1;
        transform: scale(1, 1) translateX(-50%);
      `};
    `};
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
        border-bottom: solid 3px white;
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
  ${(props) =>
    props.isOverScrollY &&
    css`
      color: black;

      &:hover {
        color: gray;
      }
      &:after {
        border-bottom: solid 3px black;
      }
    `}
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.isOverScrollY &&
    css`
      color: black;
    `}
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
  ${(props) =>
    props.isOverScrollY &&
    css`
      border: 1px solid gray;
    `}
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
const OpenButtonContainer = styled.div`
  position: absolute;
  transition: 0.1s ease-in-out;
  top: 100px;
  left: 50%;
  transform-origin: center;
  transform: scale(2.3, 1) translateX(-25%);
  z-index: -1;

  display: none;
  align-items: center;
  ${(props) =>
    props.isOverScrollY &&
    css`
      top: 0;
      z-index: 1;
      left: 50%;
      transform: scale(1, 1) translateX(-50%);
      padding: 13px;
      display: flex;

      @media only screen and (max-width: 1070px) {
        left: 25%;
        transform: scale(1, 1) translateX(-20%);
      }
      ${props.openSearchBarInOverScroll &&
      css`
        @media only screen and (max-width: 1070px) {
          left: 50%;
          top: 182px;
          transform: scale(2.2, 1) translateX(-30%);
        }
        left: 50%;
        top: 100px;
        transform: scale(2.5, 1) translateX(-20%);
        z-index: 1;
        opacity: 0;

        /* display: none; */
      `}
    `};
`;
const SearchBarOpenButton = styled.div`
  display: flex;
  align-items: center;
  border-radius: 45px;
  border: 1px solid #dddddd;
  box-shadow: 0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%);
  width: 30vw;
  padding: 18px 20px;
  background-color: white;
  color: black;
  transition: box-shadow 0.2s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 /15%);
  }
`;

export const SelectedItemContext = React.createContext({});
export const IsOverScrollYContext = React.createContext({});
export const openSearchBarInOverScrollContext = React.createContext({});
const SearchBarOpen = () => {
  const { isOverScrollY } = useContext(IsOverScrollYContext);
  const { openSearchBarInOverScroll, setOpenSearchBarInOverScroll } =
    useContext(openSearchBarInOverScrollContext);

  return (
    <OpenButtonContainer
      openSearchBarInOverScroll={openSearchBarInOverScroll}
      setOpenSearchBarInOverScroll={setOpenSearchBarInOverScroll}
      isOverScrollY={isOverScrollY}
    >
      <SearchBarOpenButton
        onClick={() =>
          openSearchBarInOverScroll
            ? setOpenSearchBarInOverScroll(false)
            : setOpenSearchBarInOverScroll(true)
        }
      >
        검색 시작하기
      </SearchBarOpenButton>
    </OpenButtonContainer>
  );
};

const AB_SEARCH_BAR = ({ target, targetChange }) => {
  const { isOverScrollY } = useContext(IsOverScrollYContext);
  const { openSearchBarInOverScroll, setOpenSearchBarInOverScroll } =
    useContext(openSearchBarInOverScrollContext);
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
    <SearchBarContainer
      isOverScrollY={isOverScrollY}
      openSearchBarInOverScroll={openSearchBarInOverScroll}
      setOpenSearchBarInOverScroll={setOpenSearchBarInOverScroll}
    >
      {navigations.map((navigation) => (
        <SearchState
          target={target}
          stateName={navigation.name}
          href={navigation.link}
          onClick={handleClick}
          key={navigation.name}
          isOverScrollY={isOverScrollY}
        >
          {navigation.name}
        </SearchState>
      ))}
      <Search
        search_state={target}
        openSearchBarInOverScroll={openSearchBarInOverScroll}
        setOpenSearchBarInOverScroll={setOpenSearchBarInOverScroll}
      />
    </SearchBarContainer>
  );
};

const AB_LOGO = () => {
  const { isOverScrollY, setIsOverScrollY } = useContext(IsOverScrollYContext);

  return (
    <LogoContainer isOverScrollY={isOverScrollY}>
      <FontAwesomeIcon icon={faAirbnb} />
      <LogoLabel>airbnb</LogoLabel>
    </LogoContainer>
  );
};

const AB_USER_BAR = () => {
  const { isSelectedMenu, setIsSelectedMenu } = useContext(SelectedItemContext);
  const { isOverScrollY, setIsOverScrollY } = useContext(IsOverScrollYContext);

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
    <UserContainer isOverScrollY={isOverScrollY}>
      <ToBeHost>호스트 되기</ToBeHost>
      <LanguageSetting>
        <FontAwesomeIcon icon={faGlobe} />
      </LanguageSetting>

      <UserWrapper
        onClick={() =>
          isSelectedMenu ? setIsSelectedMenu(false) : setIsSelectedMenu(true)
        }
        isOverScrollY={isOverScrollY}
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
  const [openSearchBarInOverScroll, setOpenSearchBarInOverScroll] =
    useState(false);
  // 1. react -> context, useContext
  // 2. global state management -> redux, mobx

  return (
    <HeaderBarContainer
      isOverScrollY={isOverScrollY}
      openSearchBarInOverScroll={openSearchBarInOverScroll}
    >
      <ContentsWrapper>
        <IsOverScrollYContext.Provider
          value={{ isOverScrollY, setIsOverScrollY }}
        >
          <SelectedItemContext.Provider
            value={{ isSelectedMenu, setIsSelectedMenu }}
          >
            <openSearchBarInOverScrollContext.Provider
              value={{
                openSearchBarInOverScroll,
                setOpenSearchBarInOverScroll,
              }}
            >
              <AB_LOGO />
              <AB_SEARCH_BAR
                target={target}
                targetChange={targetChange}
                openSearchBarInOverScroll={openSearchBarInOverScroll}
                setOpenSearchBarInOverScroll={setOpenSearchBarInOverScroll}
              />
              <SearchBarOpen
                openSearchBarInOverScroll={openSearchBarInOverScroll}
                setOpenSearchBarInOverScroll={setOpenSearchBarInOverScroll}
              />
              <AB_USER_BAR />
            </openSearchBarInOverScrollContext.Provider>
          </SelectedItemContext.Provider>
        </IsOverScrollYContext.Provider>
      </ContentsWrapper>
    </HeaderBarContainer>
  );
};

export default HeaderBar;
