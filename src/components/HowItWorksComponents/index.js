import React, { Fragment } from "react";
import WhyThisProject from "./whyThisProject";
import EnergyLabel from "./EnergyLabel";
import EligibilityCriteria from "./EligibilityCriteria";
import HowDoesItWork from "./HowDoesItWork";
import PartnersInProgram from "./PartnersInProgram";
import FinancialPartner from "./FinancialPartner";

const HowItWorks = () => {
    return (
        <Fragment>
            <div className="hiwscrollBar">
                <WhyThisProject />
                <EnergyLabel />
                <EligibilityCriteria />
                <HowDoesItWork />
                <PartnersInProgram />
                <FinancialPartner />
            </div>
        </Fragment>
    );
};

export default HowItWorks;
