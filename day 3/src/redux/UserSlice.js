import {createSlice} from '@reduxjs/toolkit'
const initialState={
    isAuth:false,
    token:'',
    role:'',
}

const UserSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuth:(state,action)=>{
            state.isAuth = action.payload
        },
        setToken:(state , action)=>{
            state.token = action.payload
        },
        setRole:(state,action)=>{
            state.role = action.payload
        }
    }
})

export const {setAuth,setToken,setRole} = UserSlice.actions
export default UserSlice.reducer;
