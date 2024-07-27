import React from "react";

const Search =() =>{
    return(
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Serch user" />
            </div>

            <div className="userChat">
                <img src="https://images.pexels.com/photos/5750777/pexels-photo-5750777.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className="userChartInfo">
                    <span>Bundi</span>
                </div>
            </div>
        </div>
    );
}

export default Search