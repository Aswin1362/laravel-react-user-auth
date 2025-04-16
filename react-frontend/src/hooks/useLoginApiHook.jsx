import { useState } from "react";
import axiosClient from "../api/axiosClient";
import { userStateContext } from "../context/contextProvider";

const useLoginApiHook = ({ email, password }) => {
    const { setUserToken } = userStateContext();
    const [error, setError] = useState({ __html: "" });

    const sendLoginRequest = async () => {
        await axiosClient
            .post("/login", {
                email,
                password,
            })
            .then(({ data }) => {
                console.log("LoginResponse: ", data);
                setUserToken(data.token);
            })
            .catch((error) => {
                console.log("LoginError: ", error);
                if (error.response) {
                    const finalErrors = Object.values(
                        error.response.data.errors
                    ).reduce((accum, next) => [...accum, ...next], []);
                    setError({ __html: finalErrors.join("</br>") });
                }
            });
    };

    return { error, sendLoginRequest };
};

export default useLoginApiHook;
