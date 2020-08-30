import React, {useState} from 'react';
import './App.css';
import Home from './components/Home/Home'
import Greeting from './components/Greeting/Greeting';
import AvatarSelected from './components/AvatarChoosing/Avatar';


function App() {
  const [step, setStep] = useState(0);
  const nextStep = (step) => {
    setStep(step);
    console.log(step);
  };
  return (
    <div >
      { step === 0 ?  <Home {...{ step, nextStep }} />: null }
      { step === 1 ?  <Greeting {...{ step, nextStep }} />: null }
      { step === 2 ?  <AvatarSelected {...{ step, nextStep }} />: null }
    </div>
  )
}

export default App;
