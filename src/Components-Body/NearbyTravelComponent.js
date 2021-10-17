import React from "react";
import styled from "styled-components";
import seoul from "../images/seoul.jpg";
import busan from "../images/busan.jpg";
import daegu from "../images/daegu.jpg";
const largeWidth = "1228px";

const NearbyTravel = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  margin: 0;
`;
const NearbyTravelTitle = styled.h2`
  font-size: 40px;
`;
const NearbyTravelContents = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  overflow-x: auto;
  grid-auto-flow: row;

  @media only screen and (max-width: ${largeWidth}) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: column;
  }
`;
const NearbyTravelCityItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  border-radius: 15px;

  @media only screen and (max-width: ${largeWidth}) {
    &:last-child,
    &:nth-last-child(2) {
      display: none;
    }
  }
`;
const NearbyTravelCityImage = styled.img`
  border-radius: inherit;
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;
const NearbyTravelCityInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
const NearbyTravelCityName = styled.label`
  width: 100%;
  font-weight: 500;
  font-size: 20px;
`;
const NearbyTravelTimeByCar = styled.label`
  width: 100%;
  font-size: 20px;
  font-weight: 100;
  color: gray;
`;

const NearbyTravelComponent = () => {
  const NearbyTravelItems = () => {
    const NearbyTravelCities = [
      {
        cityName: "서울",
        hourByCar: 4,
        src: seoul,
      },
      {
        cityName: "부산",
        hourByCar: 1.5,
        src: busan,
      },
      {
        cityName: "대구",
        hourByCar: 1,
        src: daegu,
      },
      {
        cityName: "서울",
        hourByCar: 4,
        src: seoul,
      },
      {
        cityName: "부산",
        hourByCar: 1.5,
        src: busan,
      },
      {
        cityName: "대구",
        hourByCar: 1,
        src: daegu,
      },
      {
        cityName: "부산",
        hourByCar: 1.5,
        src: busan,
      },
      {
        cityName: "대구",
        hourByCar: 1,
        src: daegu,
      },
    ];
    return NearbyTravelCities.map((city) => (
      <NearbyTravelCityItem>
        <NearbyTravelCityImage src={city.src} />
        <NearbyTravelCityInfo>
          <NearbyTravelCityName>{city.cityName}</NearbyTravelCityName>
          <NearbyTravelTimeByCar>
            차로 {city.hourByCar} 시간 거리
          </NearbyTravelTimeByCar>
        </NearbyTravelCityInfo>
      </NearbyTravelCityItem>
    ));
  };
  return (
    <NearbyTravel>
      <NearbyTravelTitle>가까운 여행지 둘러보기</NearbyTravelTitle>
      <NearbyTravelContents>
        <NearbyTravelItems />
      </NearbyTravelContents>
    </NearbyTravel>
  );
};

export default NearbyTravelComponent;
