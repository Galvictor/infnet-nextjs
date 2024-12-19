import Layout from "@/components/layout";

async function listarProdutos() {
    console.log('SSG: listarProdutos Fetching products...');
    const res = await fetch('https://dummyjson.com/products/search?q=phone', {cache: "force-cache"});
    const {products} = await res.json();
    return products;
}

export default async function ProductsCachePage() {
    const products = await listarProdutos();
    return <Layout>
        <div className="container top-navbar">
            <h1 className="text-2xl font-bold">Produtos (Cache SSG) - {new Date().toString()}</h1>
            <p className="text-gray-500">Aqui você encontra os melhores produtos do mercado!</p>
            <ul>
                {products.map(produto =>
                    <li className="bg-green-300 m-2" key={produto.id}>
                        <h2>{produto.title}</h2>
                        <p>{produto.description}</p>
                    </li>
                )}
            </ul>
        </div>
    </Layout>
}