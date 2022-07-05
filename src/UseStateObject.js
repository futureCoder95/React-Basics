import React, { useState } from 'react'

const UseStateObject = () => {
    const [myObject, setmyObject] = useState({
        myName: "Vinod", myAge: 77, Profession: "Frontend Engineer"
    });

    const myButton = () => {
        setmyObject({...myObject,  myName: "Thapa"});
    }

    return (
        <div>
            <h1 className='center'>Name : {myObject.myName} , Age :{myObject.myAge} , Profession : {myObject.Profession}</h1>
            <button className="btnn" onClick={myButton}>Update</button>
        </div>
    )
}

export default UseStateObject