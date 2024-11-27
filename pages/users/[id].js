import SEO from "@/components/seo";
import Layout from "@/components/layout";
import Perfil from "@/components/perfil";

export async function getServerSideProps({ params }) {
    // Obtendo os dados do usuário a partir da API
    const res = await fetch(`https://dummyjson.com/users/${params.id}`);
    const user = await res.json();
    return { props: { user } };
}

export default function User({ user }) {
    return (
        <Layout>
            <SEO
                title={user.firstName}
                description={user.email}
            />
            <div className="container mt-5">
                <h1 className="text-2xl font-bold mb-4">Detalhes do Usuário</h1>

                {/* Usando o componente Perfil para exibir os dados do usuário */}
                <Perfil user={user} />
            </div>
        </Layout>
    );
}
