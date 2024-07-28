import { useState } from "react"
import "./sqr.css"

const Square=()=>{
    const [square,setSquare]=useState([])
    const squareHandler=()=>{
        const newSquare=[...square,1];
        setSquare(newSquare)
    }
    return(
        <>
        <button onClick={squareHandler}>Add Square</button>
        {
            square.map((each,i)=>{
                return(
                    <div className={(i+1)%2===0?"square":"circle"}>{i}


                    </div>
                )
            })
        }
        </>
    )
}
export default Square