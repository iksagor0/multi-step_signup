import React, { useRef, useState } from "react";
import "../../Sass/confirmForm.scss";

export default function ConfirmForm({ formData, setFormData, error }) {
    // const [checked, setChecked] = useState(false);

    const [editBtns, setEditBtns] = useState({
        name: true,
        email: true,
        password: true,
        phone: true,
    });

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const phoneRef = useRef(null);

    console.log(error);
    return (
        <div id="confirmForm">
            {/* NAME */}
            <div className="formControl">
                <label htmlFor="">Name</label>
                <div className="inputContainer">
                    <input
                        style={{
                            background: error.name ? "#B64950" : "transparent",
                        }}
                        type="text"
                        value={formData.name}
                        ref={nameRef}
                        onFocus={() =>
                            setEditBtns({
                                ...editBtns,
                                name: false,
                            })
                        }
                        onBlur={() =>
                            setEditBtns({
                                ...editBtns,
                                name: true,
                            })
                        }
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                    />
                    {editBtns.name && (
                        <span onClick={() => nameRef.current.focus()}>
                            EDIT
                        </span>
                    )}
                </div>
            </div>

            {/* EMAIL */}
            <div className="formControl">
                <label htmlFor="">Email</label>
                <div className="inputContainer">
                    <input
                        style={{
                            background: error.email ? "#B64950" : "transparent",
                        }}
                        type="email"
                        value={formData.email}
                        ref={emailRef}
                        onFocus={() =>
                            setEditBtns({
                                ...editBtns,
                                email: false,
                            })
                        }
                        onBlur={() =>
                            setEditBtns({
                                ...editBtns,
                                email: true,
                            })
                        }
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    {editBtns.email && (
                        <span onClick={() => emailRef.current.focus()}>
                            EDIT
                        </span>
                    )}
                </div>
            </div>

            {/* PASSWORD */}
            <div className="formControl">
                <label htmlFor="">Password</label>
                <div className="inputContainer">
                    <input
                        style={{
                            background: error.password
                                ? "#B64950"
                                : "transparent",
                        }}
                        type="password"
                        value={formData.password}
                        ref={passwordRef}
                        onFocus={() =>
                            setEditBtns({
                                ...editBtns,
                                password: false,
                            })
                        }
                        onBlur={() =>
                            setEditBtns({
                                ...editBtns,
                                password: true,
                            })
                        }
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                    />
                    {editBtns.password && (
                        <span onClick={() => passwordRef.current.focus()}>
                            EDIT
                        </span>
                    )}
                </div>
            </div>

            {/* PHONE */}
            <div className="formControl">
                <label htmlFor=""> Phone</label>
                <div className="inputContainer">
                    <input
                        style={{
                            background: error.phone ? "#B64950" : "transparent",
                        }}
                        size="10"
                        type="number"
                        value={formData.phone}
                        ref={phoneRef}
                        onFocus={() =>
                            setEditBtns({
                                ...editBtns,
                                phone: false,
                            })
                        }
                        onBlur={() =>
                            setEditBtns({
                                ...editBtns,
                                phone: true,
                            })
                        }
                        onKeyDown={(e) =>
                            e.key === "Backspace" &&
                            setFormData({
                                ...formData,
                                phone: formData.phone.slice(0, -1),
                            })
                        }
                        onChange={(e) =>
                            formData.phone.length >= 10
                                ? setFormData({
                                      ...formData,
                                      phone: formData.phone,
                                  })
                                : setFormData({
                                      ...formData,
                                      phone: e.target.value,
                                  })
                        }
                    />
                    {editBtns.phone && (
                        <span onClick={() => phoneRef.current.focus()}>
                            EDIT
                        </span>
                    )}
                </div>
            </div>

            {/* CONFIRM TERMS */}
            <div
                className="formControl termsControl"
                onClick={() =>
                    setFormData({
                        ...formData,
                        checkTerms: !formData.checkTerms,
                    })
                }
            >
                {formData.checkTerms ? (
                    <i class="fa-solid fa-check"></i>
                ) : (
                    <span className="checkbox"></span>
                )}
                <span>I agree to the</span>
                <span className="terms-link">terms of services.</span>
            </div>
        </div>
    );
}
