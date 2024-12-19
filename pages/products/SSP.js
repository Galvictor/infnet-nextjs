import Layout from "@/components/layout";
import SEO from "@/components/seo";
import {renderStars, renderPriceDiscount} from "@/utils/functions";
import Link from "next/link";
import Image from "next/image";
import withAuth from "@/components/withAuth";
import CardProduto from "@/components/CardProduto";

export async function getServerSideProps() {
    console.log('getServerSideProps Fetching products...');
    const res = await fetch('https://dummyjson.com/products/search?q=phone');
    const {products} = await res.json();
    return {props: {products}};

}

function ProductsPage({products}) {
    return <Layout>
        <SEO title="Produtos"
             description="Bem-vindo à página inicial do Meu Site. Explore conteúdos incríveis!"></SEO>
        <div className="container top-navbar">
            <h1 className="text-2xl font-bold">Produtos (getServerSideProps) - {new Date().toString()}</h1>
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
