import React, { useEffect, useState } from 'react'

export default function UseEffect1() {
    const [num, setNum] = useState(0)
    const [nums, setNums] = useState(0)


    useEffect(() => {
        alert("Im clicked");
    } ,[nums])

    // const toggleBtn = () => {
    //     setNum(num + 1)
    // }
    // useEffect(() => {
    //     console.log("Hello useEffect");
    // })

    // console.log("Outside useEffect")
    return (
        <>
            <button onClick={
                (() => {
                    setNum(num + 1);
                })}
            >
                Click {num}</button>
                <br />

            <button onClick={
                (() => {
                    setNums(nums + 1);
                })}
            >
                Click {nums}</button>
        </>
    )
}
