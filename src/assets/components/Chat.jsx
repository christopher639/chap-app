import React from "react";
import Cam from "../images/cam.png"
import More from "../images/more.png"
import Add from "../images/add.png"
import Messages from "./Messages";
import  Input from "./Input";


const Chart =() =>{
    return(
        <div className="chat">
            <div className="chatInfo">
                <span>Bundi</span>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
               
            </div>
            <Messages/>
            <Input/>
        </div>
        
    );
}

export default Chart