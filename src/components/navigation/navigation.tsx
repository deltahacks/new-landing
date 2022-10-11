import React from "react";
import Logo from "../../assets/Logo.svg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import Linkedin from "../../assets/Linkedin.svg";
import TikTok from "../../assets/TikTok.svg";
import Youtube from "../../assets/Youtube.svg";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <a href="#" target="_blank">
        <img src={Logo} alt="Deltahacks logo" />
      </a>

      <span className="social-container">
        <a href="#" target="_blank">
          <img className="social-logo" src={Facebook} alt="Facebook logo" />
        </a>
        <a href="#" target="_blank">
          <img className="social-logo" src={Instagram} alt="Instagram logo" />
        </a>
        <a href="#" target="_blank">
          <img className="social-logo" src={Linkedin} alt="Linkedin logo" />
        </a>
        <a href="#" target="_blank">
          <img className="social-logo" src={Youtube} alt="Youtube logo" />
        </a>
        <a href="#" target="_blank">
          <img className="social-logo" src={TikTok} alt="TikTok logo" />
        </a>
      </span>
    </div>
  );
};

export default Navigation;
