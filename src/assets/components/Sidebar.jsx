import React from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import Chats from "./Chats";

const SideBar =() =>{
    return(
       <div className="sidebar">
        <NavBar/>
        <Search/>
        <Chats/>
        <Chats/>
        <Chats/>
        
       </div>
    );
}

export default SideBar