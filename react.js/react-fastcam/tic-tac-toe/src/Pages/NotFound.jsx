import {Link} from "react-router-dom"

export default function NotFound(){
    return (
    <div>
        페이지를 찾을 수 없습니다.
        <Link to={"/"}>홈으로 이동</Link>
    </div>
    )
}