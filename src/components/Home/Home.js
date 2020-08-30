import React from "react";
import '../styles/Home.css'
import valkyPlanet from'../../images/valkyplanet.png';
import buttonNext from'../../images/buttonE.png';

const Home = (props) => {

  const handleClick = (e) => {
    props.nextStep(1);
  };
 
  return (
    <div className="container">
      <div>
        <img className="valkyPlanet" src={valkyPlanet} alt=""/>
        
      </div>
      <div>
        <img className="buttonNext" src={buttonNext} alt="" onClick={handleClick}/>
      
      </div>
    
    </div>
  );

};

export default Home;
