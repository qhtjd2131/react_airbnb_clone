# Getting Started with Create React App

scaleX를 사용하여 밑줄크기변경

headerbar 에서 조건부랜더링으로 &&연산자를이용해 클래스이름을 다르게줌
searchbar 에서 조건부랜더링으로 styled components 사용

react-dates 라이브러리에서 DayPickerRangeController 컴포넌트가 랜더링 되지 않는 문제가 있음.
정확하게는 dialog태그안에 달력이 조건부로 보여지게 하기 위해서 dialog의 open property를 open={false}로 초기값을 정의해주었는데, open={true} 로 변경되어도 dialog만 랜더링되고 DayPickerRangeController 컴포넌트는 랜더링 되지 않았다.
초기값을 open={true} 로 주었을때는 랜더링이 잘되었고, 이후에 false로 바꾸고 다시 true로 바꿔도 정상작동하였다.

그리고 아래와 같은 오류가 떴음.
react-dom.development.js:67 Warning: componentWillReceiveProps 오류
검색해보니 이는 라이브러리 내부코딩의 문제여서 업데이트를 기다리거나 직접수정할 수 밖에없음. 하지만 내부 로직을 모르고 직접수정하기엔 한계가 있음. 따라서 stack over flow 에서는 피할 수 없는 오류라고 설명하기도 하였음.

하지만 아직 랜더링되지않는 문제가 남아있음.
2일동안 많은자료를 찾아보고 변경해보아도 해결이 되지 않았음.
그러다가 브라우저에서 캘린더가 영역은 차지하면서도 보이지 않는다는것을 알아 낸 후 크롬개발자도구를 이용하여 어떤스타일인지 확인해보았는데,
캘린더가 초기에 랜더링되지않으면,
.DayPicker__hidden {
visibility: hidden;
}
스타일이 적용되어 영역은 차지하고 랜더링 되지않게되었다.
그래서 라이브러리 css파일을 다음과 같이 바꾸었다.

.DayPicker__hidden {
visibility: visible;
}

그랬더니 달력이 초기에 랜더링 되지않고 state에 따라 후에 랜더링이 되더라도 정상적으로 랜더링 되는것을 확인했다.
