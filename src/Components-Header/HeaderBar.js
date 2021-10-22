import React from "react";
import "./HeaderBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faBars,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";

const HeaderBarContainer = styled.div`
  position: relative;
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

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.isMain === "main" &&
    css`
      @media only screen and (max-width: 1070px) {
        display: none;
      }
    `}
  ${(props) =>
    props.isMain === "sub" &&
    css`
      display: none;

      @media only screen and (max-width: 1070px) {
        display: flex;
      }
    `}
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
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToBeHost = styled.div`
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
  width: 70px;
  display: flex;
  justify-content: space-around;
  background-color: white;
  color: gray;
  padding: 10px 10px;
  border-radius: 55px;
`;
const UserMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 0px;
  cursor: pointer;
`;
const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  cursor: pointer;
`;
const HeaderBar = ({ target, targetChange }) => {
  const AB_LOGO = () => {
    return (
      <LogoContainer>
        <FontAwesomeIcon icon={faAirbnb} />
        <LogoLabel>airbnb</LogoLabel>
      </LogoContainer>
    );
  };

  const AB_SEARCH_BAR = ({ isMain }) => {
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
      <SearchBarContainer key={isMain} isMain={isMain}>
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
      </SearchBarContainer>
    );
  };

  const AB_USER_BAR = () => {
    return (
      <UserContainer>
        <ToBeHost>호스트 되기</ToBeHost>
        <LanguageSetting>
          <FontAwesomeIcon icon={faGlobe} />
        </LanguageSetting>
        <UserWrapper>
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
  return (
    <>
      <HeaderBarContainer>
        <AB_LOGO />
        <AB_SEARCH_BAR isMain="main" />
        <AB_USER_BAR />
      </HeaderBarContainer>{" "}
      <AB_SEARCH_BAR isMain="sub" />
    </>
  );
};

export default HeaderBar;
