import Layout from "@/components/layout";
import SEO from "@/components/seo";

export default function ProductsPage(){
    return <Layout>
        <SEO title="Produtos"
             description="Bem-vindo à página inicial do Meu Site. Explore conteúdos incríveis!"></SEO>
        <div className="container top-navbar">
            <h1 className="text-2xl font-bold">Produtos</h1>
            <p className="text-gray-500">Aqui você encontra os melhores produtos do mercado!</p>
        </div>
    </Layout>
}
