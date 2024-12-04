import SEO from "@/components/seo";
import Layout from "@/components/layout";
import {router} from "next/client";

export async function getServerSideProps({params}) {
    // Obtendo os dados do usuário a partir da API
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);
    const produto = await res.json();
    return {props: {produto}};
}

export default function User({produto}) {
    const discountedPrice = (produto.price - (produto.price * produto.discountPercentage) / 100).toFixed(2);
    return (
        <Layout>
            <SEO
                title={produto.title}
                description={produto.description}
            />
            <div className="container top-navbar">
                <h1 className="text-2xl font-bold mb-4">Detalhes do Produto</h1>

                <div className="row g-4">
                    {/* Botão de Voltar */}
                    <div className="col-12 mb-3">
                        <button
                            onClick={() => router.push("/products")} // Substitua '/products' pela rota correta da lista de produtos
                            className="btn btn-outline-secondary"
                        >
                            <i className="bi bi-arrow-left"></i> Voltar para a Lista
                        </button>
                    </div>

                    {/* Imagem do Produto */}
                    <div className="col-md-5 text-center">
                        <img src={produto.thumbnail} alt={produto.title} className="img-fluid rounded shadow"/>
                    </div>

                    {/* Detalhes do Produto */}
                    <div className="col-md-7">
                        <h1 className="display-5">{produto.title}</h1>
                        <p className="text-muted mb-3">{produto.category.toUpperCase()}</p>
                        <p className="lead">{produto.description}</p>

                        {/* Preço e Desconto */}
                        <div className="mb-4">
              <span className="text-decoration-line-through text-muted me-3">
                ${produto.price.toFixed(2)}
              </span>
                            <span className="h4 text-success">${discountedPrice}</span>
                            <span className="badge bg-danger ms-3">{produto.discountPercentage}% OFF</span>
                        </div>

                        {/* Avaliação */}
                        <div className="mb-4">
                            <span className="fw-bold">Rating: </span>
                            {[...Array(Math.floor(produto.rating))].map((_, i) => (
                                <i key={i} className="bi bi-star-fill text-warning"></i>
                            ))}
                            {produto.rating % 1 >= 0.5 && <i className="bi bi-star-half text-warning"></i>}
                            {[...Array(5 - Math.ceil(produto.rating))].map((_, i) => (
                                <i key={`empty-${i}`} className="bi bi-star text-warning"></i>
                            ))}
                            <span className="ms-2 text-muted">({produto.rating})</span>
                        </div>

                        {/* Estoque e Envio */}
                        <p className={`text-${produto.stock > 5 ? "success" : "danger"} mb-4`}>
                            {produto.availabilityStatus}
                        </p>
                        <p><strong>Shipping Information:</strong> {produto.shippingInformation}</p>

                        {/* Botões de Ação */}
                        <button className="btn btn-primary btn-lg me-3">Add to Cart</button>
                        <button className="btn btn-outline-secondary btn-lg">Wishlist</button>
                    </div>
                </div>

                {/* Informações Adicionais */}
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h4>Especificações</h4>
                        <ul className="list-group">
                            <li className="list-group-item"><strong>Marca:</strong> {produto.brand}</li>
                            <li className="list-group-item"><strong>Peso:</strong> {produto.weight}g</li>
                            <li className="list-group-item">
                                <strong>Dimensões:</strong> {produto.dimensions.width} x {produto.dimensions.height} x {produto.dimensions.depth} cm
                            </li>
                            <li className="list-group-item"><strong>SKU:</strong> {produto.sku}</li>
                            <li className="list-group-item"><strong>Garantia:</strong> {produto.warrantyInformation}
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <h4>Avaliações</h4>
                        {produto.reviews.map((review, index) => (
                            <div key={index} className="mb-3 border-bottom pb-2">
                                <strong>{review.reviewerName}</strong>
                                <p className="mb-1">{review.comment}</p>
                                <small className="text-muted">
                                    {new Date(review.date).toLocaleDateString()}
                                </small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </Layout>
    );
}
