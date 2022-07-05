import React, {useState} from 'react'

export default function ShortCirEval() {
    const [demo, setdemo] = useState("")
    return (
        <div>
           <h1> {demo || "Technical"} </h1>
           <h1> {demo && "Technical"} </h1>
        </div>
    )
}
