import React, { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {},
});

const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [userToken, _setUserToken] = useState(
        localStorage.getItem("TOKEN") || ""
    );

    const setUserToken = (token) => {
        if (token) {
            localStorage.setItem("TOKEN", token);
        } else {
            localStorage.removeItem("TOKEN");
        }
        _setUserToken(token);
    };

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
