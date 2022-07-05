import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    // console.log(state, action);
    if (action.type === "INCREMENT")
        return state + 1
    if (action.type === "DECREMENT")
        return state - 1
}
// return state;

export default function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <p>{state}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
        </>
    )
}



















// USING UseState to increment and decrement ----------------->


// import React, {useState} from 'react'

// export default function UseReducer() {
//     const [num, setNum] = useState(0)

//     const btnnTo = () => {
//         setNum(num + 1)
//     }

//     const btnnLo = () => {
//         setNum(num - 1)
//     }

//     return (
//         <>
//             <p>{num}</p>
//             <button onClick={btnnTo}>Increase</button>
//             {/* <button onClick={btnnMo}>Reset</button> */}
//             <button onClick={btnnLo}>Decrease</button>
//         </>

//     )
// }
