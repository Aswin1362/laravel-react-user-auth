import React from "react";
import { userStateContext } from "../context/contextProvider";
import { Navigate } from "react-router";
import useGetUserDetailsApiHook from "../hooks/useGetUserDetailsApiHook";
import "../styles/pageStyles.css";

const UserDetailsPage = () => {
    const { currentUser, userToken } = userStateContext();
    const { loading } = useGetUserDetailsApiHook();

    if (!userToken) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className="container">
            <div className="user-details-container">
                {loading ? (
                    <p style={{ color: "black" }}>Loading...</p>
                ) : (
                    currentUser.map((user, index) => (
                        <div key={index} className="user-details">
                            <div className="user-details-header">
                                <h4>Welcome, {user.user_name}</h4>
                            </div>
                            <div className="user-details-body">
                                <p>
                                    <strong>Email:</strong> {user.user_email}
                                </p>
                                <p>
                                    <strong>Phone:</strong> {user.phone}
                                </p>
                                <p>
                                    <strong>Gender:</strong> {user.gender}
                                </p>
                                <p>
                                    <strong>DOB:</strong> {user.dob}
                                </p>
                                <p>
                                    <strong>Address:</strong> {user.address}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default UserDetailsPage;
