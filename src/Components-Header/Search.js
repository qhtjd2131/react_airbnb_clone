import React, { createRef, useEffect, useState, useContext } from "react";
import styled, { css } from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchWhereDialog from "./SearchWhereDialog";
import SearchCheckInOutDialog from "./SearchCheckInDialog";
import SearchAddGuestDialog from "./SearchAddGuestDialog";
import { IsOverScrollYContext } from "./HeaderBar";
import { openSearchBarInOverScrollContext } from "./HeaderBar";

const SearchContainer = styled.div`
  position: absolute;
  top: 100px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;

  ${(props) =>
    props.isOverScrollY &&
    css`
      top: 0;
      color: black;
      transform: scale(0, 0);

      ${(props) =>
        props.openSearchBarInOverScroll &&
        css`
          top: 100px;
          transform: scale(1, 1);
        `}
    `}
`;

const SearchBar = styled.div`
  position: relative;
  height: 70px;
  margin: 0 120px;
  min-width: 90%;

  background-color: #f7f7f7;
  border-radius: 30px / 50%;
  display: grid;
  grid-template-columns: 6fr 4fr 4fr 5fr;
  ${(props) =>
    props.search_state === "체험" &&
    css`
      grid-template-columns: 1fr 1fr;
    `}

  ${(props) =>
    props.selectedItem &&
    !(props.search_state === "체험") &&
    css`
      grid-template-columns: 6fr 4fr 4fr 6fr;
    `}

    ${(props) =>
    props.openSearchBarInOverScroll &&
    css`
      background-color: white;
      border: 1px solid #dddddd;
    `}
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  font-size: 20px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

const InputBox = styled.div`
  height: 100%;
  border: none;
  border-radius: inherit;
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Label = styled.div`
  color: black;
  font-size: 18px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${(props) =>
    props.state === "title" &&
    css`
      font-weight: 700;
    `}

  ${(props) =>
    props.state === "contents" &&
    css`
      color: gray;
    `}

    ${(props) =>
    props.date &&
    css`
      color: black;
      font-weight: 600;
    `}
`;

const ButtonBox = styled.button`
  border-radius: inherit;
  border: none;
  box-sizing: border-box;
  background-color: transparent;
  padding: 0 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: center;
  border-radius: 30px / 50%;
  border: none;
  box-sizing: border-box;
  &:hover {
    background-color: #ebebeb;
  }
  &:hover::before {
    background-color: transparent;
  }

  &::before {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: 1px;
    margin: 0;
    margin-right: 6px;
    padding: 0;
    content: "";
    background-color: #babdbe;
  }

  &:first-child::before {
    background-color: transparent;
  }

  ${(props) =>
    props.visible_state !== "all" &&
    !(props.search_state === props.visible_state) &&
    css`
      display: none;
    `}

  ${(props) =>
    props.isSelectedItem &&
    css`
      background-color: white;
      box-shadow: 0px 6px 16px rgb(0 0 0 / 30%);

      &::before {
        background-color: transparent;
      }
      &:hover {
        background-color: white;
      }
    `}
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 7px;
  right: 10px;
  width: 55px;
  height: 55px;
  display: flex;
  font-size: 27px;
  justify-content: center;
  align-items: center;
  background-color: #fe365b;
  border-radius: 50%;
  color: white;
  cursor: pointer;

  /* &:hover {
    background-color: #ac0800;
  } */

  ${(props) =>
    props.selectedItem &&
    css`
      width: 100px;
      border-radius: 27px;
      &::after {
        font-size: 17px;
        content: "검색";
      }
    `}
`;

const Search = ({ search_state }) => {
  const { isOverScrollY, setIsOverScrollY } = useContext(IsOverScrollYContext);
  const [selectedItem, setSelectedItem] = useState("");
  const SearchBarRef = createRef(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { openSearchBarInOverScroll, setOpenSearchBarInOverScroll } =
    useContext(openSearchBarInOverScrollContext);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (SearchBarRef.current) {
        if (!SearchBarRef.current.contains(e.target)) {
          setSelectedItem(null);
        }
      }
    };
    const handleScrollEvent = () => {
      if (window.scrollY > 70) {
        setIsOverScrollY(true);
        setOpenSearchBarInOverScroll(false);
      } else {
        setIsOverScrollY(false);
        setOpenSearchBarInOverScroll(false);

      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScrollEvent);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScrollEvent);
    };
  }, [SearchBarRef]);

  return (
    <SearchContainer
      isOverScrollY={isOverScrollY}
      openSearchBarInOverScroll={openSearchBarInOverScroll}
    >
      <SearchBar
        search_state={search_state}
        selectedItem={selectedItem}
        ref={SearchBarRef}
        openSearchBarInOverScroll={openSearchBarInOverScroll}
      >
        <ContentWrapper
          search_state={search_state}
          visible_state="all"
          isSelectedItem={selectedItem === "위치" ? true : false}
          onClick={() => {
            setSelectedItem("위치");
          }}
        >
          <InputBox search_state={search_state}>
            <Label state="title">위치</Label>
            <Input placeholder="어디로 여행가세요?" spellCheck={false} />
          </InputBox>
          <SearchWhereDialog selectedItem={selectedItem} />
        </ContentWrapper>

        {/* ---- */}
        <ContentWrapper
          search_state={search_state}
          visible_state="숙소"
          isSelectedItem={selectedItem === "체크인" ? true : false}
          onClick={() => {
            setSelectedItem("체크인");
          }}
        >
          <ButtonBox>
            <Label state="title">체크인</Label>
            <Label state="contents" date={startDate}>
              {startDate
                ? startDate.get("month") + "월 " + startDate.get("date") + "일"
                : "날짜 입력"}
            </Label>
          </ButtonBox>
          <SearchCheckInOutDialog
            selectedItem={selectedItem}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </ContentWrapper>

        {/* ---- */}
        <ContentWrapper
          search_state={search_state}
          visible_state="숙소"
          isSelectedItem={selectedItem === "체크아웃" ? true : false}
          onClick={() => {
            setSelectedItem("체크아웃");
          }}
        >
          <ButtonBox>
            <Label state="title">체크아웃</Label>
            <Label state="contents" date={endDate}>
              {endDate
                ? endDate.get("month") + "월 " + endDate.get("date") + "일"
                : "날짜 입력"}
            </Label>
          </ButtonBox>
        </ContentWrapper>
        {/* ---- */}
        <ContentWrapper
          search_state={search_state}
          visible_state="숙소"
          isSelectedItem={selectedItem === "인원" ? true : false}
          onClick={() => {
            setSelectedItem("인원");
          }}
        >
          <ButtonBox>
            <Label state="title">인원</Label>
            <Label state="contents">게스트 추가</Label>
          </ButtonBox>
          <SearchAddGuestDialog selectedItem={selectedItem} />
        </ContentWrapper>
        {/* ---- */}
        <ContentWrapper
          search_state={search_state}
          visible_state="체험"
          isSelectedItem={selectedItem === "날짜" ? true : false}
          onClick={() => {
            setSelectedItem("날짜");
          }}
        >
          <ButtonBox>
            <Label state="title">날짜</Label>
            <Label state="contents">원하는 날짜를 입력하세요.</Label>
          </ButtonBox>
        </ContentWrapper>
        <SearchIcon selectedItem={selectedItem}>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIcon>
      </SearchBar>
    </SearchContainer>
  );
};

export default Search;
