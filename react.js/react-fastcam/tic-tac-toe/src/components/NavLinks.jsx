import { NavLink } from 'react-router-dom'



export default function NavLinks(){
    const activeStyle = {color: "red"}
    const activeClassName = "active"

    return(
        <ul>
            <li>
                <NavLink 
                    to={"/"} 
                    style={({isActive}) => isActive ? activeStyle : undefined} 
                    className={({isActive}) => isActive ? activeClassName : undefined}>
                        Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to={"/profile"} 
                    style={({isActive}) => isActive ? activeStyle : undefined} 
                    className={({isActive}) => isActive ? activeClassName : undefined}>
                        Profile
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to={"/profile/id:1"} 
                    style={({isActive}) => isActive ? activeStyle : undefined} 
                    className={({isActive}) => isActive ? activeClassName : undefined}>
                        Profile id:1
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to={"/about"} 
                    style={({isActive}) => isActive ? activeStyle : undefined} 
                    className={({isActive}) => isActive ? activeClassName : undefined}>
                        About
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to={"/about?name=mark"} 
                    style={({isActive}) => isActive ? activeStyle : undefined} 
                    className={({isActive}) => isActive ? activeClassName : undefined}>
                        About name mark
                </NavLink>
            </li>
        </ul>
    )
}