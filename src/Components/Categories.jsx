import { useEffect, useState } from "react";

function Categories(){
     const[count, setCount] = useState(60);
        useEffect(()=>{
            setTimeout(()=>{
             setCount(count-1);
            },1000);
        },[count])
    return(
        <>
        <div className="container">
                <div className="row">
                    <h1>Dashboard</h1>
                    <h1>{count} minutes left</h1>
                </div>
            </div>
        </>
    )
}
export default Categories;