import { useState } from "react"

export default function A(){
    // value -> 하위컴포넌트로 전달할 상태
    // setValue -> 상태 value를 제어할수 있는 메서드
    const [value, setValue] = useState('아직 안바뀜')

    return (
        <div>
            <B value={value}/>
            <button onClick={click}>E의 값을 바꾸기</button>
        </div>
    )

    function click(){
        setValue("E의 값을 변경")
    }
}


function B({value}){
  return (
    <div>
        <p>여긴 B</p>
        <C value={value}/>
    </div>
  )
}

function C({value}){
  return (
    <div>
        <p>여긴 C</p>
        <D value={value}/>
    </div>
  )
}

function D({value}){
  return (
    <div>
        <p>여긴 D</p>
        <E value={value}/>
    </div>
  )
}

function E({value}){
    return (
        <div>
            <p>여긴 E</p>
            <h1>{value}</h1>
        </div>
      )
}