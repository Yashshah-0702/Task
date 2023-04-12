import React from "react";

import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";

// import Dashboard from "./dashboard";
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import Dashboard from "./dashboard";


function Login(){
    const navigate = useNavigate()
    return(
        <div>
            <h1 className="h1 text-center">Login Page</h1>
            <form>
            <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" required className="form-control" id="email" placeholder="name@example.com"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" required className="form-control" id="password" placeholder="**********"></input>
                </div>
            <button onClick={validate} className="btn btn-primary">Login</button>
            </form>
        </div>
    );
    
    function validate(){
        const userdetails12 = JSON.parse(localStorage.getItem("userdetails"))
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value
        console.log(email,password)
        console.log(userdetails12.email1,userdetails12.password1)
        console.log(userdetails12)
        if(userdetails12.email1 == (email) || userdetails12.password1 == (password)){
            alert("Correct details")
            navigate ('/dashboard')
        }
        else if (email.length == "" || password.length == ""){
            alert("Fields should not be empty")
        }
        else{
            alert("details are not correct")
        }
    }
}


export default Login