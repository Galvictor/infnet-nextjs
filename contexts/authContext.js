import {createContext, useContext, useEffect, useState} from "react";
import {verifyToken} from "@/utils/auth";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        if (token) {
            verifyToken(token).then((data) => {
                if (data) {
                    setUser(data); // Atualiza o estado do usuário
                } else {
                    localStorage.removeItem("accessToken");
                    setUser(null);
                }
                setIsLoading(false);
            });
        } else {
            setIsLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser, isLoading}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
