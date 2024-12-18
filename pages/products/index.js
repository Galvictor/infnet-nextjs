import Layout from "@/components/layout";
import SEO from "@/components/seo";
import {renderStars, renderPriceDiscount} from "@/utils/functions";
import Link from "next/link";
import Image from "next/image";
import withAuth from "@/components/withAuth";

// export async function getServerSideProps() {
//     console.log('Fetching products...');
//     const res = await fetch('https://dummyjson.com/products/search?q=phone');
//     const {products} = await res.json();
//     return {props: {products}};
//
// }

export async function getStaticProps() {
    console.log('Fetching products...');
    const res = await fetch('https://dummyjson.com/products/search?q=phone');
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
            <h1 className="text-2xl font-bold">Produtos</h1>
            <p className="text-gray-500">Aqui você encontra os melhores produtos do mercado!</p>

            <div className="row">
                {products.map((product) => (
                    <div className="col-4 mb-4" key={product.id}>
                        <div className="card h-100 shadow-sm">
                            <Image width={500}
                                   height={500} src={product.thumbnail} className="card-img-top img-fluid"
                                   alt={product.title}/>
                            <div className="card-body">
                                <h5 className="card-title text-truncate">{product.title}</h5>
                                <p className="card-text text-muted text-truncate">{product.description}</p>

                                {/* Avaliação */}
                                <div className="d-flex align-items-center mb-3">
                                    <div className="stars me-2">{renderStars(product.rating)}</div>
                                    <span className="text-muted">({product.rating.toFixed(1)})</span>
                                </div>

                                {/* Preços */}
                                <div className="mb-3">
                                <span
                                    className="old-price text-decoration-line-through text-muted me-2">${product.price.toFixed(2)}</span>
                                    <span
                                        className="price text-success fw-bold">{renderPriceDiscount(product.price, product.discountPercentage)}</span>
                                </div>

                                {/* Botão */}
                                <Link href={`/products/${product.id}`} className="btn btn-primary w-100">
                                    Ver Detalhes
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Layout>
}

export default withAuth(ProductsPage);
