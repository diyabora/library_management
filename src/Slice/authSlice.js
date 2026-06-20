import { logInApi } from "../services/api/auth-api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getApiConfig from "../services/common/getConfig.js";

const registrationAPI = createAsyncThunk(
    "auth/registrationAPI", async (value, thunkAPI) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/sign-up`, formData, getApiConfig());
            if (data.status === 201) {
                return thunkAPI.fulfillWithValue(data);
                localStorage.setItem("authToken", data.token);
            }
            else{
                return thunkAPI.rejectWithValue("api is not working");
            }
        }
        catch(error){
            return thunkAPI.reje()
        }
}
)




const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: null,
        message: null,
        token: null,
        statusCode: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logInApi.pending, (state) => {
                status.loading = true;
            })
            .addCase(logInApi.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.message = action.payload.message;
                state.statusCode = action.payload.status;
            })
            .addCase(logInApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.error;
                state.statusCode = action.payload.status;
            })
    }
});

export default authSlice.reducer;