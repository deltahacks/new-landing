import React from "react";
import "./background.css";
import BG from '../../assets/BG.png'

const Background = () => {

    return (
        <div className="background">
            <img src={BG} className="logo react" alt="React logo" />
        </div>
    )
}

export default Background;