import Layout from "@/components/layout";
import SEO from "@/components/seo";
import WithAuth from "@/components/withAuth";

function Page() {
    return <Layout>
        <SEO
            title="Página Inicial"
            description="Bem-vindo à página inicial do Meu Site. Explore conteúdos incríveis!"
        />
        <div className="container top-navbar">
            <h1 className="text-2xl font-bold">Página Inicial</h1>
            <p className="text-gray-500">Explore conteúdos incríveis!</p>
        </div>
    </Layout>
}

export default WithAuth(Page);
