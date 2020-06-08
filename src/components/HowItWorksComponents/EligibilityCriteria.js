import React, { Fragment } from "react";

const EligibilityCriteria = () => {
    return (
        <Fragment>
            <div className="eligibility-criteria-main">
                <div className="hiw-section-label">Eligibility Criteria</div>
                <div className="hiw-section-description">
                    <p>
                        To be eligible, the appliance should be part of the
                        following types and be compliant with the
                        energy-efficiency requirements as per below:
                    </p>
                    <div className="eligibility">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th style={{ background: "#FFFFFF" }}></th>
                                    <th colSpan="2">Coupons</th>
                                </tr>
                                <tr>
                                    <th>Eligible appliances’ types</th>
                                    <th>Eligible energy ratings </th>
                                    <th>Value of coupon in USD</th>
                                </tr>
                                <tr>
                                    <td>Washers</td>
                                    <td>A+++</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>Dryers</td>
                                    <td>A+++</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>Washer-dryers</td>
                                    <td>A++ and A+++</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>
                                        Refrigerators and freezers
                                        <br />
                                        (starting 10 CFT, approx. 283 L){" "}
                                    </td>
                                    <td>A++ and A+++</td>
                                    <td>150</td>
                                </tr>
                                <tr>
                                    <td>ACs</td>
                                    <td>A+</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>Dishwashers</td>
                                    <td>A+++</td>
                                    <td>150</td>
                                </tr>
                                <tr>
                                    <td>Electric and/or gas ovens</td>
                                    <td>A+, A++ and A+++</td>
                                    <td>150</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EligibilityCriteria;
