import React, { useState, useEffect } from "react";
import Love from './Love.png'
import sad from './sad.png'
import like from './like.png'
import Happy from './Happy.png'

function EmojeeCounter(props){
    console.log("pic is ", props.pic)

    const [pic, setPic] = useState(Love)
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("function called", props.pic)
        if (props.pic==="Love") 
            setPic(Love)
        else if (props.pic==="like")
            setPic(like)
        else if (props.pic==="sad")
            setPic(sad)
        else if (props.pic==="Happy")
            setPic(Happy)
    })

    const ClickHandle=() =>
        {
            setCount(count+1)}

    return (
            <div className="App">
                <p>{props.pic} <span></span>
                <button onClick = {ClickHandle} > { count }
                <img src = {pic} alt = ""/>
                </button>
                </p>
            </div>
        )
    }


export default EmojeeCounter;