import React, { useState } from 'react'

const Forms3 = () => {

    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
    });

    const valueChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        // console.log(e.target.placeholder)

        // const value = e.target.value;
        // const name = e.target.name;

        const {value , name} = e.target.value

        setFullName((prevValue) => {
            if (name === "fName") {
                return {
                    fname: value,
                    lname: prevValue.lname
                }
            } else if (name === "lName") {
                return {
                    fname: prevValue.fname,
                    lname: value,
                }
            }
        })
    }

    const nameChange = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div>
                <form onSubmit={nameChange}>

                    <h1>Hello {fullName.fname} {fullName.lname}</h1>

                    <input type="text" 
                    name='fName' 
                    placeholder='Enter your first name'    
                    value={fullName.fname}
                    onChange={valueChange} /><hr />

                    <input type="text" 
                    name='lName' 
                    placeholder='Enter your last name'
                    value={fullName.lname}
                    onChange={valueChange} />

                    <button type='submit'>Click Me To Submit</button>
                </form>
            </div>
        </>
    )
}

export default Forms3;

// import { useState } from "react";
// // import ReactDOM from "react-dom/client";

// function Forms3() {
//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;

//         setInputs(values => ({ ...values, [name]: value }))
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(inputs);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Enter your name:
//                 <input
//                     type="text"
//                     name="username"
//                     value={inputs.username || ""}
//                     onChange={handleChange}
//                 />
//             </label>
//             <label>Enter your age:
//                 <input
//                     type="number"
//                     name="age"
//                     value={inputs.age || ""}
//                     onChange={handleChange}
//                 />
//             </label>
//             <input type="submit" />
//         </form>
//     )
// }

// export default Forms3;