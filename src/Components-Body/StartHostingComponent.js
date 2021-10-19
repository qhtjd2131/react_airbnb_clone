import React from "react";
import styled from "styled-components";
import bg_image from "../images/startHosting.jpg";
const largeWidth = "1228px";

const StartHosting = styled.div`
  border-radius: 20px;
  background-image: url(${bg_image});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 60vh;
  @media only screen and (max-width: ${largeWidth}) {
    height: 50vh;
  }
`;
const StartHostingContentsWrapper = styled.div`
  width: 324px;
  height: 100%;
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StartHostingTitle = styled.h1`
  margin: 0;
  font-size: 40px;
  color: white;
`;
const StartHostingSubTitle = styled.h2`
  margin: 20px 0;
  color: white;
  font-size: 18px;
  font-weight: 200;
`;
const StartHostingMoreInfoButton = styled.button`
  width: 180px;
  height: 40px;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  border: none;
  background-color: white;
  border-radius: 5px;
`;
const StartHostingComponent = () => {
  return (
    <StartHosting>
      <StartHostingContentsWrapper>
        <StartHostingTitle>호스팅 시작하기</StartHostingTitle>
        <StartHostingSubTitle>
          집을 공유하여 부수입을 올리고 새로운 가능성을 만나세요.
        </StartHostingSubTitle>
        <StartHostingMoreInfoButton>자세히 알아보기</StartHostingMoreInfoButton>
      </StartHostingContentsWrapper>
    </StartHosting>
  );
};

export default StartHostingComponent;
