import React from "react";
import styled from "styled-components";

const RecommendedCategory = styled.div`
  padding: 60px 0px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 40px;
`;

const ContentsWrapper = styled.div`
  width: inherit;
  box-sizing: border-box;
`;

const Contents = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
`;

const ItemImage = styled.img`
  width: 100%;
  border-radius: 15px;
  box-sizing: border-box;
`;

const ItemLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
  padding: 10px 0px;
  word-break: keep-all;

  box-sizing: border-box;

  line-height: 24px;
  max-height: 62px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ItemSubLabel = styled.label`
  font-size: 17px;
  word-break: keep-all;
`;

const RecommendedCategoryComponent = ({ title, itemsInfo }) => {
  const Items = () => {
    return itemsInfo.map((item) => (
      <Item key={item.label}>
        <ItemImage src={item.src} />
        <ItemLabel>{item.label} </ItemLabel>
        <ItemSubLabel>{item.subLabel}</ItemSubLabel>
      </Item>
    ));
  };
  return (
    <RecommendedCategory>
      <Title>{title}</Title>
      <ContentsWrapper>
        <Contents>
          <Items />
        </Contents>
      </ContentsWrapper>
    </RecommendedCategory>
  );
};

export default RecommendedCategoryComponent;
