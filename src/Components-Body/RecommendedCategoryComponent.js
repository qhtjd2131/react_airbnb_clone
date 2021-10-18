import React from "react";
import styled from "styled-components";

const largeWidth = "1228px";

const RecommendedCategory = styled.div`
  padding: 60px 0px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 40px;
`;

const ContentsWrapper = styled.div`
  width: inherit;
  overflow: scroll;
  box-sizing: border-box;
  scroll-snap-type: x mandatory;
`;

const Contents = styled.div`
  display: flex;
  /* flex-wrap: nowrap; */
  box-sizing: border-box;

  @media only screen and (max-width: ${largeWidth}) {
    width: 133.3333%;
    /* width:166.6666%; */
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  width: 100%;

`;

const ItemImage = styled.img`
  width: 100%;
  padding: 8px;
  border-radius: 15px;
  box-sizing: border-box;
`;

const ItemLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

const RecommendedCategoryComponent = ({ title, itemsInfo }) => {
  const Items = () => {
    return itemsInfo.map((item) => (
      <Item key={item.label}>
        <ItemImage src={item.src} />
        <ItemLabel>{item.label} </ItemLabel>
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
