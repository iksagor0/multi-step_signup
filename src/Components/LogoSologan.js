import React from "react";
import tunaLogo from "../Assets/tuna-logo-white.png";
export default function LogoSologan() {
    return (
        <div id="logoSologan">
            <img src={tunaLogo} alt="tuna-logo-white" className="logo" />
            <p className="sologan">Sexy signup form for your customers</p>
            <h3 className="trial">14 days Free Trial</h3>
            <div className="divider"></div>
        </div>
    );
}
