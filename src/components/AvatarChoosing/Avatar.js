import React, {useState, useEffect} from "react";
import '../styles/Avatar.css'
import valky1 from'../../images/avatars/avatar1.png';
import buttonNext from'../../images/avatars/buttoncreate.png';
import useInterval from '../../messageInterval';
import { AnimateOnChange } from 'react-animation'


const Greeting = (props) => {

    const handleClick = (e) => {
        props.nextStep(3);
    };

    const [avatarImg, setAvatarImg] = useState(1);

    const next = (e) => {
     
      if(e.target.value == "right"){
        if(avatarImg == 10){
          setAvatarImg(1);
        } else {
          setAvatarImg(avatarImg + 1);
        }
        
      } 
      if (e.target.value == "left"){
        if (avatarImg == 1){
          setAvatarImg(10);
        } else {
          setAvatarImg(avatarImg - 1);
        }
        
      }
    }

    const valky = [];

    let valkyName = "";
    for(let i = 1; i <= 10;i++){
      valkyName = "avatar" + i;
      valky[i] = require("../../images/avatars/"+ valkyName +".png")
    }

  
    useEffect(() => {
        console.log(avatarImg)
      
    }, [avatarImg])

  return (
    <div className="containerA">
       <div className="grid-item">
         <p className="titleName">¿Como se llama tu Valkyavatar?</p>
         <input className="inputName" type="text" placeholder="Valky Nombre"/>
         <div className="contentLeft">
           <img className="valkySet" src={valky1} alt=""/>
         </div>
         <img className="createButton" src={buttonNext} alt=""/>
       </div>
       <div className="grid-item">
         <p className="titleAvatar">Elige tu Avatar</p>
         
         <div className="choose-container">
              <button id="chooseleft" value="left" onClick={next}>
              L
              </button>
              <img className="valkyChoose" src={valky[avatarImg]} alt=""/>
              
              <button id="chooseright" value="right" onClick={next}>
                R
              </button>
         </div>
         
        

       </div>
    </div>
  );

};

export default Greeting;
