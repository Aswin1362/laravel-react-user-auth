import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import { userStateContext } from "../context/contextProvider";

const useGetUserDetailsApiHook = () => {
    const { userToken, setCurrentUser } = userStateContext();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const sendGetUserDetailsRequest = async () => {
            await axiosClient
                .get("/profile")
                .then(({ data }) => {
                    console.log("UserDetailsResponse: ", data);
                    setCurrentUser(data.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log("UserDetailsError: ", error);
                    setError(error);
                });
        };

        if (userToken) {
            sendGetUserDetailsRequest();
        }
    }, [userToken]);

    return { error, loading };
};

export default useGetUserDetailsApiHook;
