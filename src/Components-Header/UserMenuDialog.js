import React from "react";
import styled from "styled-components";

const UserMenuDialogCotainer = styled.div``;
const Dialog = styled.dialog`
z-index:2;
`;
const ContentsWrapper = styled.div``;
const MenuItem = styled.div``;

const UserMenuDialog = ({ isSelectedMenu }) => {
  const datas = [
    {
      id: 1,
      title: "회원가입",
    },
    {
      id: 2,
      title: "로그인",
    },
    {
      id: 3,
      title: "숙소 호스트하기",
    },
    {
      id: 4,
      title: "체험 호스팅하기",
    },
    {
      id: 5,
      title: "도움말",
    },
  ];

  const MenuItems = () => {
    return datas.map((data) => <MenuItem>{data.title}</MenuItem>);
  };
  return (
    <UserMenuDialogCotainer>
      <Dialog open={isSelectedMenu}>
        <ContentsWrapper>
            <MenuItems/>
        </ContentsWrapper>
      </Dialog>
    </UserMenuDialogCotainer>
  );
};


export default UserMenuDialog;
