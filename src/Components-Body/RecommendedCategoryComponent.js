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

const Contents = styled.div`
  display: flex;
  overflow: scroll;
  box-sizing: border-box;
  @media only screen and (max-width: ${largeWidth}) {
    // width: 133.3333%;
    /* width: 200%; */
  }
`;

const Item = styled.div`
  flex: 0 0 25%;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  width: 100%;
  @media only screen and (max-width: ${largeWidth}) {
    flex: 0 0 33.333333%;
  }
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
`;

const RecommendedCategoryComponent = ({ title, itemsInfo }) => {
  const contentsWrapperRef = createRef(null);
  const [invisibleDirection, setInvisibleDirection] = useState("left");
  const itemsInfoLength = Object.keys(itemsInfo).length;

  useEffect(() => {
    // if (invisibleDirection === "right") {
    //   contentsWrapperRef.current.scrollLeft -=
    //     contentsWrapperRef.current.offsetWidth / 3;
    // } else if (invisibleDirection === "left") {
    //   contentsWrapperRef.current.scrollLeft +=
    //     contentsWrapperRef.current.offsetWidth / 3;
    // }
  }, [invisibleDirection, contentsWrapperRef]);

  const buttonLeftDirectionHandler = () => {
    if (contentsWrapperRef.current.scrollLeft === 0) {
      setInvisibleDirection("left");
      console.log("left end");
    }
    contentsWrapperRef.current.scrollLeft -=
      contentsWrapperRef.current.offsetWidth / 3;
  };

  const buttonRightDirectionHandler = () => {
    if (
      contentsWrapperRef.current.scrollLeft ===
      contentsWrapperRef.current.scrollWidth -
        contentsWrapperRef.current.offsetWidth
    ) {
      setInvisibleDirection("right");
      console.log("right end");
    }
    contentsWrapperRef.current.scrollLeft +=
      contentsWrapperRef.current.offsetWidth / 3;
  };

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
          {/* <Contents> */}
          {[...itemsInfo].map((item, index) => (
            <Item key={`${index}`}>
              <ItemImage src={item.src} />
              <ItemLabel>{item.label} </ItemLabel>
            </Item>
          ))}
          {/* </Contents> */}
        </ContentsWrapper>
      </Box>
    </RecommendedCategory>
  );
};

export default RecommendedCategoryComponent;
