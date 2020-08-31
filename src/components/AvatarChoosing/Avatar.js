import React, {useState, useEffect} from "react";
import '../styles/Avatar.css'
import buttonNext from'../../images/avatars/buttoncreate.png';
import leftArrow from'../../images/avatars/leftArrow.png';
import rightArrow from'../../images/avatars/rightArrow.png';



const Avatar = (props) => {

  const [avatarImg, setAvatarImg] = useState(1);
  const [avatarName, setAvatarName] = useState("");
  const [errorName, setErrorName] = useState(false);

    const handleClick = (e) => {
        props.avatar({img: valky[avatarImg], name: avatarName});
        if (avatarName != ""){
          setErrorName(false);
          props.nextStep(3);
        } else{
          setErrorName(true);
        }
        
    };

    const handleName = (e) => {
    
      setAvatarName(e.target.value);
    }

    const next = (e) => {
     
      if(e.target.id == "chooseright"){
        if(avatarImg == 10){
          setAvatarImg(1);
        } else {
          setAvatarImg(avatarImg + 1);
        }
        
      } 
      if (e.target.id == "chooseleft"){
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


  return (
    <div className="containerA">
      
       <div className="content">

         <p className="titleName">¿Como se llama tu Valkyavatar?</p>
         <input className="inputName" type="text" placeholder="Valky Nombre" onChange={handleName}/>

         <div className="contentLeft">

           <div className="headContent">
                <img id="chooseleft" src={leftArrow} alt="" onClick={next}/>
                      
                <p className="titleAvatar"> Elige tu Avatar</p>
                <img id="chooseright" src={rightArrow} alt="" onClick={next}/>
                    
                <img className="valkySet" src={valky[avatarImg]} alt=""/>
           </div>
  
         </div>
 
         <img className="createButton" src={buttonNext} alt="" onClick={handleClick}/>
         { errorName ? <p className="errorName" >Elige un nombre</p>:null }
       </div>
     
    </div>
  );

};

export default Avatar;
