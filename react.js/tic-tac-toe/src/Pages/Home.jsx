import {Link} from "react-router-dom"

export default function Home(){
    return(
    <>
        <div>Home 페이지입니다.</div>
        <Link to={"/profile"}>Profile 로 이동</Link>
        <Link to={"/about"}>About 으로 이동</Link>
    </>
    )
}