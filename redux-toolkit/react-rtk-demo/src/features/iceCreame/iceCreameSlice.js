import { ordered as cakeOrder } from '../cake/cakeSlice'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    numOfIceCreame : 20
}

const iceCreameSlice = createSlice({
    name : 'icecreame',
    initialState,
    reducers : {
        ordered : (state)=>{
            state.numOfIceCreame--
        },
        restored : (state,action)=>{
            state.numOfIceCreame += action.payload
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(cakeOrder,state =>{
            state.numOfIceCreame--
        })
    }
})

export default iceCreameSlice.reducer
export const {ordered,restored} = iceCreameSlice.actions