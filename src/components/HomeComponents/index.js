import React, { Fragment } from "react";
import "./homeStyles.css";

const Home = () => {
    return (
        <Fragment>
            <div className="hiwscrollBar">
                <div className="home-main">
                    <div className="home-image-row">
                        <div className="home-image-col">
                            <div className="home-img section1">
                                <h4>
                                    speed up the process
                                    <br /> via our app
                                </h4>
                                <button>Download Now</button>
                            </div>
                        </div>

                        <div className="home-image-col">
                            <div className="home-img section2">
                                <h4>
                                    Register
                                    <br /> &amp; claim your coupon
                                </h4>
                                <button>Register Now</button>
                            </div>
                        </div>

                        <div className="home-image-col">
                            <div className="home-img section3">
                                <h4 className="my-account">My Account</h4>
                                <button>status Tracking</button>
                            </div>
                        </div>
                    </div>

                    <div className="supporter-section">
                        <div className="official-supporter">
                            <div className="official-supporter-title">
                                <h4>
                                    official supporter
                                    <br />
                                    <span>of this project</span>
                                </h4>

                                <img
                                    src="./assets/ministry-energy-logo.png"
                                    alt="supporter-logo"
                                />
                            </div>
                        </div>
                        <div className="financial-partner">
                            <div className="financial-partner-title">
                                <h4>
                                    financial partner
                                    <br />
                                    <span>of this project</span>
                                </h4>

                                <img
                                    src="./assets/bank-logo.png"
                                    alt="supporter-logo"
                                />
                            </div>
                        </div>
                        <div className="retailers">
                            <div className="retailers-title">
                                <h4>retailers</h4>

                                <img
                                    src="./assets/aghasarkissiann-retailer-logo.png"
                                    alt="supporter-logo"
                                />
                                <img
                                    src="./assets/abedtahan-retailer-logo.png"
                                    alt="supporter-logo"
                                />
                                <img
                                    src="./assets/beytech-retailer-logo.png"
                                    alt="supporter-logo"
                                />
                                <img
                                    src="./assets/khoury-home-retailer-logo.png"
                                    alt="supporter-logo"
                                />
                            </div>
                        </div>
                    </div>
                    <img src="./assets/bottom-banner.jpg" />
                </div>
            </div>
        </Fragment>
    );
};

export default Home;
