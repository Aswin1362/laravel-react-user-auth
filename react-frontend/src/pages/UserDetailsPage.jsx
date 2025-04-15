import React from "react";
import { userStateContext } from "../context/contextProvider";
import { Navigate } from "react-router";

const UserDetailsPage = () => {
    const { currentUser, userToken } = userStateContext();

    if (!userToken) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className="container">
            <div className="user-details-container">
                <div className="user-details-header">
                    <h4>Welcome, {currentUser.name}</h4>
                </div>
                <div className="user-deatils-body">
                    <p>
                        <strong>Email:</strong> {currentUser.email}
                    </p>
                    <p>
                        <strong>Phone:</strong> {currentUser.phone}
                    </p>
                    <p>
                        <strong>Address:</strong> {currentUser.address}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsPage;
