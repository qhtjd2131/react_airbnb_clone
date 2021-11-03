# Airbnb Clone Coding

## 소개

Window 환경에서 create-react-app 을 사용하여 Airbnb main page를 클론코딩했습니다.
Chrome 을 기준으로 개발했기 때문에, 다른 브라우저와 호환이 되지 않을 수 도 있습니다.

Airbnb : https://www.airbnb.co.kr/

myAirbnb(clone) : https://qhtjd2131.github.io/react_airbnb_clone/

### 시작하기

```
npm install
npm run start
```

---

### 기술 스택

**1. HTML5**

**2. CSS3**

- 효율적인 조건부 스타일링을 위해 기존에 .css 파일을 import하는 방법 대신에 styled-components 라이브러리를 사용하여 스타일링 하였음.

- transform : scale(), transition 을 이용하여 airbnb의 애니메이션을 구현함.


**3. CRA (create-react-app)**

(auto installed by CRA)

- webpack (bundler)

- babel

- others..

**4. React Library**

- react-dates (https://github.com/airbnb/react-dates)
  체크인, 체크아웃을 위해 dates 를 선택할 수 있는 기능
- moment (https://momentjs.com/)
  react-dates 에서 선택한 dates 객체가 moment 형태로 반환됨
- styled-components (https://github.com/styled-components/styled-components)
  다양한 스타일 방법 경험과 효율적인 조건부 스타일링을 위하여 사용

- gh-pages (https://www.npmjs.com/package/gh-pages)
  github의 호스팅 서비스 이용하기

- font-awesome (https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)
  user icon, menu icon, airbnb logo 등 다양한 아이콘을 적용하기 위해 사용.

### Dependencies

```
"dependencies": {

"@fortawesome/fontawesome-svg-core": "^1.2.36",

"@fortawesome/free-brands-svg-icons": "^5.15.4",

"@fortawesome/free-solid-svg-icons": "^5.15.4",

"@testing-library/jest-dom": "^5.11.4",

"@testing-library/react": "^11.1.0",

"@testing-library/user-event": "^12.1.10",

"font-awesome": "^4.7.0",

"gh-pages": "^3.2.3",

"moment": "^2.29.1",

"react": "^17.0.2",

"react-dates": "^21.8.0",

"react-dom": "^17.0.2",

"react-scripts": "4.0.3",

"styled-components": "^5.3.1",

"web-vitals": "^1.0.1"

}
```

---

### 겪었던 어려움

#### 문제 1. (Underbar Styling in SearchBar)

![ezgif com-gif-maker](https://user-images.githubusercontent.com/34260967/139791578-8fc9b18e-34fb-4d84-a144-136d32224850.gif)

**내용** :
Header 부분 SearchBar 컴포넌트 아이템에 마우스 포인터 hover 시 밑줄 애니메이션 효과 구현

**해결** :  
처음엔 border-bottom 과 transition 을 이용하여 구현하려고 했지만, 하얀 선이 가운데서부터 양끝으로 퍼져나가는 애니메이션을 구현하지 못하였다.

그래서 구글링하여 찾은 방법은 :after 을 사용해 만든 밑줄 컴포넌트를 transform : scaleX() 를 통해 width의 크기를 줄이거나 늘리는 것이다.
이때 :after의 상위 컴포넌트는

```
display : inline-block
```

또는,

```
display:flex
flex-direction : column
```

을 이용하여 :after 컴포넌트가 바로 아래 배치되게 해야한다.

```
&:after {
	display: block;
	content: "";
	width : 40px;
	border-bottom: solid  2px  white;
	transform: scaleX(0);
	transition: transform  250ms  ease-in-out;
	margin-top: 7px;
}

&:hover:after {
	transform: scaleX(0.2);
}

&:active:after {
	transform: scaleX(0.8)
}
```

#### 문제 2. (Conditional Styling, CSS, Styled-Components)

![ezgif com-gif-maker](https://user-images.githubusercontent.com/34260967/139791578-8fc9b18e-34fb-4d84-a144-136d32224850.gif)

**내용** :
같은 item components 이지만 위와 같이 선택된 item에 조건부로 스타일링을 할 필요가 있었다.

**해결** :

1. 처음에는 이전에 했던것과 같이 item을 랜더링 할 때, && 연산자를 이용하여 조건부로 다른 className을 지정하여 스타일링 하였다.

2. 위 방법이 결론적으로는 해결되었으나, 하나의 item인데 2개의 className이 필요한것에 비효율적이라고 생각하였다. 그래서 styled-components의 필요성을 느끼게 되었다.
   따라서 styled-components로 변환하여 item이 선택되었는지 props로 확인하여 조건부로 스타일링 하였다.

**기타** :
Styled-Components를 사용하고 Components의 state와 props를 활용하여 효율적인 스타일링을 하게되었다. 하지만 하나의 파일안에서 코드가 너무 길어지고 지나치게 많은 props를 내려주어야 해서 복잡하단 생각을 하게 되었다.
찾아보니, 많은 수의 props를 반복 타이핑하는 문제를 해결하기 위해서 react에서는 useContext 라는것을 제공하고 있었다. 따라서 useContext를 사용하여 많은 props를 동시에 내려주고 해당 컴포넌트에서 context를 선언하여 사용할 수 있었다.

#### 문제 3. ( DayPickerRangeController in react-dates)

**내용** : react-dates 라이브러리의 DayPickerRangeController 컴포넌트가 dialog 위에서 랜더링 되지 않는 문제가 발생하였다.
정확하게는 dialog 태그 안에 달력이 조건부로 보여지게 하기 위해서 dialog의 open property를 open={false}로 초기값을 정의해주었는데, open={true} 로 변경되어도 dialog만 랜더링 되고 DayPickerRangeController 컴포넌트는 랜더링 되지 않았다.
(초기값을 open={true} 로 주었을때는 랜더링이 잘되었고, 이후에 false로 바꾸고 다시 true로 바꿔도 정상작동하였다.

**해결** :
문제를 해결하기 위해 다음과 같은 노력을 함.

1. 프로젝트 내부구조를 확인하였으나 별다른 이상이 없었다.
2. dialog 밖에 똑같은 DayPickerRangeController 컴포넌트를 만들어 랜더링 해보았다. 이 컴포넌트는 정상적으로 잘 랜더링 되었다. 그래서 dialog와 react-dates간의 문제가 생겼다고 생각했다.
3. react-dates와 dialog 간의 관계에 특별한 issue가 있는지에 대해 구글과 stackoverflow에 검색하였다. 안타깝게도 나와 같은 케이스를 발견하지 못하였다.
4. react-dates 공식문서와 제공해주는 storybook을 보고 DayPickRangeController의 props와 관계가 있는지 확인하였다. 하지만 관계를 발견하지 못하였다.
5. 프로젝트가 랜더링된 페이지의 dialog element와 하위 element를 검토하였다. 이때 \<DayPickerRangeController \/> 컴포넌트가 영역은 차지하면서 rendering 되지 않는것을 깨달았다. style 을 확인해보니 다음과 같이 hidden 이 되어있었다.

```
.DayPicker__hidden {
	visibility: hidden;
}
```

크롬 개발자 도구를 이용하여 이 속성을 바꾸었더니 다이얼로그 위에 정상적으로 랜더링 되었다. Default 값이 왜 hidden인지 의아했다. 조금 더 찾아보니 Calender가 DOM이 처음 랜더링 될 때, 랜더링 되지 않게 의도하였다고 한다.
(참고 : https://github.com/airbnb/react-dates/issues/1249)

위 링크에서 'Marinolinderhof' 라는 사람은 처음 DOM에서 랜더링 되지 않기 때문에, 나의 코드처럼 미리 \<DayPickerRangeController \/> 를 처음부터 DOM에 포함 시키지 않고 아래와 같이 state에 따라 Element가 랜더링 되게 만들었다.

```
state={
	 isBootstrapDropDownOpen: false;
}

render() {
	<>
	  <Button onClick={this.setState({ isBootstrapDropDownOpen: true })}>
	  {isBootstrapDropDownOpen && <DayPickerRangeController/>
	</>
}
```

이렇게 하면 \<DayPickerRangeController \/> 가 state가 변경될 때 마다 재생성 되는것이 아닌가 생각을 하였다. 하지만 직접 적용해보니 재생성 되는것이 아닌 같은 \<DayPickerRangeController /> 컴포넌트인 것을 확인하였다. 당장의 문제해결이 아닌 근본적인 문제의 해결에 중요성과, 나에게 다양한 시각과 해결 방법을 제공해준 google, github, stackoverflow 에게 고마움을 느꼈다.

**기타** :
바보같이 나의 프로젝트 내부를 자세하게 보지 않고, 외부에서 해결법을 찾으려고 하였다. 조금 더 일찍 hidden된 영역을 찾았더라면, 고민하던 시간을 줄일 수 있었을 것이다.
다음에 랜더링 이슈가 발생하였을 때, 나의 Element 구조와 적용된 스타일을 먼저 자세하게 살펴봐야겠다.

#### 문제 4. (react-dates componentWillReceiveProps Warning)

![airbnb_componentWillReceiveProps_Warning](https://user-images.githubusercontent.com/34260967/139807101-e9e599f1-b4d6-4f6a-88b5-ac27ed26a6c5.png)

**내용** :
react-dates 라이브러리를 사용하여 Calendar를 랜더링 할 때, 위와 같은 Warning이 발생하였다.

**해결** :

Waring의 내용을 보니 ComponentWillReceiveProps의 이름이 변경되었으므로 사용하지 않는 것이 좋으니, 라이브러리의 components를 update 하라고 한다.
라이브러리의 components를 직접 수정까지 해야하나 싶어서 검색해보았다. 당연히 내부구조도 모르는 개인이 라이브러리의 직접적인 수정은 권장하지 않으며, 이는 라이브러리 업데이트로 개선되어야 할 사항이라고 한다. 따라서 해결은 못하였다.

#### 문제 5. (scroll button doesn't work)

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/34260967/139810826-964dc6ba-7e5d-4869-98d7-53b92b5d70dc.gif)

**내용** : 위와 같이 x축 scroll을 제어 할 수 있는 button 을 구현하고, visibleDirection("left") 와 같이 state를 통해 display 되게 하였다. 하지만 동작하지 않았다.

**해결** :
해당 Component가 반환하는 Elements 는 다음과 같은 구조를 가지고 있다.

```
<Contents>
	<button>{"<"}</Button>
	<button>{">"}</Button>
	<item />
	<item />
	...
</Contents>
```

이때, button element는 props로 visibleDirection state를 받고, 클릭 시 visibleDirection을 left 또는 right 로 토글형식으로 변경한다. 스크롤은 x-mandatory를 적용하며 smooth하게 이동해야한다. 이렇게 클릭된 버튼이 바로 state를 변경하여, 부모인 <Contents\> 의 scroll이 smooth하게 이동할 틈도 없이, 리랜더링 되는것이 문제였다. 따라서 아래와 같이 <Contents\>를 감싸는 상위 element인 <Box\>를 만들고 button과 scroll의 주체가 독립적으로 랜더링되게 만들었다.

```
<Box>
	<button>{"<"}</Button>
	<button>{">"}</Button>
	<Contents>
		<item />
		<item />
		...
	</Contents>
</Box>
```

**기타** : 문제가 발생하고 직감적으로 리랜더링 이슈라고 생각하였다. 그래서 빠르게 문제를 해결 할 수 있었다. 성장하고 있는 나를 느낄 수 있었다.

#### 문제 6. (scroll button logic)

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/34260967/139810826-964dc6ba-7e5d-4869-98d7-53b92b5d70dc.gif)

**내용** : (RecommendedCategoryComponent.js)
처음 해당 컴포넌트를 클론하였을 때에는, item 갯수가 무조건 4개 라는것에 맞춰서 로직이 동작하고, 스타일링 되게 만들었었다. 하지만 후에 item의 갯수가 추가된다면, 다시 전반적인 style과 logic을 변경해야 하는 문제가 생긴다. 따라서 유지 보수에 좋은 logic을 위하여, 아이템 갯수에 따라 유동적이게 style과 logic이 적용되게 만들 필요가 있었다.

**해결** :
자세한 로직 설명은 생략합니다.

위 문제를 해결하기 위해 다음과 같은 네가지 경우를 생각하였다.

1. numberOfItem < 4,
   어떤 버튼도 필요없음.
2. numberOfItem >= 4 이고 scroll이 왼쪽 끝에 위치할 경우
   Right 버튼만 필요.
3. numberOfItem >= 5 이고 scroll이 가운데 위치할 경우
   Left, Right 버튼 모두 필요.
4. numberOfItem >= 4 이고 scroll이 오른쪽 끝에 위치할 경우
   Left 버튼만 필요.

1번의 경우 :
item의 갯수를 버튼의 props로 받아 4개 미만이면, display : none; 을 적용했다.

2, 3, 4 번의 경우 :
item이 4개 이상일 때, 각각의 Left, Right 버튼이 항상 display 되며, 독립적으로 item의 끝 부분이라는 것을 인지하면 display : none 되게 만들어 해결했다.

이 때, createRef 를 사용하여 item의 width를 구해서 버튼을 누르면 하나의 item의 width만큼 이동 되게 구현했다.

그리고 scroll을 위하여 의도적으로 overflow 되게 만들어야 했다.
처음에는 itemContainer 에 ` width : 133.33%` 를 적용되게 했다. 당연히 item이 4개일 때만 올바르게 동작하며, 매우 부끄러운 코드라고 생각한다.
나중에 flex-grow, flex-shrink, flex-basis 속성을 알게 되었고, 이를 활용하여 유동적인 코드를 만들 수 있었다.
각각의 item 에 `flex: 0 0 33.33%` 를 적용하여 item 이 부모의 1/3 만큼의 width를 차지하게 만들었다.

#### 문제 7. (부모 state 변경 시, 자식 components unmont 되는 현상 )


**의도하는 동작**
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/34260967/139823123-9ef0c57d-733c-47cf-89e8-543a3074e8a3.gif)


**오류 발생 동작 (체크인 체크아웃 밑 label 을 봐주세요)**
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/34260967/139824043-d5e3f140-eea5-4abf-920b-faed380651b6.gif)


**내용** : HeaderBar Component 아래에 존재하는 state가 변경되는 이벤트가 발생할 때, startdate, enddate state 를 가진 Component가 unmount 되었다가 다시 mount 되어 state가 초기값으로 변경되는것을 발견하였다.

**해결** :
부모가 리랜더링 될 때, 자식이 unmount 되었다가 다시 mount 되는 것은 자식 Component가 재생성 되는것이다. 즉 자식 Component가 랜더링 과정에서 재정의가 되는 것이므로 직감적으로 나의 Component 구조의 문제라는 것을 직감하였다.
자세히 살펴보니 나의 Component는 아래와 같은 구조를 가지고 있었다.

```
const Parents = () => {
	const [parentState, setParentState] = useState();
	...
	const Child = () => {
		const pst = parentState; //부모의 state사용
		...
		return (...);
	}
	return( ... );
}
```

나의 components가 이러한 구조를 가지게 된 이유는 자식이 부모의 state를 쉽게 가져오기 위함이었다. 하지만 구조적인 결함을 인지하지 못하였고 이와 같은 문제를 발생하게 하였다.
따라서 아래와 같이 Component안에 정의된 Component를 독립적으로 정의하여 해결하였다.
```
const Parent = () => {
	...

}

const Childe = () => {
	...
}
```

**기타** :
기초적인 동작과 구조에서 바보 같은 실수를 하여 부끄럽지만, 기본기를 다지는 좋은 기회였다고 생각한다. 그리고 useContext 와 더 나아가서 state관리 라이브러리의 필요성을 느끼게 되었다.

#### 문제 8. (HeaderBar Animation)

**Airbnb headerbar**
![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/34260967/140034721-f393890a-27b9-49d4-add2-75ebc9ed4213.gif)


**My Airbnb clone headerbar**
![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/34260967/140035763-62d4c763-b168-41d1-8edc-d97ce521533a.gif)


**내용** : 
Airbnb 메인페이지에 scroll 시 HeaderBar가 점점 작아지면서 SearchBar가 '검색 시작하기' 버튼으로 바뀌고 화면상단에 fixed 되는 효과가 있다. 이러한 디테일한 HeaderBar Animation 구현에 어려움을 겪었다. 

**해결** :
문제를 해결하기 위해 Airbnb 사이트와 개발자도구를 많이 참고하였다. 

#####1.구조변경
처음 나의 프로젝트는 아래와 같이 HeaderBar와 SearchBar 가 독립적인 구조를 이루고 있었다.


![image](https://user-images.githubusercontent.com/34260967/140037045-2af82417-f758-4c9d-85f6-098e996bd6c9.png)

하지만 Airbnb 사이트를 참고하였을때, HeaderBar와 SearchBar가 동시에 크기가 변경되고 사라지는것을 알 수 있었다. 따라서 아래와 같이 position 속성을 이용하여 SearchBar를 HeaderBar 안에 포함 시키고 이와 관련된 스타일링을 모두 바꾸는 구조변경이 불가피하게 되었다.

![image](https://user-images.githubusercontent.com/34260967/140038807-649fc46f-c07e-4435-9c72-cb29ac52a4e7.png)


#####2.'검색 시작하기' 버튼 구현

![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/34260967/140040347-0e90824f-9033-4cbd-819a-3cb79e92c864.gif)


스크롤 시 화면상단에 fixed 되는 **'검색 시작하기'** 버튼이 있다. 
언뜻보면 SearchBar 컴포넌트가 스크롤되면 **'검색 시작하기'** 버튼이 되는것 처럼 보일 수 있으나, airbnb에서는 사실 서로 다른 컴포넌트였다. 위와 같이 SearchBar 근처에 **검색 시작하기** 버튼을 배치하고 opacity를 활용하여 숨겼다. 이는 단계적으로 줄어드는 시각적인 효과를 주기 위함이다.

그리고 기능적인 효과를 하기 위해 HeaderBar 컴포넌트에 openSearchBarInOverScroll 이라는 state를 정의 해주어 버튼클릭시 true로 바꾸었고(scroll 위치 변경시 false), 이 state를 각 컴포넌트들이 props로 받아 펼쳐지는 효과를 스타일링 하였다.

######3.반응형으로 구현

**xlarge-size**
Headerbar (openSearchBarInOverScroll=false)
![image](https://user-images.githubusercontent.com/34260967/140043805-92bc5ace-532b-4ccf-ba80-316870067317.png)

Headerbar (openSearchBarInOverScroll=true)
![image](https://user-images.githubusercontent.com/34260967/140043733-8f27f389-5c59-4cd7-9631-f7b008d313c0.png)

**large-size**
Headerbar (openSearchBarInOverScroll=false)

![image](https://user-images.githubusercontent.com/34260967/140043972-f9501f37-f011-48e8-9432-aad6787e9a7c.png)


Headerbar (openSearchBarInOverScroll=true)

![image](https://user-images.githubusercontent.com/34260967/140043522-00249510-5d3d-4a4b-90af-9346e7c57713.png)

styled-components의 props와 media-query를 적절하게 활용하여 위치를 조정하였고, transform-origin 속성을 활용하여 펼쳐지는 효과가 시작되는 위치를 조절하여 스타일링하였다.

**기타** :
이 프로젝트에서 HeaderBar Animation 이 가장 어려울 것이라고 예상해서 배제하고 마지막에 구현하였다. 하지만 배제의 결과로 구조변경이 불가피하였고, 처리해야 할 일이 늘어나게 되었다. 이렇게 Animation 구현에 있어 컴포넌트에 구조가 중요함을 깨달았고, 모든 기능과 스타일링을 생각하고 초기에 구조를 기획해야한다는것을 알게 되었다.

---

## 향후 계획

1.  CSS 전처리기 사용 (SASS, SCSS)

2. 현재까지 xlarge, large 의 반응형만 구현했지만, normal small 까지 구현해보기.

3.  다양한 사이트 클론 코딩하기.

4.  실제로 서비스 운영을 위한 방법 고민하기.

---
