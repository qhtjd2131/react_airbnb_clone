import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./react-dates-style.css";
import moment from "moment";
import "moment/locale/ko";
import { START_DATE, END_DATE } from "react-dates/src/constants.js";

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
  visibility: visible;
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
  const [focusedInput, setFocusedInput] = useState(START_DATE);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    moment.locale("ko");
  }, []);

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
          <DayPickerRangeController
            numberOfMonths={2}
            daySize={64}
            startDate={startDate}
            endDate={endDate}
            onDatesChange={({ startDate, endDate }) => {
              console.log("onDatesChange excute-------------------------");
              console.log("startDate :", startDate);
              console.log("endDate :", endDate);
              console.log("---------------------------------------------");
              setStartDate(startDate);
              setEndDate(endDate);
            }}
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => {
              setFocusedInput(!focusedInput ? START_DATE : focusedInput);
              console.log("onFocusChange----------------");
              console.log("focusedInput :", focusedInput);
            }}
            initialVisibleMonth={() => moment()}
          />
        </DialogContentsWrapper>
      </Dialog>
    </SearchCheckInOutDialogContainer>
  );
};

export default SearchCheckInOutDialog;
