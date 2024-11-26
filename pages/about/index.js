import Layout from "@/components/layout";
import SEO from "@/components/seo";

export default function AboutPage() {
    return <Layout>
        <SEO title="Sobre"
             description="Bem-vindo à página inicial do Meu Site. Explore conteúdos incríveis!"></SEO>
        <div className="container top-navbar">
            <h1 className="text-2xl font-bold">Sobre</h1>
            <p className="text-gray-500">Conheça mais sobre a nossa empresa!</p>
        </div>
    </Layout>
}
