import React from "react";
import {memo} from "react"

const Navbar = ({adjective, getAdjective}) =>{
    console.log("Navbar is rendered")
    return (
        <div>
        I am a {adjective} navbar
        <button onClick={() => {getAdjective()}}>CHANGE ME</button>
        </div>
    )
}

export default memo(Navbar);


//memo : it is rendered only when props of the state are changed else it will not render again and again on reloading of the page
// if memo is not used the state on reload will render the Navbar on each reload