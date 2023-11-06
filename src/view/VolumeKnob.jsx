import React, { useState } from 'react';
import './Knob.css';

const Knob = () => {
  const [angle, setAngle] = useState(0);

  const handleMouseDown = (e) => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = (e) => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    let newAngle = Math.atan2(y, x) * (180 / Math.PI);

    // Asegurarse de que el ángulo esté dentro del rango de -45 a 45
    if (newAngle < -135) {
      newAngle = -135;
    } else if (newAngle > 135) {
      newAngle = 135;
    }

    setAngle(newAngle);
  };

  const knobStyle = {
    transform: `rotate(${angle}deg)`
  };

  let divisions = [];
  for (let i = -135; i <= 135; i += 15) {
    divisions.push(
      <div key={i} className="division" ></div>
    );
  }

  return (
    <div className="container-knob">
      <div className="knob" onMouseDown={handleMouseDown} style={knobStyle}>
      <div className="indicator" />
      {divisions}
    </div>
    </div>
  );
};

export default Knob;
