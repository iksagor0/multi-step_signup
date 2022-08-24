// import Testimonial from "../Components/Testimonial";
import React from "react";
import LogoSologan from "../Components/LogoSologan";
import SignupForm from "../Components/SignupForm";
import Testimonial from "../Components/Testimonial";

export default function Signup() {
    return (
        <div id="signup">
            <div className="signup-container">
                <div className="about-area">
                    <LogoSologan />
                    <Testimonial />
                </div>

                <div className="form-area">
                    <SignupForm />
                </div>
            </div>
        </div>
    );
}
