import Image from "next/image";
import {renderPriceDiscount, renderStars} from "@/utils/functions";
import Link from "next/link";

export default function CardProduto({product}) {

    if (!product) {
        return <p>Informações do produto não disponíveis.</p>;
    }

    return (
        <div className="col-4 mb-4">
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
    );
}