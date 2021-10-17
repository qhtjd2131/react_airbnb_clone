import React from "react";
import styled from "styled-components";
import NearbyTravelComponent from "./NearbyTravelComponent";
import RecommendationCategoryComponent from "./RecommendationCategoryComponent";
const BodyWrapper = styled.section`
  padding: 0px 80px;
  margin: 0;
  width: inherit;
`;
const Body = () => {
  return (
    <BodyWrapper>
      <NearbyTravelComponent />
      <RecommendationCategoryComponent />
    </BodyWrapper>
  );
};

export default Body;
