import React, {useState, useEffect} from "react";
import '../styles/Greeting.css'
import valkyHat from'../../images/valkyhat.png';
import buttonNext from'../../images/valkyavatar.png';
import useInterval from '../../messageInterval';
import { AnimateOnChange } from 'react-animation'

const Greeting = (props) => {

    const handleClick = (e) => {
        props.nextStep(2);
    };
    
    const [message, setMessage] = useState(0);
    let counter = 0;
    const handleInterval = () =>  {
        counter++;
        setMessage(counter);
    }
   
    const stopInterval = useInterval(handleInterval, 2000);

    useEffect(() => {
        
       
        if(message > 3){
            stopInterval();
        }
        
    }, [message])

  return (
    <div className="containerG">
        <div className="grid-item">
            <img className="valkyHat" src={valkyHat} alt="valkyHat" />
        </div>
        <div className="grid-item">
            {message >= 0 ? <div className="box-one box sb2">¡HOLA! Yo soy Valky</div>: null}
            {message >= 1 ? <div className="box-two box sb2">Estoy aquí para acompañarte, entenderte
            e intentar ayudarte a comprender algunos
            sentimientos o sensaciones que tienes a
            menudo</div>: null}
            {message >= 2 ? <div className="box-two box sb2">Déjame llevarte a Valkyland en donde juntos podremos conocernos y conocer a otros valkyrianos.</div>: null}
            {message >= 3 ? <div className="box-two box sb2">¡Empieza creando tu Valkyavatar!</div>: null}
            
            
            
        </div>
        {message >= 3 ? <img className="buttonNext2" src={buttonNext} alt=""  onClick={handleClick}/>: null}
        
        
      
    </div>
  );

};

export default Greeting;
