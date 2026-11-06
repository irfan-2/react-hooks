import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Stopwatch = () =>{
    const [seconds, setSeconds] = useState(0)
    const [running, setRunning] = useState(false)
    useEffect(() =>{
        if(!running) return ;
        const interval = setInterval(() => {
                setSeconds((prev) => prev +1)
        }, 1000);
         return () => clearInterval(interval);
    },[running])
    function reset(){
        setSeconds(0)
        setRunning(false)
    }
    return (
        <div>
            <span>{seconds}</span>
            <button onClick={() => setRunning((prev) => prev = !prev)}>{running? "pause" : "start"}</button>
            <button onClick={() => setSeconds((c) => c*0)}>Reset</button>
        </div>
    )
}

export default Stopwatch