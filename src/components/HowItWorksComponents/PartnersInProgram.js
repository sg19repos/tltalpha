import React, { Fragment } from "react";
import "./HiwStyles.css";

const PartnersInProgram = () => {
    return (
        <Fragment>
            <div className="pip-main">
                <div className="hiw-section-label">Partners in the program</div>
                <div className="pip-image-grid">
                    <div className="pip-image">
                        <img
                            src="assets/abedtahan-retailer-logo.png"
                            alt="Image1"
                        />
                    </div>
                    <div className="pip-image">
                        <img
                            src="assets/aghasarkissiann-retailer-logo.png"
                            alt="Image2"
                        />
                    </div>
                    <div className="pip-image">
                        <img
                            src="assets/beytech-retailer-logo.png"
                            alt="Image3"
                        />
                    </div>
                    <div className="pip-image">
                        <img
                            src="assets/khoury-home-retailer-logo.png"
                            alt="Image4"
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PartnersInProgram;
