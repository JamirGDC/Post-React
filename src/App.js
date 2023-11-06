import logo from './logo.svg';
import './App.css';
import Pass from './view/pass';
import Buttons from './view/buttons';
import Regulator from './view/regulator';
import React, { useState } from 'react';
import Knob from './view/VolumeKnob';


function App() {

  return (
    <div className="App">
      <Knob />

      <Regulator />
      <Pass />
      <Buttons />
    </div>
  );
}

export default App;
