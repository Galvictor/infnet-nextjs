import Layout from "@/components/layout";
import CardProduto from "@/components/CardProduto";

async function listarProdutos() {
    console.log('ISR listarProdutos Fetching products...');
    const res = await fetch('https://dummyjson.com/products/search?q=phone', {next: {revalidate: 60}});
    const {products} = await res.json();
    return products;
}

export default async function ProductsCachePage() {
    const products = await listarProdutos();
    return <Layout>
        <div className="container top-navbar">
            <h1 className="text-2xl font-bold">Produtos (Cache ISR 60 segundos) - {new Date().toString()}</h1>
            <p className="text-gray-500">Aqui você encontra os melhores produtos do mercado!</p>
            <div className="row">
                {products.map((product) => (
                    <CardProduto key={product.id} product={product}/>
                ))}
            </div>
        </div>
    </Layout>
}