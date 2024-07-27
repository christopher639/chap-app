import React from "react";
import Send from "../images/send.png"
import Img from "../images/img-icon.png"
import Attach from "../images/atach.png"

const Input =() =>{
    return(
        <div className="input">
           <input type="text" placeholder="Type messages..." />
           <div className="send">
            <img src={Attach} alt="" />
            <input type="file"  style={{display:"none"}} id="file"/>
            <label htmlFor="file">
                <img src={Img} alt="" />
            </label>
            <button>Send</button>
           </div>
        </div>
    );
}

export default Input