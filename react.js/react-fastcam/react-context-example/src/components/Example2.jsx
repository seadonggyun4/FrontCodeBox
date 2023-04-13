import React from "react";
import PersonContext from "../contexts/PersonContext";

export default class Example2 extends React.Component{
    //contextType에는 한가지 파일밖에 넣지 못한다.
    static contextType = PersonContext
    
    
    render(){
        const persons = this.context

        return (
            <ul>
                {persons.map((person) => (
                    <li>{person.name}</li>
                ))}
            </ul>
        )
    }
}