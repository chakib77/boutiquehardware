import React from 'react';

const Cart = ({ cartItems, totalPrice }) => {
    return (
        <div className="cart">
            <h2>Panier</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.title} - {item.price} €</li>
                ))}
            </ul>
            <p>Total : {totalPrice} €</p>
        </div>
    );
};

export default Cart;
