import React, { Fragment } from "react";
import "./PagerBreadCumbStyles.css";
import { Link } from "react-router-dom";

const PagerBreadCumb = ({ currentPageName }) => {
    return (
        <Fragment>
            <ul className="breadcrumb">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>{currentPageName}</li>
            </ul>
        </Fragment>
    );
};

export default PagerBreadCumb;
