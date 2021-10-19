import React, { createRef } from "react";
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
  scroll-behavior: smooth;
  box-sizing: border-box;
  scroll-snap-type: x mandatory;
`;

const Contents = styled.div`
  display: flex;
  /* flex-wrap: nowrap; */
  box-sizing: border-box;

  @media only screen and (max-width: ${largeWidth}) {
    width: 133.3333%;
    /* width: 200%; */
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
  const contentsRef = createRef(null);
  const Items = () => {
    return itemsInfo.map((item) => (
      <Item key={item.label}>
        <ItemImage src={item.src} />
        <ItemLabel>{item.label} </ItemLabel>
      </Item>
    ));
  };

  const scroll = (scrollDirection) => {
    contentsRef.current.scrollLeft +=
      (scrollDirection * contentsRef.current.offsetWidth) / 3;
  };
  return (
    <RecommendedCategory>
      <Title>{title}</Title>
      <ContentsWrapper ref={contentsRef}>
        <Contents>
          <Items />
        </Contents>
      </ContentsWrapper>
      <button onClick={() => scroll(-1)}>scroll</button>
      <button onClick={() => scroll(+1)}>scroll</button>
    </RecommendedCategory>
  );
};

export default RecommendedCategoryComponent;
