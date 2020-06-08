import React, { Fragment } from "react";
import "./tncStyles.css";

const TnC = () => {
    return (
        <Fragment>
            <div className="tnc-main">
                <h4 className="aboutUs_inner_component_title">
                    Terms and Conditions
                </h4>
                <p>
                    Google’s privacy policies explain how we treat your personal
                    data and protect your privacy when you use our Services. By
                    using our Services, you agree that Google can use such data
                    in accordance with our privacy policies.
                </p>
                <p>
                    We respond to notices of alleged copyright infringement and
                    terminate accounts of repeat infringers according to the
                    process set out in the U.S. Digital Millennium Copyright
                    Act.
                </p>
                <p>
                    We provide information to help copyright holders manage
                    their intellectual property online. If you think somebody is
                    violating your copyrights and want to notify us, you can
                    find information about submitting notices and Google’s
                    policy about responding to notices in our Help Center.
                </p>
            </div>
        </Fragment>
    );
};

export default TnC;
