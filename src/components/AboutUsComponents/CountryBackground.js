import React, { Fragment } from "react";
import "./aboutUsStyle.css";

const CountryBackground = () => {
    return (
        <Fragment>
            <div className="outerBorderDiv">
                <h4 className="aboutUs_inner_component_title">
                    Country Background
                </h4>
                <img src="assets/country.jpg" alt="CountryImage" />
                <div className="scrollBar pr-3 first">
                    <p>
                        The building sector in Lebanon is consuming around 78%
                        of the overall electricity generated in the country.
                        Within this sector, residential buildings have been the
                        largest consumers of electricity during the recent
                        years, accounting for 30% of the overall electricity
                        demand in 2014.
                    </p>
                    <p>
                        In its second National Energy Efficiency Action Plan
                        (NEEAP 2016-2020), the Lebanese Center for Energy
                        Conservation (LCEC) set a target of 1.5 TWh of savings
                        to be achieved by 2020. These include: 149 GWh of
                        savings in buildings, of which 55.6 GWh from energy
                        efficient equipment.{" "}
                    </p>
                    <p>
                        In order to achieve these savings, the LCEC has defined
                        various energy efficiency initiatives to be implemented
                        for the period 2016-2020, one of them is the use of more
                        energy efficient equipment.{" "}
                    </p>
                    <p>
                        The program emerges in response to the latest NEEAP
                        initiative and as a trigger to unleash the potential of
                        energy savings in the residential sector.{" "}
                    </p>
                    <p>
                        It is also in line with Lebanon’s commitment at the
                        Paris 21st Conference of Parties (CoP) to reduce CO2
                        emissions, limit global warming and promote climate
                        actions. In September 2015, Lebanon engaged in a
                        long-term low-emission and climate-resilient strategy
                        with the following “Intended Nationally Determined
                        Contributions” (INDCs) to be achieved by 2030.{" "}
                    </p>
                    <p>
                        This engagement translated into the below conditional
                        targets if adequate international support is provided:
                    </p>
                    <ul>
                        <li>
                            Greenhouse Gas (GHG) Emission Reduction of 30%
                            compared to the business-as-usual scenario;
                        </li>
                        <li>
                            Renewable Energy sources contributing to 20% of the
                            power and heat demand;
                        </li>
                        <li>
                            Energy Efficiency improvements leading to 10% of
                            reduction in power demand.
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default CountryBackground;
