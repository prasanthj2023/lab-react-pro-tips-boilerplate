import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css"
import Kalvium from "../assets/Kalvium-logo-SVG.svg"

const Navbar =()=>{

    const linkStyle = {
        textDecoration: 'none',
        color: 'white',
    }

    return (
     <>
        <div className="navbar">
            <img src={Kalvium} alt="" />
            <Link style={linkStyle} to="/forms" >Registration</Link>
            <Link style={linkStyle} to="/contacts">Prasanth</Link>
        </div>
     </>   
    )
}

export default Navbar;