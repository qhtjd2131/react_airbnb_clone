import React from "react";
import styled from "styled-components";
import NearbyTravelComponent from "./NearbyTravelComponent";
import RecommendedCategoryComponent from "./RecommendedCategoryComponent";
import RecommendedExperienceCategory from "./RecommendedExperienceCategory";
import StartHostingComponent from "./StartHostingComponent";
import category1 from "../images/category1.jpg";
import category2 from "../images/category2.jpg";
import category3 from "../images/category3.jpg";
import category4 from "../images/category4.jpg";

const BodyWrapper = styled.section`
  padding: 20px 80px;
  margin: 0;
  width: inherit;
  overflow: hidden;
`;
const Body = () => {
  const title_1 = "어디에서나, 여행은 살아보는 거야!";
  const categories_1 = [
    {
      label: "자연생활을 만끽할 수 있는 숙소",
      src: category1,
    },
    {
      label: "독특한 공간",
      src: category2,
    },
    {
      label: "집 전체",
      src: category3,
    },
    {
      label: "반려동물 동반 가능",
      src: category4,
    },
    {
      label: "자연생활을 만끽할 수 있는 숙소",
      src: category1,
    },
    {
      label: "독특한 공간",
      src: category2,
    },
    {
      label: "집 전체",
      src: category3,
    },
    {
      label: "반려동물 동반 가능",
      src: category4,
    },
  ];

  const title_2 = "특별한 즐길 거리를 찾아보세요";
  const categories_2 = [
    {
      label: "체험",
      subLabel: "가까운 곳에서 즐길 수 있는 잊지 못할 체험을 찾아보세요.",
      src: category1,
    },
    {
      label: "온라인 체험",
      subLabel: "호스트와 실시간으로 소통하면서 액티비티를 즐겨보세요.",
      src: category2,
    },
    {
      label: "추천 컬렉션:여행 본능을 깨우는 체험",
      subLabel: "온라인 체험으로 집에서 랜선 여행을 즐기세요.",
      src: category3,
    },
  ];
  return (
    <BodyWrapper>
      <NearbyTravelComponent />
      <RecommendedCategoryComponent title={title_1} itemsInfo={categories_1} />
      <StartHostingComponent />
      <RecommendedExperienceCategory title={title_2} itemsInfo={categories_2} />
    </BodyWrapper>
  );
};

export default Body;
