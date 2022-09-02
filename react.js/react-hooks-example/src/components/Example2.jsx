import React from "react";

// ============ [ function 컴포넌트 에서 state 다루는법 ] ============
export default function Example2(){
    // - useState() -> function컴포넌트에서 state 생성
    // - 생성된 값은 배열 형태이며 -> [스테이트 이름, 스테이트를 다루는 함수] 로 구성 되어있다.
    const [count, setCount] = React.useState(0);
    
    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={click}></button>
        </div>
    )

    function click(){
        setCount(count + 1)
    }
}