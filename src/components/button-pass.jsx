import React from "react";
import "./button-pass.css";

const ButtonPass = (props) => {
    return (
        <div className="container-circle">
            <div className="circle-border">
                <div className="circle"></div>
            </div>
            <div>{props.title}</div>
        </div>
    );
}

export default ButtonPass;