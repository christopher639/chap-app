import React from "react";
const Login = ()=>{
    return(

        <div className="formContainer">
            <div className="formRapper">
                <span className="logo">Chap App</span>
                <span className="title">Login</span>
                <form action="">
                   
                    <input type="email" placeholder=" email" />
                    <input type="password" placeholder=" password" />
                   
                    
                    <button>Login</button>
                    <p>Dont  have an account ? signUp</p>
                </form>
            </div>
        </div>

    );
}

export default Login