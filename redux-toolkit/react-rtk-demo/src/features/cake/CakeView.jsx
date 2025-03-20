import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restored } from './cakeSlice'


function CakeView() {
  const numOfCake = useSelector((state)=> state.cake.numOfCake)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cake - {numOfCake}</h2>
      <button onClick={()=> dispatch(ordered())}>Order Cake</button>
      <button onClick={()=> dispatch(restored(5))}>Restocked Cake</button>
    </div>
  )
}

export default CakeView
