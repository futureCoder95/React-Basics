import React, {useState ,useEffect } from 'react'

export default function UseEffect2() {
    const [count, setCount] = useState(0)

    const toggleBtn = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        if (count >= 1) {
            document.title = `Chats (${count})`
        }
        else {
            document.title = `Chats`
        }
    })

    return (
        <>
            <h1>{count}</h1>
            <button onClick={toggleBtn}>C</button>
        </>
    )
}
