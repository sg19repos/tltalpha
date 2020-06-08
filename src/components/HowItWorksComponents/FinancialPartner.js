import React, { Fragment } from "react";
import "./HiwStyles.css";

const FinancialPartner = () => {
    return (
        <Fragment>
            <div className="financial-partner-main">
                <div className="hiw-section-label">Financial Partner</div>
                <div className="hiw-section-description">
                    <div className="financial-partner-image">
                        <img src="assets/bank-logo.png" alt="BankLogo" />
                    </div>
                    <div className="financial-partner-image">
                        <img src="assets/map.jpg" alt="MapImage" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default FinancialPartner;
