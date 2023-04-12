import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css'

function Menu(){
    return(
        <div className="flex">
            <NavLink className="btn btn-primary"  to ="/register">Register</NavLink>
            <NavLink className="btn btn-primary" to ="/login">Login</NavLink>
        </div>
    );
}

export default Menu