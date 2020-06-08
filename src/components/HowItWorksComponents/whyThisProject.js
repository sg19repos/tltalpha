import React, { Fragment } from "react";
import "./HiwStyles.css";

const WhyThisProject = () => {
    return (
        <Fragment>
            <div className="hiw-section-label">Why this project?</div>
            <div className="hiw-section-description">
                <h4>THE IEEHA PROGRAM</h4>
                <p>
                    The Program “Italian Energy Efficient Home Appliances"
                    (IEEHA) is launched by both the Italian Ministry of the
                    Environment, Land and Sea (IMELS) and the Lebanese Center
                    for Energy Conservation (LCEC).
                </p>
                <p>
                    It aims at promoting Italian home appliances that have
                    top-energy ratings according to the European labeling scheme
                    and that are available on the Lebanese market.
                </p>
                <p>
                    The European Energy Label was launched as a Directive back
                    in 1992 (revised in 2011) and it progressively became
                    mandatory for a large panel of products, including home
                    appliances. It allows consumers to have access to
                    information about product’s energy consumption per year and
                    other main characteristics. A color and an energy rating,
                    ranging from A+++ to D (for most appliances), indicate how
                    energy-efficient the appliance is.
                </p>
            </div>
        </Fragment>
    );
};

export default WhyThisProject;
