import React, {Component} from "react";

const Digit = (props) => {
    return (
        <div>
            <h1 style={{color: props.color}}>{props.value < 10 ? `0${props.value}`: props.value}</h1>
        </div>
    )
}

export default Digit