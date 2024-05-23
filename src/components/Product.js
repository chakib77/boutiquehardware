import React from 'react';

const Product = ({ title, image, description, price, addToCart }) => {
    return (
        <div className="product">
            <img src={image} alt={"Image de : " + title} className="product-image" />
            <div className="product-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>Prix : {price} €</p>
                <button onClick={() => addToCart({ title, price })}>Ajouter au panier</button>
            </div>
        </div>
    );
};


export default Product;
