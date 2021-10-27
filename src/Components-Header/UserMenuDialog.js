import React, { createRef, useEffect } from "react";
import styled, { css } from "styled-components";

const UserMenuDialogCotainer = styled.div``;
const Dialog = styled.dialog`
  position: absolute;
  transform: translateX(-100%);
  top: 60px;
  left: 90px;
  z-index: 992;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 6px 16px rgb(0 0 0 / 12%);
  font-weight: 400;
  padding: 0;
  font-size: 19px;
`;
const ContentsWrapper = styled.div`
  padding: 20px 0px;
  margin: 0;
`;
const MenuItem = styled.div`
  width: 300px;
  padding: 10px 20px;
  cursor: pointer;
  box-sizing: border-box;

  ${(props) =>
    props.title === "회원가입" &&
    css`
      font-weight: 700;
    `}

  &:hover {
    background-color: whitesmoke;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: gray;
  margin: 10px 0px;
  cursor: none;
`;
const MenuItems = () => {
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
      title: "Line",
    },
    {
      id: 4,
      title: "숙소 호스트하기",
    },
    {
      id: 5,
      title: "체험 호스팅하기",
    },
    {
      id: 6,
      title: "도움말",
    },
  ];
  return datas.map((data) =>
    data.title === "Line" ? (
      <Line key={data.id} />
    ) : (
      <MenuItem key={data.id} title={data.title}>
        {data.title}
      </MenuItem>
    )
  );
};
const UserMenuDialog = ({ isSelectedMenu, setIsSelectedMenu }) => {
  // const DialogRef = createRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (DialogRef.current) {
      
  //       if (!DialogRef.current.contains(e.target)) {
  //         setIsSelectedMenu(false);
  //       }
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [DialogRef]);

  return (
    <UserMenuDialogCotainer>
      <Dialog open={isSelectedMenu}>
        <ContentsWrapper>
          <MenuItems />
        </ContentsWrapper>
      </Dialog>
    </UserMenuDialogCotainer>
  );
};

export default UserMenuDialog;
