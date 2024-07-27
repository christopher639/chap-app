import React from "react";

const Message =() =>{
    return(
        <div className="message  owner">
          <div className="messageInfo">
              <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />


              <span>Just now</span>

          </div>

          <div className="messageContent">
             <p>Mambo bro</p>
             <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
        </div>
    );
}

export default Message