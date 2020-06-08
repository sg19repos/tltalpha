import React, { Fragment } from "react";
import "./HeaderStyles.css";
import PagerBreadCumb from "./PagerBreadCumb";
import TopSearch from "./topSearch";
import UserSessionHeader from "./userSessionHeader";

const Header = ({ currentPageName }) => {
    return (
        <Fragment>
            <div className="header-main">
                <UserSessionHeader />
                <div className="header-secondary">
                    {/* Commented for header image removal changes */}
                    {/* <div className="header-image-div">
                        <div className="header-image">
                            <img
                                src="assets/ministero-logo.png"
                                alt="ministero-logo"
                            />
                        </div>
                        <div className="header-image">
                            <img src="assets/lcec-logo.png" alt="lcec-logo" />
                        </div>
                    </div> */}
                    <TopSearch />
                    <PagerBreadCumb currentPageName={currentPageName} />
                </div>
            </div>
        </Fragment>
    );
};

export default Header;
