import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login";

function User() {
    const navigate = useNavigate()
    return (
        <div>
            <h1 className="h1 text-center">Registration Page</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" required className="form-control" id="email1" placeholder="name@example.com"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" required className="form-control" id="password1" placeholder="**********"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                    <input type="text" required className="form-control" id="name" placeholder="name@example.com"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                    <input type="number" required className="form-control" id="number" placeholder="123455678"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Profile Image</label>
                    <input type="file" required className="form-control" id="image" placeholder="name@example.com"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">DOB</label>
                    <input type="date" required className="form-control" id="date" placeholder="name@example.com"></input>
                </div>
                <button onClick={alert123} className="btn btn-primary" >Register</button>
            </form>
        </div>
    );
    function alert123() {
    
        var email1 = document.getElementById("email1").value
        var password1 = document.getElementById("password1").value
        var name = document.getElementById("name").value
        var number = document.getElementById("number").value
        var image = document.getElementById("image").value
        var date = document.getElementById("date").value
        const userdetails = {email1,password1,name,number,image,date}
       if(email1.length=="" || password1.length == "" || name.length == "" || number.length=="" || image.length == "" || date.length == ""){
        alert("Fields should not be empty")
       }
       else{
        // prompt("User is registered")
        const confirm = window.confirm("User is registered,do you want to go to login page?")
        if(confirm){
            navigate('/login')
        }
       
        localStorage.setItem("userdetails",JSON.stringify(userdetails))
    }
    }
}



export default User