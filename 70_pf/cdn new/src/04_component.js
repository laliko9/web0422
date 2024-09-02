/*  
    컴포넌트(구성요소)?
        HTML 요소를 반환하는 함수와 같다.
        독립적이고 재사용 가능한 코드 조각
        -> 반환(return), 독립적, 재사용
        -> 독립적 -> 별도의 파일로 만들어 사용!

        종류
            1. 클래스형 컴포넌트 -> Hooks 지원x
            2. 함수형 컴포넌트 -> Hooks 지원o

        -> 이전 React 코드 기반에서는 Class 컴포넌트가 주로 사용되는 것을 볼 수 있습니다. 이제 React 16.8에 추가된 Hooks와 함께 Function 컴포넌트를 사용하는 것이 좋습니다.

        공통점
            1. 컴포넌트 이름의 첫 글자는 대문자로 쓴다.
            2. return 키워드 필수!
*/
/*
    클래스 컴포넌트
        1. extends React.Component 명령문을 포함해야 한다.
            -> React.Component에 대한 상속을 만들고 컴포넌트가 React.Component의 함수에 액세스할 수 있도록 한다.
        2. render()메서드도 필요하다.
            -> HTML을 반환한다.

        class 컴포넌트명 extends React.Component {
            render() {
                return ( ... );
            }
        }
*/
/*
    함수형 컴포넌트

        function 컴포넌트명() {
            return ( ... );
        }
*/

// 클래스형 컴포넌트
// 상속(extends) 필요, render() 필요
class Comp0 extends React.Component {
    render() {
        return <h2>난 클래스형 컴포넌트야!</h2>;
    }
}

// 함수형 컴포넌트
// 상속 없다. render() 없다.
function Comp1() {
    return <h2>난 함수형 컴포넌트야!</h2>;
}

const container0 = document.querySelectorAll(".item").item(0);
const root0 = ReactDOM.createRoot(container0);
root0.render(<Comp0 />);

const container1 = document.querySelectorAll(".item").item(1);
const root1 = ReactDOM.createRoot(container1);
root1.render(<Comp1 />);
