import React, { useState, useEffect, useRef } from 'react'

export default function UseRef() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    const inputElement = useRef();

    const [inputValuee, setInputValuee] = useState("");
    const previousInputValuee = useRef("");

    const focusPoint = useRef(null);

    useEffect(() => {
        previousInputValuee.current = inputValuee;
    }, [inputValuee]);

    useEffect(() => {
        count.current = count.current + 1;
        //    count.current.value= "Some Value"
    });

    const focus = () => {
        count.current.focus()
        count.current.value = "Some value"
    }

    const focusInput = () => {
        inputElement.current.focus()
    }

    const onClickHandler = () => {
        focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
    };

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
            <button onClick={focus}>Focus</button>

            <br />
            <br />

            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>

            <br />

            <input
                type="text"
                value={inputValuee}
                onChange={(e) => setInputValuee(e.target.value)}
            />
            <h2>Current Value: {inputValuee}</h2>
            <h2>Previous Value: {previousInputValuee.current}</h2>

            <button onClick={onClickHandler}>  ACTION  </button>
            <textarea ref={focusPoint} />
        </>
    )
}
