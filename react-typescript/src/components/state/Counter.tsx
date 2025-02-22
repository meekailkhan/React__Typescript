
import {useReducer} from 'react'

const initialState = {count : 0 }

type CountType = {
    count : number
}

type UpdateTypes = {
    type : 'increment' | 'decrement'
    payload : number
}

type ResetTypes = {
    type : 'reset'
}

type ActionType = UpdateTypes | ResetTypes

const reducer = (state:CountType,action:ActionType)=>{
    switch (action.type) {
        case 'increment' : 
            return {count : state.count + (action.payload || 0)} ;
        case 'decrement' :
            return {count : state.count - (action.payload || 0)} ;
        case 'reset' :
            return initialState
        default :
            return state
    }
}

function Counter() {
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <div>Count = {state.count}</div>
      <button onClick={()=> dispatch({type : 'increment' , payload : 10})}>Increase 10</button>
      <button onClick={()=> dispatch({type : 'decrement' , payload : 10})}>Decrease 10</button>
      <button onClick={()=> dispatch({type : 'reset'})}>Reset</button>
    </div>
  )
}

export default Counter
