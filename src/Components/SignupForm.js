import React, { useState } from "react";
import "../Sass/signupForm.scss";
import ConfirmForm from "./InputForm/ConfirmForm";
import Email from "./InputForm/Email";
import Name from "./InputForm/Name";
import Password from "./InputForm/Password";
import Phone from "./InputForm/Phone";
import { SubmitSuccess, TermsNotChecked } from "./Modals/Modals";

export default function SignupForm() {
    const [step, setStep] = useState(1);
    const [showTermsModal, setShowTermsModal] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        checkTerms: false,
    });

    const [error, setError] = useState({
        name: false,
        email: false,
        password: false,
        phone: false,
    });

    // RENDER INPUT FORM STEP BY STEP
    const StepDisplay = () => {
        if (step === 1) {
            return (
                <Name
                    formData={formData}
                    setFormData={setFormData}
                    error={error.name}
                />
            );
        } else if (step === 2) {
            return (
                <Email
                    formData={formData}
                    setFormData={setFormData}
                    error={error.email}
                />
            );
        } else if (step === 3) {
            return (
                <Password
                    formData={formData}
                    setFormData={setFormData}
                    error={error.password}
                />
            );
        } else if (step === 4) {
            return (
                <Phone
                    formData={formData}
                    setFormData={setFormData}
                    error={error.phone}
                />
            );
        } else if (step === 5) {
            return (
                <ConfirmForm
                    formData={formData}
                    setFormData={setFormData}
                    error={error}
                />
            );
        }
    };

    // HANDLE INPUT VALUES WITH ERROR HANDLING
    function handleSubmit(e) {
        e.preventDefault();

        // STEP FORM VALIDATION
        if (step === 1 && !formData.name) {
            setError({ ...error, name: true });
        } else if (step === 2 && !formData.email) {
            setError({ ...error, email: true });
        } else if (step === 3 && !formData.password) {
            setError({ ...error, password: true });
        } else if (step === 3 && formData.password.length < 8) {
            setError({ ...error, password: true });
        } else if (step === 4 && !formData.phone) {
            setError({ ...error, phone: true });
        } else if (step === 4 && formData.phone.length !== 10) {
            setError({ ...error, phone: true });
        } else if (step === 5) {
            // FILLED FORM VALIDATION
            if (!formData.name) {
                setError({ ...error, name: true });
            } else if (!formData.email) {
                setError({ ...error, email: true });
            } else if (!formData.password) {
                setError({ ...error, password: true });
            } else if (formData.password.length < 8) {
                setError({ ...error, password: true });
            } else if (!formData.phone) {
                setError({ ...error, phone: true });
            } else if (formData.phone.length !== 10) {
                setError({ ...error, phone: true });
            } else if (!formData.checkTerms) {
                setShowTermsModal(true);
            } else {
                // IF SUBMITTED SUCCESSFULLY
                setError({
                    ...error,
                    name: false,
                    email: false,
                    password: false,
                    phone: false,
                });
                setShowTermsModal(false);
                setSignupSuccess(true);
            }
        } else {
            setError({
                ...error,
                name: false,
                email: false,
                password: false,
                phone: false,
            });

            step < 5 && setStep(step + 1);
        }
    }

    return (
        <>
            <div id="signupForm">
                <div className="step">
                    <p>{step === 5 ? "CONFIRM DETAILS" : `STEP ${step}/5`}</p>
                </div>

                {/* === RENDERING AREA === */}
                <div className="renderArea">
                    <form action="" onSubmit={handleSubmit} id="inputForm">
                        {StepDisplay()}
                    </form>
                </div>

                {/* === BUTTON CONTAINER === */}
                <div
                    className="button-container"
                    style={{ position: step === 5 ? "unset" : "absolute" }}
                >
                    <div>
                        {step > 1 && step < 5 && (
                            <button
                                className="previous"
                                onClick={() => setStep(step - 1)}
                            >
                                ← Previous
                            </button>
                        )}

                        <button
                            className="nextAndSubmit"
                            type="submit"
                            form="inputForm"
                            disabled={step > 5}
                        >
                            {step === 5 ? "Ready, Let's Start!" : "Next Step →"}
                        </button>
                    </div>
                    <p>or press "Enter"</p>
                </div>
            </div>

            {/* ======== MODALS ======= */}
            {showTermsModal && (
                <TermsNotChecked setShowTermsModal={setShowTermsModal} />
            )}
            {signupSuccess && (
                <SubmitSuccess setSignupSuccess={setSignupSuccess} />
            )}
        </>
    );
}
