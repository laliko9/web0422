// import Car from "./Car";

/*  
    컴포넌트?
        HTML 요소를 반환하는 함수와 같다.
        독립적이고 재사용 가능한 코드 조각
        -> 항상 반환(return), 독립적, 재사용
        -> 독립적 -> 컴포넌트 별 파일 생성

        컴포넌트 생성

            function 컴포넌트명() {
                return ( ... );
            }

        컴포넌트 호출
            <컴포넌트명 />


        규칙
            1. 컴포넌트 이름의 첫 글자는 대문자로
            2. return 키워드 필수!
            3. 하나의 컴포넌트를 파일로 저장 시 파일명은 컴포넌트명과 같아야 한다.
*/

// JSX가 한 줄 문장 () 생략 가능
// function Car() {
//     return <h2>나 나라구!</h2>;
// }

// JSX가 두 줄 이상 문장 ()로 묶는다.
function Garage() {
    return (
        <>
            <h1>차고에 누가 있니?</h1>
            {/* 컴포넌트 호출 */}
            {/* 컴포넌트 안에 컴포넌트 사용 */}
            <Car />
            {/* 컴포넌트 두 번 호출 즉, 재사용 */}
            <Car />
        </>
    );
}

const container2 = document.querySelectorAll(".item").item(2);
const root2 = ReactDOM.createRoot(container2);
root2.render(<Car />);

const container3 = document.querySelectorAll(".item").item(3);
const root3 = ReactDOM.createRoot(container3);
root3.render(<Garage />);
