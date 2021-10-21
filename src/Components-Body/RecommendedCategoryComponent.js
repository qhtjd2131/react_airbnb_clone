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
  margin: 0;
  padding: 0;
  display: none;
  border-radius: 50%;
  border: 1px solid whitesmoke;
  box-shadow: 0px 6px 16px rgb(0 0 0 / 15%);
  background-color: white;
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 6px 16px rgb(0 0 0 / 50%);
  }

  @media only screen and (max-width: ${largeWidth}) {
    ${(props) =>
      props.direction === "left" &&
      props.visibleDirection === "left" &&
      css`
        display: block;
        left: 0;
        transform: translate(-30%, -50%);
      `}

    ${(props) =>
      props.direction === "right" &&
      (props.visibleDirection === "right" ||
        props.visibleDirection === "first") &&
      css`
        display: block;
        right: 0;
        transform: translate(30%, -50%);
      `}
  }
`;

const RecommendedCategoryComponent = ({ title, itemsInfo }) => {
  const contentsRef = createRef(null);
  const [visibleDirection, setvisibleDirection] = useState("first");

  const Items = () => {
    return itemsInfo.map((item) => (
      <Item key={item.label}>
        <ItemImage src={item.src} />
        <ItemLabel>{item.label} </ItemLabel>
      </Item>
    ));
  };

  useEffect(() => {
    if (visibleDirection === "right") {
      contentsRef.current.scrollLeft -= contentsRef.current.offsetWidth / 3;
    } else if (visibleDirection === "left") {
      contentsRef.current.scrollLeft += contentsRef.current.offsetWidth / 3;
    }
  }, [visibleDirection, contentsRef]);

  const visibleDirectionHandler = () => {
    visibleDirection === "left"
      ? setvisibleDirection("right")
      : setvisibleDirection("left");
  };

  return (
    <>
      <RecommendedCategory>
        <Title>{title}</Title>
        {console.log(visibleDirection)}
        <Box>
          <Button
            direction="left"
            visibleDirection={visibleDirection}
            onClick={() => visibleDirectionHandler()}
          >
            {"<"}
          </Button>
          <Button
            direction="right"
            visibleDirection={visibleDirection}
            onClick={() => visibleDirectionHandler()}
          >
            {">"}
          </Button>
          <ContentsWrapper ref={contentsRef}>
            <Contents>
              <Items />
            </Contents>
          </ContentsWrapper>
        </Box>
      </RecommendedCategory>
    </>
  );
};

export default RecommendedCategoryComponent;
