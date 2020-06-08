import React, { Fragment } from "react";

const ProfilePic = ({ name, familyName }) => {
    return (
        <Fragment>
            <div className="image-circle-background">
                <h5>
                    {name[0]}
                    {familyName[0]}
                </h5>
            </div>
        </Fragment>
    );
};

export default ProfilePic;
