import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const SearchAddGuestDialogContainer = styled.div`
  z-index:2;
`;
const Dialog = styled.dialog`
  position: absolute;
  top: 100px;
  left: -180px;

  width: 400px;
  padding: 20px 40px;

  border: none;
  border-radius: 40px;
  box-shadow: 0px 6px 20px rgb(0 0 0 / 20%);
`;
const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddGuestItem = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  font-size: 18px;
  padding: 15px 0px;
`;
const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainLabel = styled.label`
  font-weight: 700;
`;
const SubLabel = styled.label`
  font-size: 16px;
  color: gray;
  font-weight: 400;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const buttonStyles = css`
  border: none;
  background-color: transparent;
  width: 40px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
    border-radius: 50%;
  }
`;

const AddButton = styled.button(buttonStyles);
const SubstractButton = styled.button(buttonStyles);

const CountLabel = styled.label`
  font-size: 22px;
  padding: 0px 12px;
`;

const SearchAddGuestDialog = ({ selectedItem }) => {
  const datas = [
    {
      guestType: "성인",
      description: "만 13세 이상",
    },
    {
      guestType: "어린이",
      description: "만 2~12세",
    },
    {
      guestType: "유아",
      description: "만 2세 미만",
    },
  ];

  const AddGuestItems = () => {
    const [numberOfAdult, setNumberOfAdult] = useState(0);
    const [numberOfKid, setNumberOfKid] = useState(0);
    const [numberOfBaby, setNumberOfBaby] = useState(0);

    const getGuestTypeCount = (guestType) => {
      if (guestType === "성인") {
        return numberOfAdult;
      } else if (guestType === "어린이") {
        return numberOfKid;
      } else if (guestType === "유아") {
        return numberOfBaby;
      } else {
        return null;
      }
    };
    return datas.map((data) => (
      <AddGuestItem key={data.guestType}>
        <LabelWrapper>
          <MainLabel>{data.guestType}</MainLabel>
          <SubLabel>{data.description}</SubLabel>
        </LabelWrapper>
        <ButtonContainer>
          <SubstractButton
            onClick={() => {
              data.guestType === "성인" && setNumberOfAdult(numberOfAdult - 1);
              data.guestType === "어린이" && setNumberOfKid(numberOfKid - 1);
              data.guestType === "유아" && setNumberOfBaby(numberOfBaby - 1);
            }}
          >
            <FontAwesomeIcon icon={faMinus} />
          </SubstractButton>
          <CountLabel>{getGuestTypeCount(data.guestType)}</CountLabel>
          <AddButton
            onClick={() => {
              data.guestType === "성인" && setNumberOfAdult(numberOfAdult + 1);
              data.guestType === "어린이" && setNumberOfKid(numberOfKid + 1);
              data.guestType === "유아" && setNumberOfBaby(numberOfBaby + 1);
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </AddButton>
        </ButtonContainer>
      </AddGuestItem>
    ));
  };

  return (
    <SearchAddGuestDialogContainer>
      <Dialog open={selectedItem === "인원"}>
        <ContentsWrapper>
          <AddGuestItems />
        </ContentsWrapper>
      </Dialog>
    </SearchAddGuestDialogContainer>
  );
};

export default SearchAddGuestDialog;
