import React from "react";
import Add from "../images/upload-icon.png"
const Register = ()=>{
    return(

        <div className="formContainer">
            <div className="formRapper">
                <span className="logo">Chap App</span>
                <span className="title">Regester</span>
                <form action="">
                    <input type="text" placeholder=" Name" />
                    <input type="email" placeholder=" email" />
                    <input type="password" placeholder=" password" />
                    <input style={{display:"none"}} type="file" id="file" placeholder="" />
                    <label htmlFor="file">
                        <img   src={Add} alt="" />
                        <span>Add an avator</span>
                    </label>
                    <button>Sign Up</button>
                    <p>You have an account ? login</p>
                </form>
            </div>
        </div>

    );
}

export default Register