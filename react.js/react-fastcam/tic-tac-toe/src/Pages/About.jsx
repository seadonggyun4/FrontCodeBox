import { useLocation } from "react-router-dom";
import queryString from 'query-string'

export default function About(){
    const location = useLocation().search

    // [ 방법 1 ]
    // const obj = new URLSearchParams(location)
    // console.log(obj.get("name"))

    //[ 방법 2 ]
    const query = queryString.parse(location)
    console.log(query.name)

    return(
        <div>
            <h2>About 페이지입니다.</h2>
            {query.name && <p>query string / name 의 값은 {query.name}</p>}
        </div>
    );
}