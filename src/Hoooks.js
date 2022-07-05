import React, { useState } from 'react'

export default function Hoooks() {
    const [myName, setMyName] = useState("Saif Uz Zaman Khan");

    const toggleButton = () => {
        setMyName("Muneeb Uz Zaman Khan")

        if (myName == "Saif Uz Zaman Khan") {
            setMyName("Muneeb Uz Zaman Khan")
        }
        else{
            setMyName("Saif Uz Zaman Khan")
        }
    }
    return (
        <div>
            <h1>{myName}</h1>
            <button onClick={toggleButton}>Click Here</button>
        </div>
    )
}
