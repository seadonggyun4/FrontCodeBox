import React, { useEffect, useState } from "react";

export default function useWindowWidth(){
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth)
        }   

        window.addEventListener('resize', resize)

        //useWindowWidth 를 안쓸때 해제 하기 위함
        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [width])

    return width
}