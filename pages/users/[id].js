//pegar a id do usuário e mostrar os detalhes
import SEO from "@/components/seo";
import Layout from "@/components/layout";

export async function getServerSideProps({params}) {
    const res = await fetch(`https://dummyjson.com/users/${params.id}`);
    const user = await res.json();
    return {props: {user}};
}

export default function User({user}) {
    return (
        <Layout>
            <SEO
                title={user.firstName}
                description={user.email}
            />
            <div className="container mt-4">
                <h1 className="text-2xl font-bold">{user.firstName}</h1>
                <p className="text-gray-500">{user.email}</p>
            </div>
        </Layout>
    );
}
