import React, { useState } from 'react'

const Forms = () => {

    const [name, setName] = useState('');
    const [fullName, setFullName] = useState('');

    const nameChange = () => {
        setFullName(name);
    }

    const valueChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value);
    }
    return (
        <>
            <div>
                <h1>Hello {fullName}</h1>
                <input type="text" placeholder='Enter your name' value={name} onChange={valueChange} />
                <button onClick={nameChange}>Click Me</button>
            </div>
        </>
    )
}

export default Forms;