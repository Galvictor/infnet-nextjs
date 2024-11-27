import { useState, useEffect } from "react";
import NavBar from "@/components/navBar";
import Login from "@/components/login";

export default function Layout({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Verifica se há informações de login no localStorage
        const token = localStorage.getItem("accessToken");
        if (token) {
            setUser({ token }); // Você pode armazenar mais informações aqui
        }
    }, []);

    const handleLogout = () => {
        // Remove o token e redefine o usuário
        localStorage.removeItem("accessToken");
        setUser(null);
    };

    return (
        <div>
            {user ? (
                <>
                    <header>
                        <NavBar onLogout={handleLogout} />
                    </header>
                    {children}
                </>
            ) : (
                <Login onLogin={setUser} />
            )}
        </div>
    );
}
