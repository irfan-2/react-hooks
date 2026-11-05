import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Stopwatch = () =>{
    const [seconds, setSeconds] = useState(0)
    const [running, setRunning] = useState(false)
    useEffect(() =>{
        const interval = setInterval(() => {
                setSeconds((prev) => prev +1)
        }, 1000);
    },[running])
    return (
        <div>
            <span>{seconds}</span>
            <button onClick={() => setSeconds()}>{running? "pause" : "start"}</button>
            <button onClick={() => setSeconds((c) => c*0)}>Reset</button>
        </div>
    )
}

export default Stopwatch