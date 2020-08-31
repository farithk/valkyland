import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home/Home'
import Greeting from './components/Greeting/Greeting';
import AvatarSelected from './components/AvatarChoosing/Avatar';
import ValkyLand from './components/ValkyLand/ValkyLand';


function App() {
  const [step, setStep] = useState(0);
  
  const [avatarSelected, setAvatarSelected] = useState({img:"avatar1", name:"valky"});
  

  const avatar = (avatar) => {
    setAvatarSelected(avatar);
    
  };
  
  const nextStep = (step) => {
    setStep(step);
    if (step == 3){
      document.body.style.backgroundImage  = 'none';
      document.body.style.backgroundColor  = 'rgb(110, 146, 39)';
    }
    
  };

  useEffect(() => {
    console.log(avatarSelected)
    
  }, [avatarSelected])
  return (
    <div >
      { step === 0 ?  <Home {...{ step, nextStep }} />: null }
      { step === 2 ?  <Greeting {...{ step, nextStep }} />: null }
      { step === 1 ?  <AvatarSelected {...{ step, nextStep, avatar }} />: null }
      { step === 3 ?  <ValkyLand {...{ step, nextStep, avatarSelected }} />: null }
    </div>
  )
}

export default App;
