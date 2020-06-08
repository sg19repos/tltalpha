import React, { Fragment } from "react";
import "./HiwStyles.css";

const EnergyLabel = () => {
    return (
        <Fragment>
            <div className="hiw-section-label">The energy label</div>
            <div className="hiw-section-description hiw-energylabel">
                <div className="hiw-energylabel-section1">
                    <img src="assets/energ1.jpg" alt="Energy label" />
                </div>
                <div className="hiw-energylabel-section2">
                    <img src="assets/energ2.jpg" alt="Energy label" />
                </div>
                <div className="hiw-energylabel-section3">
                    <p>
                        Examples of templates of EU Energy Labels for a
                        refrigerator and for a washing machine, with the “A++”
                        energy rating.
                    </p>
                    <p>
                        In Lebanon, the EU Energy Label can be found on (or
                        inside) many appliances at the different retailers’. It
                        is a good indicator of the appliance’s energy efficiency
                        and therefore how much consumers can save on their
                        energy bill, in kWh and in cash!
                    </p>
                    <p>
                        The IEEHA Program aims at promoting the most
                        energy-efficient appliances for Lebanese consumers by
                        bridging the financial gap when buying top-ranking
                        energy ratings appliances.
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default EnergyLabel;
