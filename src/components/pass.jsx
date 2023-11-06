import React, { useState } from "react";
import RadioPass from "./buttons/radio-pass";
import '../styles/radio-pass.css'
import '../styles/passStyle.css'

const Pass = () => {

    const [ low, high ] = useState("Lowpass")

    const update = () => {
        high("Highpass")
    }

    const midUpdate = () => {
        high("Midpass")
    }

    const unUpdate = () => {
        high("Lowpass")
    }

    return (
        <div>
            <div className="container-pass">
                <h2 className="pass-title">{low}</h2>
            </div>
            <div className="container-radio-pass">
                <div className="radio-low" onClick={() => unUpdate()}>
                    <RadioPass title="6" />
                    <RadioPass title="12" />
                </div>
                <div onClick={() => midUpdate()}>
                    <RadioPass title="18" />
                </div>
                <div className="radio-high" onClick={() => update()}>
                    <RadioPass title="24" />
                    <RadioPass title="36" />
                </div>
            </div>
        </div>
    );
}

export default Pass;