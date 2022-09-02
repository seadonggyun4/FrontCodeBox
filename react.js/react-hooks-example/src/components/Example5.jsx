import React from "react";

// ============ [ function 컴포넌트 에서 라이프사이클 ] ============
export default function Example5(){
    // - useState() -> function컴포넌트에서 state 생성
    const [count, setCount] = React.useState(0);
    
    /*
     [ useEffect ]
     - 라이프 사이클을 대체하는 문법
     - mount & update: React.useEffect(() => {})
     - mount : React.useEffect(() => {}, [])
     - update: React.useEffect(() => {}, [업데이트의 기준이 되는 state 값])

    */

    React.useEffect(() => {
        console.log('componentDidMount & componentDidUpdate', count)
    })

    React.useEffect(() => {
        console.log('componentDidMount')

        //componentWillUnmount -> mount 만 하는 상태면 
        return () => {

        }
    }, [])

    React.useEffect(() => {
        console.log('componentDidMount & componentDidUpdate by count', count)

        //componentWillUnmount  & com포넌트가 업데이트 되기 직전 실행되는 함수 -> update까지 하는 상태면
        return () => {

        }
    },[count])

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