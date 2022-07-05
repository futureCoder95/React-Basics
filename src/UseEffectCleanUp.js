import React, {useEffect, useState} from 'react'

export default function UseEffectCleanUp() {
    const [widthCount, setwidthCount] = useState(window.screen.width)


    const actualWid = () => {
        // console.log(window.innerWidth);
        setwidthCount(window.innerWidth)
    }

    useEffect(() => {
        // console.log("add event");
        window.addEventListener("resize" , actualWid);

        return () => {
            // console.log("remove  event")
            window.removeEventListener("resize" , actualWid);
        }
    })

    return (
        <div>
            <p>The Actual size of the window is : </p>
            <h1> {widthCount}  </h1>
        </div>
    )
}
