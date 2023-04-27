import React from "react";
import "./Module.Banner.css";

function Banner(){
    return(
        <div className="banner">
            <div className="login">Already have an account? <span><button>LOGIN</button></span></div>
            <div className="bheading">Discover new things on<br/> Superapp</div>
        </div>
    )
}

export default Banner;