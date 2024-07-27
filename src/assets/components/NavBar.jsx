import React from "react";

const NavBar =() =>{
    return(
        <div className="navbar">
          <span  className="logo"> Lema Chat</span>
          <div className="user">
           <img src="https://images.pexels.com/photos/5750777/pexels-photo-5750777.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
           <span>Bundi</span>
           <button>Log Out</button>
          </div>
        </div>
    );
}

export default NavBar