import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restored } from './iceCreameSlice'

function IceCreameView() {
  const [value,setValue] = useState(1)
  const numOfIceCreame = useSelector((state)=> state.iceCreame.numOfIceCreame)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number Of Ice Creame - {numOfIceCreame}</h2>
      <button onClick={()=> dispatch(ordered())}>Order Ice Creame</button>
      <input type="number" value={value} onChange={(e)=> setValue(e.target.value)} placeholder='Enter Restocked Value'/>
      <button onClick={()=> dispatch(restored(+value))}>Restocked Ice Creame</button>
    </div>
  )
}

export default IceCreameView
