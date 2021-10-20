import { faSortNumericDown } from "@fortawesome/free-solid-svg-icons";
import React, { createRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";

const largeWidth = "1228px";

const RecommendedCategory = styled.div`
  padding: 60px 0px;
  box-sizing: border-box;
`;

const Box = styled.div`
  position: relative;
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

  &::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }
`;

const Contents = styled.div`
  display: flex;
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

const Button = styled.button`
  display: none;
  position: absolute;
  width: 32px;
  height: 32px;
  top: 50%;
  transform: translateY(-50%);
  ${(props) =>
    props.direction === "left" &&
    props.visibleDirection === "left" &&
    css`
      display: block;
      left: 0;
    `}

  ${(props) =>
    props.direction === "right" &&
    props.visibleDirection === "right" &&
    css`
      display: block;
      right: 0%;
      /* transform: translate(10%, -50%); */
    `}

    @media only screen and (max-width: ${largeWidth}) {
    /* display: block; */
  }
`;

const RecommendedCategoryComponent = ({ title, itemsInfo }) => {
  const contentsRef = createRef(null);
  const [visibleDirection, setvisibleDirection] = useState("right");

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

    visibleDirectionHandler();
  };

  const visibleDirectionHandler = () => {
    console.log("visibledirection:", visibleDirection);
    visibleDirection === "right"
      ? setvisibleDirection("left")
      : setvisibleDirection("right");
  };

  return (
    <RecommendedCategory>
      {console.log(" rerendering")}

      <Title>{title}</Title>
      <Box>
        <Button
          direction="left"
          visibleDirection={visibleDirection}
          onClick={() => scroll(-1)}
        >
          {"<"}
          {console.log("button rerendering")}
        </Button>
        <Button
          direction="right"
          visibleDirection={visibleDirection}
          onClick={() => scroll(+1)}
        >
          {">"}
        </Button>
        <ContentsWrapper ref={contentsRef}>
          {console.log(" rerendering")}

          <Contents>
            <Items />
          </Contents>
        </ContentsWrapper>
      </Box>
    </RecommendedCategory>
  );
};

export default RecommendedCategoryComponent;
