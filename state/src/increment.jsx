import React from "react";

function Increment({setCount,c}){


    function handleCount(){
        setCount((c)=>c+1)
    }

    return(
        <div>
            <button onClick={handleCount} style={{padding:"10px",backgroundColor:"blue"}}>Increment</button>
        </div>
    )
}
export default Increment