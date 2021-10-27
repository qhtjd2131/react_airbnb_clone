import React from "react";
import styled from "styled-components";

const SearchWhereDialogContainer = styled.div``;
const Dialog = styled.dialog`
  position: absolute;
  top: 100px;
  width: 600px;
  height: 200px;
  border-radius: 40px;
  background-color: white;
  border: none;
  box-shadow: 0px 6px 16px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  padding: 30px;
  z-index: 999;
`;

const DialogContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.div`
  font-size: 17px;
  font-weight: 700;
  padding: 30px 0px;
`;

const Button = styled.button`
  border: 1px solid #ededed;
  background-color: white;
  box-shadow: 0px 6px 16px rgb(0 0 0 / 15%);
  height: 80px;
  border-radius: 30px/50%;
  color: purple;
  font-size: 25px;
  font-weight: 700;
  text-align: start;
  box-sizing: border-box;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &::after {
    content: ">";
    font-weight: 700;
  }
`;

const SearchWhereDialog = ({ selectedItem }) => {
  return (
    <SearchWhereDialogContainer>
      <Dialog open={selectedItem === "위치" ? true : false}>
        <DialogContentsWrapper>
          <Label>언제 어디로든 떠나는 여행</Label>
          <Button>유연한 검색</Button>
        </DialogContentsWrapper>
      </Dialog>
    </SearchWhereDialogContainer>
  );
};

export default SearchWhereDialog;
