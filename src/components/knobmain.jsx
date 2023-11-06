import React from "react";
import Knob from "./VolumeKnob";
import '../styles/knobmain.css'

const KnobMain = () => {

    return (
        <div className="container2-knob">
            <div className="titleknob">30kHz</div>
            <Knob />
            <div className="min">30 Hz</div>
            <div className="max">30 kHz</div>

        </div>
    );
}

export default KnobMain;