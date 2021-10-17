import React from "react";
import styled from "styled-components";
import category1 from "../images/category1.jpg";
import category2 from "../images/category2.jpg";
import category3 from "../images/category3.jpg";
import category4 from "../images/category4.jpg";

const largeWidth = "1228px";

const RecommendationCategory = styled.div`
  margin-top: 80px;
  box-sizing: border-box;
`;
const RC_Title = styled.h2`
  font-size: 40px;
`;
const RC_Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  overflow-x: auto;

  @media only screen and (max-width: ${largeWidth}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const RC_Item = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${largeWidth}) {
    &:last-child {
      display: none;
    }
  }
`;
const RC_ItemImage = styled.img`
  width: 100%;
  padding: 8px;
  border-radius: 15px;
  box-sizing: border-box;
`;
const Rc_ItemLabel = styled.label`
  font-size: 25px;
  font-weight: 600;
`;

const RecommendationCategoryComponent = () => {
  const RC_Items = () => {
    const categories = [
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
    return categories.map((category) => (
      <RC_Item>
        <RC_ItemImage src={category.src} />
        <Rc_ItemLabel>{category.label} </Rc_ItemLabel>
      </RC_Item>
    ));
  };
  return (
    <RecommendationCategory>
      <RC_Title>어디에서나, 여행은 살아보는 거야!</RC_Title>
      <RC_Contents>
        <RC_Items />
      </RC_Contents>
    </RecommendationCategory>
  );
};

export default RecommendationCategoryComponent;
