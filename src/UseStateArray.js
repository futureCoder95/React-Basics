import React, { useState } from 'react'

export default function UseStateArray() {

    const bioData = [
        {
            id: 0, myName: "Brad Pitt", age: 57
        }, {
            id: 0, myName: "Matt Damon", age: 50
        }, {
            id: 0, myName: "Tom Cruise", age: 59
        }, {
            id: 0, myName: "Tom Cruise", age: 59
        }, {
            id: 0, myName: "Tom Cruise", age: 59
        }
    ]

    const [myArray, setmyArray] = useState(bioData)

    let buttonClick = () => {
        setmyArray([])
    }

    return (
        <>
            {
                myArray.map((curElem) => {
                    return <h1 className='myStyle' key = {curElem.id}>Name : {curElem.myName} and Age is {curElem.age} </h1>
                })
            }

            <button className="btn" onClick={buttonClick}>Click Here</button>
        </>

    )
}
