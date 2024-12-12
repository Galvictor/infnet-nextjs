import SEO from "@/components/seo";
import Layout from "@/components/layout";
import Perfil from "@/components/perfil";
import withAuth from "@/components/withAuth";
import {useEffect, useState} from "react";
import {getUserData} from "@/libs/firebaseClient";
import {useRouter} from "next/router";
import {router} from "next/client";

function User() {

    const router = useRouter();
    const {id} = router.query;

    const [user, setUser] = useState({});

    useEffect(() => {

        const fetchUser = getUserData(id).then((user) => {

            setUser(user);

        });

    });


    return (
        <Layout>
            <SEO
                title={user.name}
                description={user.email}
            />
            <div className="container top-navbar">
                <div className="col-12 mb-3">
                    <button
                        onClick={() => router.push("/users")}
                        className="btn btn-outline-secondary"
                    >
                        <i className="bi bi-arrow-left"></i> Voltar para a Lista de Usuários
                    </button>
                </div>
                <Perfil user={user}/>
            </div>
        </Layout>
    );
}

export default withAuth(User);
