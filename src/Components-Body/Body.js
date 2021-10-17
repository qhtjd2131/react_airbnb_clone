import React from "react";
import styled from "styled-components";
import NearbyTravelComponent from "./NearbyTravelComponent";
import RecommendationCategoryComponent from "./RecommendationCategoryComponent";
import StartHostingComponent from "./StartHostingComponent";
const BodyWrapper = styled.section`
  padding: 20px 80px;
  margin: 0;
  width: inherit;
`;
const Body = () => {
  return (
    <BodyWrapper>
      <NearbyTravelComponent />
      <RecommendationCategoryComponent />
      <StartHostingComponent />
    </BodyWrapper>
  );
};

export default Body;
