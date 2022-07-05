import React, { useState } from 'react'

const Forms = () => {

    const [name, setName] = useState('');
    const [fullName, setFullName] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameNew, setLastNameNew] = useState('');
    //we can do setFullName(`${firstName} ${lastName}`). No need to create another useState() function

    // const onSubmit = (event) =>{
    //         event.preventDefault();
    //         const showFullName = name + " " + lastName;
    //         setFullName(showFullName);
    //     }

    const nameChange = (e) => {
        e.preventDefault();
        setFullName(name);
        setLastNameNew(lastName);
    }

    const valueChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value);
    }

    const valueChangeTwo = (e) => {
        setLastName(e.target.value)
    }

    return (
        <>
            <div>
                <form onSubmit={nameChange}>
                    <h1>Hello {fullName} {lastNameNew}</h1>
                    <input type="text" placeholder='Enter your name' value={name} onChange={valueChange} /><hr />
                    <input type="text" placeholder='Enter your last name' value={lastName} onChange={valueChangeTwo} />
                    <button type='submit'>Click Me To Submit</button>
                </form>
            </div>
        </>
    )
}

export default Forms;