import Layout from "@/components/layout";
import SEO from "@/components/seo";
import WithAuth from "@/components/withAuth";
import {useEffect, useState} from "react";
import {getUsers} from "@/libs/firebaseClient";


function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        const fetchUsers = getUsers().then((users) => {
            console.log(users);
            setUsers(users);
        });

    }, []);

    return <Layout>
        <SEO
            title="Usuários"
            description="Bem-vindo à página inicial do Meu Site. Explore conteúdos incríveis!"
        />
        <div className="container top-navbar">
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <a href={`/users/${user.id}`} className="btn btn-primary btn-sm">
                                Ver Detalhes
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </Layout>
}

export default WithAuth(Users);
