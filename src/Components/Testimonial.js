import React from "react";

export default function Testimonial() {
    return (
        <div id="testimonial">
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div
                        className="carousel-item active"
                        data-bs-interval="3000"
                    >
                        <div className="">
                            <h5>Testimonial One</h5>
                            <p>
                                Some representative placeholder content for the
                                first slide.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Soluta praesentium aliquam
                                distinctio quis sint velit quasi asperiores,
                                totam ipsam dolore.
                            </p>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="3000">
                        <div className="">
                            <h5>Testimonial Two</h5>
                            <p>
                                Some representative placeholder content for the
                                second slide.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Soluta praesentium aliquam
                                distinctio quis sint velit quasi asperiores,
                                totam ipsam dolore.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
