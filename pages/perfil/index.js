import Layout from "@/components/layout";
import SEO from "@/components/seo";

export default function PerfilPage() {
    return <Layout>
        <SEO
            title="Página Inicial"
            description="Bem-vindo à página inicial do Meu Site. Explore conteúdos incríveis!"
        />

        <div className="container top-navbar">
            <h1 className="text-2xl font-bold">Perfil</h1>
            <p className="text-gray-500">Aqui vai ser o seu Perfil!</p>
        </div>

    </Layout>
}
