import React from 'react';
import './styles/style.css'
import Pass from './components/pass';
import Buttons from './components/buttons';
import KnobMain from './components/knobmain';


export default function App() {
  return (<>
    <KnobMain />
    <Pass />
    <Buttons />
  </>);
}
