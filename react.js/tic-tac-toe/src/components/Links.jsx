import { Link } from 'react-router-dom'

export default function Links(){
    return(
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/profile"}>Profile</Link></li>
            <li><Link to={"/profile/id:1"}>Profile id:1</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/about?name=mark"}>About name mark</Link></li>
        </ul>
    )
}