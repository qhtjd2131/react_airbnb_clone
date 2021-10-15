import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const SearchCheckInOutDialogContainer = styled.div`
  width: fit-content;
  height: fit-content;
`;

const Dialog = styled.dialog`
  position: absolute;
  top: 100px;
  left: -330px;
  width: 1036px;
  height: 600px;
  box-sizing: border-box;
  margin: 0;
  padding: 30px;
  /* visibility: visible; */
`;

const DialogContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchCheckInOutDialog = ({ selectedItem }) => {
  console.log("checkinout dialog :", selectedItem);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <SearchCheckInOutDialogContainer>
      <Dialog
        open={
          selectedItem === "체크인" || selectedItem === "체크아웃"
            ? true
            : false
        }
      >
        <DialogContentsWrapper>
          <DayPickerRangeController numberOfMonths={2} />
        </DialogContentsWrapper>
      </Dialog>
    </SearchCheckInOutDialogContainer>
  );
};

export default SearchCheckInOutDialog;
