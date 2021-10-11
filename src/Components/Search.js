import React from "react";
import styled, { css } from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  width: 975px;
  min-width: 975px;
  background-color: white;
  border-radius: 30px / 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  font-size: 20px;
  width: 400px;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.search_state === "숙소" &&
    css`
      width: 200px;
    `}
`;

const InputBox = styled.div`
  height: 100%;
  border: none;
  border-radius: inherit;
  width: 250px;
  box-sizing: border-box;
  padding: 0 30px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Label = styled.div`
  font-size: 18px;
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
`;

const ContentWrapper = styled.div`
  height: 100%;
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
    padding: 0;
    content: "";
    background-color: #babdbe;
  }

  &:first-child::before {
    background-color: transparent;
  }
  ${(props) =>
    props.state === "button" &&
    css`
      padding-right: 95px;
    `}
  ${(props) =>
    props.visible_state !== "all" &&
    !(props.search_state === props.visible_state) &&
    css`
      display: none;
      padding-right: 95px;
    `}
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 10px;
  width: 55px;
  height: 55px;
  display: flex;
  font-size: 27px;
  justify-content: center;
  align-items: center;
  background-color: #e64a19;
  border-radius: 50%;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #ac0800;
  }
`;

const Search = ({ search_state }) => {
  return (
    <SearchContainer>
      <SearchBar>
        <ContentWrapper search_state={search_state} visible_state="all">
          <InputBox>
            <Label>위치</Label>
            <Input
              search_state={search_state}
              placeholder="어디로 여행가세요?"
              spellCheck={false}
            />
          </InputBox>
        </ContentWrapper>
        {/* ---- */}
        <ContentWrapper
          state="button"
          search_state={search_state}
          visible_state="숙소"
        >
          <ButtonBox>
            <Label state="title">체크인</Label>
            <Label state="contents">날짜 입력</Label>
          </ButtonBox>
        </ContentWrapper>
        {/* ---- */}
        <ContentWrapper
          state="button"
          search_state={search_state}
          visible_state="숙소"
        >
          <ButtonBox>
            <Label state="title">체크아웃</Label>
            <Label state="contents">날짜 입력</Label>
          </ButtonBox>
        </ContentWrapper>
        {/* ---- */}
        <ContentWrapper
          state="button"
          search_state={search_state}
          visible_state="숙소"
        >
          <ButtonBox>
            <Label state="title">인원</Label>
            <Label state="contents">게스트 추가</Label>
          </ButtonBox>
        </ContentWrapper>
        {/* ---- */}
        <ContentWrapper
          state="button"
          search_state={search_state}
          visible_state="체험"
        >
          <ButtonBox>
            <Label state="title">날짜</Label>
            <Label state="contents">원하는 날짜를 입력하세요.</Label>
          </ButtonBox>
        </ContentWrapper>
        <SearchIcon>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIcon>
      </SearchBar>
    </SearchContainer>
  );
};

export default Search;
