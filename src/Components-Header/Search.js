import React, { useState } from "react";
import styled, { css } from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchWhereDialog from "./SearchWhereDialog";
import SearchCheckInOutDialog from "./SearchCheckInDialog";

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.div`
  position: relative;
  height: 70px;
  margin: 0 120px;
  width: fit-content;
  min-width: 1020px;
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
    css`
      grid-template-columns: 6fr 4fr 4fr 6fr;
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
  font-size: 18px;
  width: 100%;
  text-align: left;
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
    width: 2px;
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
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <SearchContainer>
      <SearchBar search_state={search_state} selectedItem={selectedItem}>
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
          // state="button"
          search_state={search_state}
          visible_state="숙소"
          isSelectedItem={selectedItem === "체크인" ? true : false}
          onClick={() => {
            setSelectedItem("체크인");
          }}
        >
          <ButtonBox>
            <Label state="title">체크인</Label>
            <Label state="contents">날짜 입력</Label>
          </ButtonBox>
          <SearchCheckInOutDialog selectedItem={selectedItem} />
        </ContentWrapper>

        {/* ---- */}
        <ContentWrapper
          // state="button"
          search_state={search_state}
          visible_state="숙소"
          isSelectedItem={selectedItem === "체크아웃" ? true : false}
          onClick={() => {
            setSelectedItem("체크아웃");
          }}
        >
          <ButtonBox>
            <Label state="title">체크아웃</Label>
            <Label state="contents">날짜 입력</Label>
          </ButtonBox>
          {/* <SearchCheckInOutDialog selectedItem={selectedItem} /> */}
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
        </ContentWrapper>
        {/* ---- */}
        <ContentWrapper
          // state="button"
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
