import Layout from "@/components/layout";
import SEO from "@/components/seo";
import Login from "@/components/login";

export default function Page() {
    return <Layout>
        <SEO
            title="Página Inicial"
            description="Bem-vindo à página inicial do Meu Site. Explore conteúdos incríveis!"
        />
        <Login/>
    </Layout>
}
