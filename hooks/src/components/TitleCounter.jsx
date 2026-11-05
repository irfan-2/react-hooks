import { useState } from "react";
import { useEffect } from "react";

const TitleCounter = () =>{
    const [count,setCount] = useState(0)
    const [btn, setBtn] = useState(100)
    useEffect(() => {
        document.title = `clicked ${count} times`
        console.log("ran");
        
    }, [count])
    return (
        <div>
            <button onClick={() => setCount((c) => c+1)} >Couter is at: {count}</button>
            <br />
            <button onClick={() => setBtn((c) => c+1)}>Btn value : {btn}</button>
        </div>
    )
}

export default TitleCounter

// 1. run on mount === 1 execution
// 2. run when a state has changed for specific state variable  === everytime state changes
// 3. run everytime any state changes 