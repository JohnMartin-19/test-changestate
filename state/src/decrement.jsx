import React from "react";


function Decrement({setCount,count}){
   

    function handleDecrease(){
        setCount(count-1)
    }
    return(
        <div>
            <button onClick={handleDecrease} style={{padding:"10px", backgroundColor:"red"}}>Decrement:</button>
        </div>
        
    )
}
export default Decrement