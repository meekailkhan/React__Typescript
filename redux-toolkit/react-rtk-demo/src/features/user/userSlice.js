import axios from 'axios'
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    loading : false,
    users : [],
    error : ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async() => {
    console.log('fetching...')
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = response.data.map(item =>{
        return item.id
    })
    return data
})


const userSlice = createSlice({
    name : "user",
    initialState,
    extraReducers : (builder) =>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer  