import {auth} from "@/libs/firebaseClient";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const withAuth = (WrappedComponent) => {
    return function ProtectedRoute(props) {
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const unsubscribe = auth.onAuthStateChanged((user) => {
                if (!user) {
                    router.push("/login"); // Redireciona para o login se não estiver autenticado
                } else {
                    setLoading(false);
                }
            });

            return () => unsubscribe();
        }, [router]);

        if (loading) {
            return <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <p>Carregando...</p></div>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
