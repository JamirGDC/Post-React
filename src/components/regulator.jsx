import React from 'react';
import '../styles/knobStyle.css'

const KnobRegulator = () => {
  return (<>
    <div className="container-fluid" id="upperCont">
      <div className="knoPlusHz">
        <div className="upper-hz d-flex align-items-center justify-content-center">
          <span>30 kHz</span>
        </div>
        <div className="knob d-flex align-items-center justify-content-center">
          <h1>KNOB</h1>
        </div>
        <div className="lower-hz">
          <div className="minMax">
            <span>30Hz</span>
            <span>30kHz</span>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default KnobRegulator;