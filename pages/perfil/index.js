import {useEffect, useState} from "react";
import Layout from "@/components/layout";
import SEO from "@/components/seo";
import Perfil from "@/components/perfil";

export default function PerfilPage() {
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Obter o token de acesso do localStorage
        const token = localStorage.getItem("accessToken");

        if (token) {
            fetch('https://dummyjson.com/user/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Passando o token como Bearer
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    setUserProfile(data); // Armazenar o perfil do usuário no estado
                    setLoading(false);
                })
                .catch((err) => {
                    setError("Erro ao carregar perfil.");
                    setLoading(false);
                });
        } else {
            setError("Usuário não autenticado.");
            setLoading(false);
        }
    }, []); // Executa apenas uma vez quando a página é carregada

    return (
        <Layout>
            <SEO
                title="Perfil"
                description="Veja suas informações no perfil!"
            />

            <div className="container top-navbar">
                <h1 className="text-2xl font-bold mb-4">Perfil</h1>

                {loading && <p>Carregando...</p>}
                {error && <p className="text-danger">{error}</p>}

                {/* Exibindo o componente Perfil apenas se as informações do usuário estiverem carregadas */}
                {userProfile && <Perfil user={userProfile}/>}
            </div>
        </Layout>
    );
}
