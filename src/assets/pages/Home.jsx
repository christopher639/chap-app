import React from "react";
import SideBar from "../components/Sidebar";
import Charts from "../components/Chats";
import Chart from "../components/Chat";

const Home =() =>{
    return(
        <div className="home">
            <div className="container">
              <SideBar/>
              <Chart/>
            </div>
        </div>
    );
}

export default Home