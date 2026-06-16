import { logInApi } from "../services/api/auth-api"
import {createSlice} from "@reduxjs/toolkit"

const authSlice=createSlice({
    name:"auth",
    initialState:{
        loading:false,
        user:null,
        message:null,
        token:null,
        statusCode:null,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(logInApi.pending,(state)=>{
            status.loading=true;
        })
        .addCase(logInApi.fulfilled,(state,action)=>{
            state.loading=false;
            state.user=action.payload.user;
            state.message=action.payload.message;
            state.statusCode=action.payload.status;
        })
        .addCase(logInApi.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload.error;
            state.statusCode=action.payload.status;
        })
    }
});

export default authSlice.reducer;