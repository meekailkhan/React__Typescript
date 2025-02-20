import { personProps } from "./Person.types"
export const Person = (props:personProps)=>{
    return (
        <div>
            <h2>{props.name.first} {props.name.last}</h2>
        </div>
    )
}