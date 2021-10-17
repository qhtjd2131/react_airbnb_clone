import React from "react";
import styled from "styled-components";
import category1 from "../images/category1.jpg";
import category2 from "../images/category2.jpg";
import category3 from "../images/category3.jpg";
import category4 from "../images/category4.jpg";

const largeWidth = "1228px";

const RecommendationCategory = styled.div``;
const RC_Title = styled.h2`
  font-size: 40px;
`;
const RC_Contents = styled.div``;

const RC_Item = styled.div``;
const RC_ItemImage = styled.img``;
const Rc_ItemLabel = styled.label``;
const RecommendationCategoryComponent = () => {
  const RC_Items = () => {
    const categories = [
      {
        label: "자연생활을 만끽할 수 있는 숙소",
        src: { category1 },
      },
      {
        label: "독특한 공간",
        src: { category2 },
      },
      {
        label: "집 전체",
        src: { category3 },
      },
      {
        label: "반려동물 동반 가능",
        src: { category4 },
      },
    ];
    return <div>hello</div>;
  };
  return (
    <RecommendationCategory>
      <RC_Title>어디에서나, 여행은 살아보는 거야!</RC_Title>
      <RC_Contents></RC_Contents>
    </RecommendationCategory>
  );
};

export default RecommendationCategoryComponent;
