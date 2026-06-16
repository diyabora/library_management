// import { useMemo, useState } from "react";
// import Child from "./child";

// function Parent() {
//     const [count, setCount] = useState(0);
//     console.log("parent component rerender");
//     const student = useMemo(()=>{
//         return{
//             name:"diya"
//         }
//     },[])
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
//             <Child student={student}/>
//         </div>
//     )
// }

// export default Parent;