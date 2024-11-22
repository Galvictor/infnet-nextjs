//pegar a id do usuário e mostrar os detalhes
import SEO from "@/components/seo";
import Layout from "@/components/layout";

export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();
    return {props: {user}};
}

export default function User({user}) {
    return (
        <Layout>
            <SEO
                title={user.name}
                description={user.email}
            />
            <div className="p-4">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-gray-500">{user.email}</p>
            </div>
        </Layout>
    );
}
