import Layout from "@/components/layout";
import SEO from "@/components/seo";
import {renderStars, renderPriceDiscount} from "@/utils/functions";
import Link from "next/link";
import Image from "next/image";
import withAuth from "@/components/withAuth";
import CardProduto from "@/components/CardProduto";

export async function getStaticProps() {
    console.log('getStaticProps Fetching products...');
    const res = await fetch('https://dummyjson.com/products/search?q=phone', {next: {revalidate: 300}});
    const {products} = await res.json();

    // Revalidação a cada 300 segundos
    return {
        props: {products},
        revalidate: 300
    };
}

function ProductsPage({products}) {
    return <Layout>
        <SEO title="Produtos"
             description="Bem-vindo à página inicial do Meu Site. Explore conteúdos incríveis!"></SEO>
        <div className="container top-navbar">
            <h1 className="text-2xl font-bold">Produtos (getStaticProps) - {new Date().toString()}</h1>
            <p className="text-gray-500">Aqui você encontra os melhores produtos do mercado!</p>

            <div className="row">
                {products.map((product) => (
                    <CardProduto key={product.id} product={product}/>
                ))}
            </div>
        </div>
    </Layout>
}

export default withAuth(ProductsPage);
