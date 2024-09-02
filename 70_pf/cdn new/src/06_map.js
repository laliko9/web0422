/* 
    리스트(list, 목록)
        루프(map())를 사용하여 목록을 렌더링
*/

function Car(props) {
    return <li>나는 {props.brand}</li>;
}

function Garage() {
    const cars = ["Benz", "BMW", "Audi"];
    return (
        <>
            <h1>차고에 누구니?</h1>
            <ul>
            
            {/* 
                ['Benz', 'BMW', 'Audi']

                배열.map(함수);
                배열.map(()=>{});
                배열.map(item=><li>item</li>);

                ["<li>Benz</li>", "<li>BMW</li>", "<li>Audi</li>"]
            
            */}
                {cars.map(car => <Car brand={car} />)}
            </ul>
        </>
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Garage />);
