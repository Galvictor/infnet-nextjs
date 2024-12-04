const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Estrelas completas
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Estrela pela metade
    const emptyStars = 5 - fullStars - halfStars; // Estrelas vazias

    const stars = [];

    // Adiciona estrelas completas
    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={`full-${i}`} className="bi bi-star-fill"></i>);
    }

    // Adiciona estrela pela metade
    if (halfStars) {
        stars.push(<i key="half" className="bi bi-star-half"></i>);
    }

    // Adiciona estrelas vazias
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i key={`empty-${i}`} className="bi bi-star"></i>);
    }

    return stars;
};

const renderPriceDiscount = (price, discountPercentage) => {

    const discount = price * (discountPercentage / 100);
    const totalPrice = (price - discount).toFixed(2);

    return <span className="badge bg-primary">${totalPrice}</span>;

}

export {renderStars, renderPriceDiscount};