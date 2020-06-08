import React, { Fragment } from "react";
import "./dashboardStyles.css";
import ProfileTopComponent from "./profileTopComponent";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import ProfileBottom from "./profileBottom";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const Dashboard = () => {
    return (
        <Fragment>
            <div className="hiwscrollBar">
                <ProfileTopComponent />
                <Divider variant="fullWidth" />
                <Link to="/edit_profile" className="edit-profile">
                    Edit Profile
                    <EditOutlinedIcon />
                </Link>
                <ProfileBottom />
            </div>
        </Fragment>
    );
};

export default Dashboard;
