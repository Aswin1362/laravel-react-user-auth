import React, { useState } from "react";
import { userStateContext } from "../context/contextProvider";
import { Navigate } from "react-router";
import useLoginApiHook from "../hooks/useLoginApiHook";
import "../styles/pageStyles.css";

const LoginPage = () => {
    const { userToken } = userStateContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { error, sendLoginRequest } = useLoginApiHook({
        email,
        password,
    });

    if (userToken) {
        return <Navigate to={"/profile"} />;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await sendLoginRequest();
    };

    return (
        <div className="container">
            <form
                onSubmit={onSubmit}
                action="#"
                method="POST"
                className="login-form"
            >
                <div>
                    <label htmlFor="email" className="form-input-label">
                        Email address{" "}
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        autoComplete="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                    />
                </div>
                {error.__html && (
                    <div
                        className="errors"
                        dangerouslySetInnerHTML={error}
                    ></div>
                )}
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
