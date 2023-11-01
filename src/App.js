import logo from './logo.svg';
import './App.css';
import Pass from './view/pass';
import Buttons from './view/buttons';
import Regulator from './view/regulator';

function App() {
  return (
    <div className="App">
        <Regulator />
        <Pass />
        <Buttons />
    </div>
  );
}

export default App;
