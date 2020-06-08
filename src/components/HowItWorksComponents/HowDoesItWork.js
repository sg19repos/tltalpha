import React, { Fragment } from "react";
import "./HiwStyles.css";

const HowDoesItWork = () => {
    return (
        <Fragment>
            <div className="hdiw-main">
                <div className="hiw-section-label">How does it work</div>
                <div className="hiw-section-description">
                    <div className="listing">
                        <div>
                            <span>1</span>
                            <p>
                                Search for an appliance from the list of
                                eligible products &amp; look for its
                                availability at the different stores from
                                retailers partnering the Program.
                            </p>
                        </div>
                        <div>
                            <span>2</span>
                            <p>
                                Also, eligible appliances can be easily found
                                directly at retailers’ stores by asking the
                                salespersons or by following the posters,
                                banners or stickers.
                            </p>
                        </div>
                        <div>
                            <span>3</span>
                            <p>
                                Choose the appliance that suits your needs best
                                and ask for the best-available energy rating.
                                However, note that the product has to be
                                Italian: either made in Italy or of an Italian
                                brand.
                            </p>
                        </div>
                        <div>
                            <span>4</span>
                            <p>
                                At cashier, ask for your coupon! It will give
                                you access to a cashback that you will collect
                                later on from any Fransabank branch.
                            </p>
                        </div>
                        <div>
                            <span>5</span>
                            <p>
                                Download the app or log-in through the website
                                and you will easily learn about the different
                                steps to get your cashback…
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HowDoesItWork;
