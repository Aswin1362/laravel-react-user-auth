import React from "react";
import "../styles/pageStyles.css";
import { userStateContext } from "../context/contextProvider";
import { Navigate } from "react-router";

const LoginPage = () => {
    const { userToken } = userStateContext();
    console.log(userToken);

    if (userToken) {
        return <Navigate to={"/profile"} />;
    }

    return (
        <div className="container">
            <form onSubmit={() => {}} method="POST" className="login-form">
                <div>
                    <label htmlFor="email" className="form-input-label">
                        Email address{" "}
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-input"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="form-input-label">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-input"
                    />
                </div>
                <div>
                    <button type="submit" className="form-submit-button">
                        Log in
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
