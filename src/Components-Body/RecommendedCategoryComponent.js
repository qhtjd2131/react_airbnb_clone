import React, { createRef, useCallback, useState } from "react";
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
  display: flex;
  overflow: scroll;
  scroll-behavior: smooth;
  box-sizing: border-box;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }
`;

const Item = styled.div`
  flex: 0 0 25%; //4개의 item이 display
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;

  @media only screen and (max-width: ${largeWidth}) {
    flex: 0 0 33.333333%; //3개의 item이 display
  }
`;

const ItemImage = styled.img`
  width: 100%;
  border-radius: 15px;
`;

const ItemLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
  padding: 10px 0px;
  word-break: keep-all;

  line-height: 24px;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: pre-line;
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  display: block;
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

  ${(props) =>
    props.direction === "left" &&
    css`
      left: 0;
      transform: translate(-30%, -50%);
    `}

  ${(props) =>
    props.direction === "right" &&
    css`
      right: 0;
      transform: translate(30%, -50%);
    `}

  ${(props) =>
    props.itemsInfoLength < 5 &&
    css`
      display: none;
    `}
    ${(props) =>
    props.direction === "left" &&
    props.invisibleDirection === "left" &&
    css`
      display: none;
    `}

    ${(props) =>
    props.direction === "right" &&
    props.invisibleDirection === "right" &&
    css`
      display: none;
    `}

  @media only screen and (max-width: ${largeWidth}) {
    ${(props) =>
      props.itemsInfoLength > 3 &&
      css`
        display: block;
      `}
    ${(props) =>
      props.direction === "left" &&
      props.invisibleDirection === "left" &&
      css`
        display: none;
      `}

    ${(props) =>
      props.direction === "right" &&
      props.invisibleDirection === "right" &&
      css`
        display: none;
      `}
  }
`;

const RecommendedCategoryComponent = ({ title, itemsInfo }) => {
  const contentsWrapperRef = createRef(null);
  const [invisibleDirection, setInvisibleDirection] = useState("left");
  const itemsInfoLength = Object.keys(itemsInfo).length;

  const buttonLeftDirectionHandler = useCallback(() => {
    const a = contentsWrapperRef.current.firstChild.offsetWidth;
    if (
      0 <= contentsWrapperRef.current.scrollLeft &&
      contentsWrapperRef.current.scrollLeft < a + 10
    ) {
      setInvisibleDirection("left");
    } else {
      setInvisibleDirection("none");
    }
    contentsWrapperRef.current.scrollLeft -=
      contentsWrapperRef.current.firstChild.offsetWidth;
  }, [contentsWrapperRef]);

  const buttonRightDirectionHandler = useCallback(() => {
   
    const a =
      contentsWrapperRef.current.scrollWidth -
      contentsWrapperRef.current.firstChild.offsetWidth -
      contentsWrapperRef.current.offsetWidth;
    if (
      a - 10 < contentsWrapperRef.current.scrollLeft &&
      contentsWrapperRef.current.scrollLeft < a + 10
    ) {
      setInvisibleDirection("right");
    } else {
      setInvisibleDirection("none");
    }

    contentsWrapperRef.current.scrollLeft +=
      contentsWrapperRef.current.firstChild.offsetWidth;
  }, [contentsWrapperRef]);

  return (
    <RecommendedCategory>
      <Title>{title}</Title>
      <Box>
        <Button
          direction="left"
          invisibleDirection={invisibleDirection}
          itemsInfoLength={itemsInfoLength}
          onClick={() => buttonLeftDirectionHandler()}
        >
          {"<"}
        </Button>
        <Button
          direction="right"
          invisibleDirection={invisibleDirection}
          itemsInfoLength={itemsInfoLength}
          onClick={() => buttonRightDirectionHandler()}
        >
          {">"}
        </Button>
        <ContentsWrapper ref={contentsWrapperRef}>
          {[...itemsInfo].map((item, index) => (
            <Item key={index}>
              <ItemImage src={item.src} />
              <ItemLabel>{item.label} </ItemLabel>
            </Item>
          ))}
        </ContentsWrapper>
      </Box>
    </RecommendedCategory>
  );
};

export default RecommendedCategoryComponent;
