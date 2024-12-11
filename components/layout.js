import {useState, useEffect} from "react";
import NavBar from "@/components/navBar";
import Login from "@/components/login";
import Footer from "@/components/Footer";

export default function Layout({children}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Verifica se há informações de login no localStorage
        const token = localStorage.getItem("accessToken");
        if (token) {
            setUser({token}); // Você pode armazenar mais informações aqui
        }
    }, []);

    const handleLogout = () => {
        // Remove o token e redefine o usuário
        localStorage.removeItem("accessToken");
        setUser(null);
    };

    return (
        <>
            {user ? (
                <div className="wrap-content">
                    <NavBar onLogout={handleLogout}/>
                    {children}
                    <Footer/>
                </div>
            ) : (
                <Login onLogin={setUser}/>
            )}
        </>
    );
}
