import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";
import moment from "moment";
import "moment/locale/ko";
import { START_DATE } from "react-dates/src/constants.js";

const SearchCheckInOutDialogContainer = styled.div``;

const Dialog = styled.dialog`
  z-index: 990;

  position: absolute;
  top: 100px;
  left: -312px;
  width: 1036px;
  height: 600px;
  box-sizing: border-box;
  border-radius: 30px;
  border: none;
  box-shadow: 0px 6px 16px rgb(0 0 0 / 12%);
  margin: 0;
  padding: 30px;
`;

const DialogContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchCheckInOutDialog = ({
  selectedItem,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  const [focusedInput, setFocusedInput] = useState(START_DATE);

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
            horizontalMonthPadding={27}
            isOutsideRange={(day) => day.isBefore(moment().subtract(1, "days"))}
            monthFormat="YYYY년 MM월"
            startDate={startDate}
            endDate={endDate}
            onDatesChange={({ startDate, endDate }) => {
              setStartDate(startDate);
              setEndDate(endDate);
            }}
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => {
              setFocusedInput(!focusedInput ? START_DATE : focusedInput);
            }}
            initialVisibleMonth={() => moment()}
          />
        </DialogContentsWrapper>
      </Dialog>
    </SearchCheckInOutDialogContainer>
  );
};

export default SearchCheckInOutDialog;
