import Layout from "@/components/layout";
import Link from "next/link";
import SEO from "@/components/seo";

export async function getServerSideProps() {
    console.log('Fetching users...');
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return {props: {users}};

}

export default function Users({users}) {
    return <Layout>
        <SEO
            title="Usuários"
            description="Bem-vindo à página inicial do Meu Site. Explore conteúdos incríveis!"
        />
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg">
                <thead className="bg-blue-500 text-white">
                <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Nome</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Ações</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id} className="hover:bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                        <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <Link
                                href={`/users/${user.id}`}
                                className="text-blue-500 hover:underline"
                            >
                                Ver Detalhes
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </Layout>
}
