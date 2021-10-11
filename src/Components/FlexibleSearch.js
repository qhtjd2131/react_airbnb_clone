import React from "react";
import styled, { css } from "styled-components";

const FlexibleSearch = () => {
  const FlexibleSearchContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Label = styled.label`
    font-size: 23px;
    font-weight: 700;
  `;

  const FlexibleSearchButton = styled.button`
    background-color: white;
    width: 260px;
    height: 80px;
    border-radius: 40px / 50%;
    font-size: 25px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    box-shadow: 0px 6px 16px rgb(0 0 0 / 12%);
    transition: 0.3s;

    &:hover {
      box-shadow: 0px 6px 16px rgb(0 0 0 / 50%);
      transition: 0.3s;
    }
  `;

  return (
    <FlexibleSearchContainer>
      <Label>어디든 상관없이 떠나고 싶을 때 에어비앤비가 도와드립니다!</Label>
      <FlexibleSearchButton>유연한 검색</FlexibleSearchButton>
    </FlexibleSearchContainer>
  );
};

export default FlexibleSearch;
