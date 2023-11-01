import React from "react";
import "./button.css";

const Button = (props) => {
    return (
        <div className="container-button">
            <div className="button">{props.title}</div>
        </div>
    );
}

export default Button;