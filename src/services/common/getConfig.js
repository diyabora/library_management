function getApiConfig(){
    const token=localStorage.getItem("token"||"");
    return{
        headers:{
            'content-type':'application/json',
            ...(token && {Authorization:`Bearer ${token}`})
        }
    }
}


export default getApiConfig;