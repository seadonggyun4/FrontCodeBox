import React from "react";

// ============ [ function 컴포넌트 에서 객체 state 다루는법 ] ============
export default function Example3(){
    // - useState() -> function컴포넌트에서 "객체 형태"의 state 생성
    // - 생성된 값은 배열 형태이며 -> [스테이트, 스테이트를 다루는 함수] 로 구성 되어있다.
    const [state, setState] = React.useState({count : 0});
    
    return (
        <div>
            <p>You Clicked {state.count} times</p>
            <button onClick={click}></button>
        </div>
    )

    function click(){
        setState((state) => {
            return {
                count: state.count + 1
            }
        })       
    }
}