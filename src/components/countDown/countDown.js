import React, {Component} from "react";
import Digit from "./Digit/Digit";

const CountDown = (props) => {
    return (
        <div> 
            <h1 className='d-flex'>
                <Digit color="blue" value={props.time.min} /> : 
                <Digit color="red" value={props.time.sec}  /> : 
                <Digit color="green" value={props.time.mili}  />
            </h1>
        </div>
    )
}

export default CountDown