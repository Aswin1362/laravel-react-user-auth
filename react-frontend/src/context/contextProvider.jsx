import React, { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {},
});

const tempData = {
        name: "Aswin",
        email: "aswinwarrier8662@gmail.com",
        phone: "7356748662",
        address: "Pranavom pathiyoor kayamakulam 690508",
};

const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(tempData);
    // const [userToken, _setUserToken] = useState(
    //     localStorage.getItem("TOKEN") || "123"
    // );
    const [userToken, setUserToken] = useState("");

    // const setUserToken = (token) => {
    //     if (token) {
    //         localStorage.setItem("TOKEN", token);
    //     } else {
    //         localStorage.removeItem("TOKEN");
    //     }
    //     _setUserToken(token);
    // };

    return (
        <StateContext.Provider
            value={{
                currentUser,
                userToken,
                setCurrentUser,
                setUserToken,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export default ContextProvider;
export const userStateContext = () => useContext(StateContext);
