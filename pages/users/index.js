import Layout from "@/components/layout";
import SEO from "@/components/seo";

export async function getServerSideProps() {
    console.log('Fetching users...');
    const res = await fetch('https://dummyjson.com/users');
    const {users} = await res.json();
    return {props: {users}};

}

export default function Users({users}) {
    return <Layout>
        <SEO
            title="Usuários"
            description="Bem-vindo à página inicial do Meu Site. Explore conteúdos incríveis!"
        />
        <div className="container mt-4">
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
                        <td>{user.firstName}</td>
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
