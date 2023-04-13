import { useCallback, useMemo, useState } from "react"

function sum(persons) {
    return persons.map(person => person.age).reduce((l, r) => l + r, 0)
}

export default function Example7(){
    const [ value, setValue ] = useState('')
    const [ persons ] = useState([
        {name: 'Mark', age:39 },
        {name: 'Hanna', age:28 },
    ]);

    //useMemo는 내부 함수가 실행될때의 조건을 걸 수 있다 -> 최적화
    const count = useMemo(() => {
      return  sum(persons);
    },[persons])

    const click = useCallback(() => {
        console.log(value);
    }, [])


    return(
        <div>
            <input value={value} onChange={change} />
            <p>{count}</p>
            <button onClick={click}></button>
        </div>
    )

    function change(e){
        setValue(e.target.value)
    }
}