import { createContext, useState, useEffect } from "react";
import { fetchMe } from "../api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState({});
    
    useEffect(() => {
        async function getMe() {
            const APIResponse = await fetchMe(token);
            setUser(APIResponse.data);
        }
        if (token) {
            getMe();
        } else {
            setUser({});
        }
    }, [token]);
    
    const contextValue = {
        token,
        setToken,
        user,
        setUser,
    };

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;