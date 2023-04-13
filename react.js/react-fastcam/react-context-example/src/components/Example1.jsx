import PersonContext from "../contexts/PersonContext";

export default function Example1(){
 return (   
    <PersonContext.Consumer>
        {(persons) => (
            <ul>
                {persons.map((person) => (
                    <li>{person.name}</li>
                ))}
            </ul>
        )}
    </PersonContext.Consumer>
 )
}