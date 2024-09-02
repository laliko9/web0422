// 변수 선언
// 여기서 값은 JSX
const hi = (
    // 반드시 최상의 부모는 하나
    <div>
        <h1>Hi World!</h1>
        <h2>나는 두 문장이다.</h2>
    </div>
);

/* 
    라이브러리 -> CDN 방식 
      React(언어) + ReactDOM(가상돔) + Babel(JSX번역)

    리액트의 출력
      1. 첫 번째 방법 
        ReactDOM.render(element, container); 

        (1) ReactDOM은 가상 DOM을 생성하는 객체
        (2) render()은 element를 container에 넣는 메서드
        (3) element는 변수명으로 쓴다.
        (4) container는 HTML 페이지의 div#root를 말한다.

      2. 두 번째 방법
        const container = document.getElementById('root');
        const root = ReactDOM.createRoot(container);
        root.render(<p>Hello</p>);

        (5) ReactDOM.createRoot()는 HTML 요소를 가져와서 새롭게 루트(root)를 생성한다.
*/

// 출력 -> 렌더링
ReactDOM.render(hi, document.querySelectorAll(".item")[0]);

// HTML DOM 요소 가져오기
const container = document.querySelectorAll(".item").item(1);
// 리액트 가상돔 요소 생성
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);
