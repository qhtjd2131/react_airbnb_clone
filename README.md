# Getting Started with Create React App

scaleX를 사용하여 밑줄크기변경


Headerbar 에서 조건부랜더링으로 &&연산자를이용해 클래스이름을 다르게줌
Search 에서 조건부랜더링으로 styled components 사용



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
.DayPicker\_\_hidden { 
visibility: hidden;
}
스타일이 적용되어 영역은 차지하고 랜더링 되지않게되었다.
그래서 라이브러리 css파일을 다음과 같이 바꾸었다.

.DayPicker\_\_hidden {
visibility: visible;
}

그랬더니 달력이 초기에 랜더링 되지않고 state에 따라 후에 랜더링이 되더라도 정상적으로 랜더링 되는것을 확인했다.

다음과같이 라이브러리 내부파일을 직접 변경하고 github에 올린다면, 내 코드를 clone한 사람에게는 적용이 안되지 않을까?

=> css파일을 새로 생성하여 오버라이드 하는것으로 해결(공식사이트에서 권장)

어디에서, 여행은 살아보는 거야! 라는 라벨을 가진 컴포넌트인 RecommendedCategoryComponent 에서 옆으로 스크롤 할 수 있는 버튼인 buttonLeft buttonRight를 만들었다. 스크롤일 가장 끝에 위치할때는 더이상 해당방향으로 이동 할 수 없기때문에 display를 조절해야했다.

```
const [visibleDirection, setVisibleDerection] = useState("right")

const scroll = (scrollDirection) => {
    contentsRef.current.scrollLeft +=
      (scrollDirection * contentsRef.current.offsetWidth) / 3;
    visibleDirectionHandler();
  };

const visibleDirectionHandler = () => {
    visibleDirection === "right"
      ? setvisibleDirection("left")
      : setvisibleDirection("right");
};

return(
...

<Button
    direction="left"
    visibleDirection={visibleDirection}
        onClick={() => scroll(-1)} // -1 : LEFT DIRECTION  +1 : RIGHT DIRECTION
>
    {"<"}
</Button>
<Button
    direction="right"
    visibleDirection={visibleDirection}
    onClick={() => scroll(+1)}
>
    {">"}
</Button>
...
)
```

위와 같이 state를 props로 넘겨주어 조건부로 display 되게 만들었다.
하지만 이때, state가 바뀌면서 item들이 re-rendering 이 되었고, 그 때문에 scroll이 이동하지 못하여 원하던 동작이 나오지 않았다.

해결방법 : useEffect를 사용해서 해결
useEffect 의존성배열에 visibleDirection을 선언 후 다음과 같은 로직 구현

1. 버튼 클릭 시 setVisibleState() 토글형식으로 구현
2. visibleState가 바뀜에 따라 useEffect내 스크롤이동 코드 실행
3. 스크롤 이동

처음에 했던 방식이 스코를이동 -> state변경 이었다면
역으로 state변경 -> 스크롤 이동 이 되었음.

useEffect를 사용하면 컴포넌트가 생성될때 한번 실행되게되는데, 처음에 스크롤이 이동하면 안된다. 따라서 visibleState("first") 초기값을 주고 if문을 사용한 로직으로 해결

느낀점 : useEffect를 이렇게 사용해도 되려나 싶다.

==> 후에 변경된 코드임


media query로 반응형 웹을 구상하는 중에 반응의 기준점이 되는 width의 크기를 전역으로 선언하고 적용하고 싶었다. 하지만 css에서 media query의 파라미터로는 css native variables가 적용되지않았다.
즉, 아래와 같이 :root 에서 선언한 전역변수를 사용 할 수 없었다. 그 이유는 media query는 element가 아니기에 html의 요소들을 상속받을 수 없기 때문이다

:root{
    --largewidth : 1228px;
}
@media only screen and (max-width : var(--largewidth)){
    ...
}

styled components 를 사용하면 해결 가능한 문제이지만, 그렇다고 하더라도 전역변수를 담당하는 file을 import 해야하는 문제가 있다. 따라서 css preprocesser (SCSS, SASS) 를 권장한다고 한다. 다음 프로젝트에서 사용해 볼 예정이다.

--
체크인아웃 을 클릭 했을때 나타나는 다이얼로그 화면에서 날짜를 선택하면 startDate, endDate 라는 state가 변경된다. 변경된 state는 체크인아웃 컴포넌트의 label 을 변경하게된다. 하지만 그 부모 컴포넌트인 HeaderBar 컴포넌트 아래에 있는 state가 변경 될때마다 label에 나타나는 startDate, endDate가 초기화 되는 오류를 찾았다. 오류를 살펴보니, 특정 부모 Component 의 state가 변경되어 re-rendering 되었을때, 그 아래 존재하던 자식 Components가 unmount 되는 오류가 발생하였다. 
 정상적인 구조의 react라면 부모의 state가 변경되었다고해서 자식이 unmount 되는 일은 없다. 그래서 부모 컴포넌트 내에 자식 컴포넌트를 선언해 주고 있던 구조가 문제라고 생각했고 그 생각은 맞았다. 부모컴포넌트 내에 정의된 컴포넌트들은 부모가 re-rendering 될때마다 재 선언을 하게 되었고 그 결과 모든 자식 컴포넌트가 ummonut 되었다가 mount 되어 state가 초기화되는 문제였다. 따라서 컴포넌트 내에 컴포넌트를 선언하는 구조의 심각한 문제성을 깨달았으며, 비슷한 방식으로 선언된 모든 컴포넌트를 독립적으로 정의하였다.
