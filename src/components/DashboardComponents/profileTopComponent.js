import React from "react";
import ProfilePic from "./profilePic";

const ProfileTopComponent = () => {
    const src = "";
    return (
        <div className="profile-top-section">
            <div className="profile-name">
                <h5>John Doe</h5>
                <span>7563254</span>
            </div>
            <div className="profile-pic">
                {src ? (
                    <img src={src} alt="profilepic" />
                ) : (
                    <ProfilePic name={"John"} familyName={"Doe"} />
                )}
            </div>
        </div>
    );
};

export default ProfileTopComponent;
