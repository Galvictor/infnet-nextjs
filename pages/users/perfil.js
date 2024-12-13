import Layout from "@/components/layout";
import SEO from "@/components/seo";
import {useEffect, useState} from "react";
import WithAuth from "@/components/withAuth";
import {auth, getUserData} from "@/libs/firebaseClient";
import Perfil from "@/components/perfil";

function PerfilPage() {

    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                setUser(user);

                getUserData(user.uid).then((userData) => {
                    console.log(userData);
                    setUserData(userData);
                    setLoading(false);
                });

            } else {
                setUser(null);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <Layout>
            <SEO/>
            <div className="container top-navbar">
                <Perfil user={userData}/>
            </div>
        </Layout>
    );
}

export default WithAuth(PerfilPage);