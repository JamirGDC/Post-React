import React from "react";
import '../../styles/radio-pass.css'

const RadioPass = (props) => {
    return (
        <div className="container-circle">
            <label className="circle-border">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" />
                <div className="circle"></div>
            </label>
            <div>{props.title}</div>
        </div>
    );
}

export default RadioPass;