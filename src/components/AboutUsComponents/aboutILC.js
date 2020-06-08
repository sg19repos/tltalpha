import React, { Fragment } from "react";
import "./aboutUsStyle.css";

const AboutILC = () => {
    return (
        <Fragment>
            <div className="outerBorderDiv ">
                <h4 className="aboutUs_inner_component_title">
                    ABOUT THE ITALIAN-LEBANESE COOPERATION
                </h4>
                <div className="scrollBar pr-3 second">
                    <p>
                        The cooperation between the Italian Ministry of
                        Environment Land and Sea (IMELS) and the Lebanese Center
                        for Energy Conservation (LCEC) dates back to January
                        2013 when the MEDiterraneanDEvelopment of Support
                        schemes for solar Initiatives and Renewable Energies
                        (MED-DESIRE Project) was launched. MED-DESIRE was
                        co-funded by the European Union through the ENPI CBC MED
                        Programme 2007-2013. Based on the success of the
                        cooperation between IMELS and LCEC, a technical
                        cooperation agreement on sustainable development was
                        signed in Rome in 2016. The objective of the agreement
                        is to strengthen bilateral relations between Italy and
                        Lebanon in the field of sustainable development and the
                        fight against climate change.
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default AboutILC;
