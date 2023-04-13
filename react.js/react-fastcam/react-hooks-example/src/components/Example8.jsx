import { createRef, useRef, useState } from "react"


export default function Example8(){
    const [ value, setValue ] = useState('')
    const input1Ref = createRef();
    const input2Ref = useRef();


    return(
        <div>
            <input value={value} onChange={change} />
            <input ref={input1Ref} />
            <input ref={input2Ref} />
        </div>
    )

    function change(e){
        setValue(e.target.value)
    }
}