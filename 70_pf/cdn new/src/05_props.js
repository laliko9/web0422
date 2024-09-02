/* 
    props(프로프스)?
        React 컴포넌트에 전달되는 인수
        HTML 속성을 통해 컴포넌트에 전달

        function 컴포넌트(props){
            ...
        }

        function 컴포넌트({인수1, 인수2 ...}){
            ...
        }

        <컴포넌트 인수1="값" 인수2="값" />
        <태그 속성="값" 속성="값" />
        함수(인수1, 인수2, ...)


*/

/* 
    props = {brand: 싼타페, ...}
    객체.속성 -> 값
*/
function Car1(props) {
    return <h2>나는 {props.color} {props.brand}!</h2>;
}
function Car2({ brand, color }) {
    return <h2>나는 {color} {brand}!</h2>;
}

function Car3() {
    const carInfo = {brand: "페라리", color: "빨강"}
    return (
        <div>
            <h2>나는 {carInfo.color} {carInfo.brand}!</h2>
            <Car4 info={carInfo} />
        </div>
    );
}

// props는 매개변수로 한 컴포넌트에서 다른 컴포넌트로 데이터를 전달한다.
function Car4(props) {
    /* 
        info={carInfo} -> props
        info={{brand: "페라리", color: "빨강"}} -> props

        props = {
            info: {
                brand: "페라리", 
                color: "빨강"
            }
        }
        
        객체.속성
        props.info
        객체.속성.속성
        props.info.brand -> "페라리"
        props.info.color -> "빨강"

    */
    return <h2>나는 {props.info.color} {props.info.brand}</h2>;
}

const container0 = document.querySelector("#root");
const root0 = ReactDOM.createRoot(container0);

// 컴포넌트 호출시 props로 전달할 값은 태그의 속성(brand)이 전달된다.
root0.render(
    <div>
        <Car1 brand="K7" color="흰색" />
        <Car2 brand="쏘나타" color="검정" />
        <Car3 />
    </div>
);
