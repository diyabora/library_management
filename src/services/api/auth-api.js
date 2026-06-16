import axios from "axios";

export const logInApi=createAsyncThunk("auth/logInApi",async (values,thunkApi)=>{
    try{
      const response=await axios.post(`${import.meta.env.VITE_URL_API}/auth/sign-in`,values,getApiConfig());
      return response.data;
    }
    catch(error){
        return thunkApi.rejectWithValue(error.response.data);
    }
})