import React, {useState, useEffect} from "react";
import '../styles/ValkyLand.css'
import valkyHat from'../../images/valkyhat.png';
import backimage from'../../images/valkyland.png';
import valkilandTop from'../../images/mountains.png';
import valkibuilding from'../../images/valkybuilding.png';
import buttonNext from'../../images/valkyavatar.png';


const ValkyLand = (props) => {

 

  return (
    <div className="containerV">
       
        <div className="blueBack">
           <img className="valkilandTop" src={valkilandTop} alt="backimage" />
           <div className="bottomDiv"></div>
        </div>
        <div className="greenBack">
           <img className="valkilandBuilding" src={valkibuilding} alt="backimage" />
        </div>
       
       <div className="hat-Content">
            
            <div className="boxV sb2V">
                    <strong>{props.avatarSelected.name + ", "}</strong>
                    <span>bienvenido a VALKYLAND. Este es mi pequeño gran mundo. Te acompañaré en este recorrido para conocernos mejor</span>
            </div>
            <div className="avatars">
                <img className="valkyHatVH" src={valkyHat} alt="valkyHat" />
                <img className="valkyHatV" src={props.avatarSelected.img} alt="valkyHat" />
            </div>

       </div>
        
       

    </div>
  );

};

export default ValkyLand;
