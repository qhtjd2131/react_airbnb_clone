import React from "react";
import styled from "styled-components";
import * as constants from "./Constants/footerConstants.js";
const largeWidth = "1228px";

const FooterContainer = styled.section`
  width: 100%;
  background-color: whitesmoke;
  box-sizing: border-box;
  padding: 40px 80px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 15px;
`;

const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const List = styled.li`
  margin-top: 20px;
  cursor: pointer;
  font-size: 17px;
  &:hover {
    text-decoration: underline;
  }
`;

const UnderBarContentsWrapper = styled.div`
  margin-top: 30px;
  border-top: 1px solid rgb(221, 221, 221);
  display: flex;
  align-items: center;
`;

const UnderBarContents = styled.div`
  padding: 24px 0px;
  display: flex;
  align-items: center;
`;
const UnderBarLabel = styled.label`
  margin: 0;
  padding: 0;
  margin-right: 30px;

`;

const UnderBarListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const UnderBarList = styled.li`
  float: left;
  margin: 0;
  margin-right: 15px;
  padding: 0;
`;

const Footer = () => {
  const ListItem = ({ title, items }) => {
    console.log("title:", title);
    console.log("items :", items);

    return (
      <BlockWrapper>
        <Label>{title}</Label>
        <ListContainer>
          {items.map((item) => (
            <List key={item.id}>{item.label}</List>
          ))}
        </ListContainer>
      </BlockWrapper>
    );
  };

  return (
    <FooterContainer>
      <ContentWrapper>
        {console.log(constants.introduction)}
        <ListItem
          title={constants.introduction_title}
          items={constants.introduction}
        />
        <ListItem
          title={constants.community_title}
          items={constants.community}
        />
        <ListItem title={constants.hosting_title} items={constants.hosting} />
        <ListItem
          title={constants.airbnbSupport_title}
          items={constants.airbnbSupport}
        />
      </ContentWrapper>
      <UnderBarContentsWrapper>
        <UnderBarContents>
          <UnderBarLabel>© 2021 Airbnb, Inc.</UnderBarLabel>
          <UnderBarListContainer>
            <UnderBarList>· 개인정보 처리방침</UnderBarList>
            <UnderBarList>· 이용약관</UnderBarList>
            <UnderBarList>· 사이트맵</UnderBarList>
            <UnderBarList>· 한국의 변경된 환불 정책</UnderBarList>
            <UnderBarList>· 회사 세부정보</UnderBarList>
          </UnderBarListContainer>
        </UnderBarContents>
      </UnderBarContentsWrapper>
    </FooterContainer>
  );
};

export default Footer;
