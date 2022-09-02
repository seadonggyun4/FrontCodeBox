import { useState } from "react"

export default function AA(){
    const [value, setValue] = useState('아직 안바뀜')


    return (
        <div>
            <p>{value}</p>
            <BB setValue={setValue}/>
        </div>
    )
}


function BB({setValue}){
    return (
        <div>
            <p>여긴 BB</p>
            <CC setValue={setValue}/>
        </div>
    )
}

function CC({setValue}){
    return (
        <div>
            <p>여긴 CC</p>
            <DD setValue={setValue}/>
        </div>
    )
}

function DD({setValue}){
    return (
        <div>
            <p>여긴 DD</p>
            <EE setValue={setValue}/>
        </div>
    )
}

function EE({setValue}){
    return (
        <div>
            <p>여긴 EE</p>
            <button onClick={click}>클릭</button>
        </div>
    )

    function click(){
        setValue('값 바뀜!!')
    }
}