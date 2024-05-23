import React, { useState } from 'react';
import './Product.css';
import Product from '../components/Product';
import Cart from '../components/Cart';

const Shop = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        setTotalPrice(totalPrice + product.price);
        alert(`${product.title} a été ajouté au panier !`);
    };

    const clearCart = () => {
        setCartItems([]);
        setTotalPrice(0);
        alert("Le panier a été vidé !");
    };

    return (
        <div className="shop">
            <div className="products">
                <Product
                    title="Carte graphique NVIDIA GeForce RTX 3080"
                    image="https://storage-asset.msi.com/global/picture/image/feature/vga/NVIDIA/VGA-2020/image/vga-body.png"
                    description="La carte graphique ultime pour les jeux et la création de contenu."
                    price={799}
                    addToCart={addToCart}
                />
                <Product
                    title="Processeur AMD Ryzen 9 5900X"
                    image="https://www.amd.com/system/files/11157-ryzen-5-pib-left-facing-1260x709.png"
                    description="Un processeur puissant pour les jeux et les applications intensives."
                    price={499}
                    addToCart={addToCart}
                /> <Product
                    title="Carte mère ASUS ROG B550"
                    image="https://dlcdnimgs.asus.com/websites/global/products/fkufhp8oogo9exki/img/kv/pd.png"
                    description="Une carte mère puissante et polyvalente pour les pros du gaming."
                    price={209}
                    addToCart={addToCart}
                />
                <Product
                    title="SSD 1TO"
                    image="https://www.pny.com/productimages/535A4E7D-AE5C-4861-87E6-AF230126B0BB/images/PNY-CS2230-SSD-M.2-NVMe-ra.png"
                    description="Un SSD rapide et performant."
                    price={99}
                    addToCart={addToCart}
                />
                <Product
                    title="MSI MAG WATERCOOLING 240R"
                    image="https://asset.msi.com/resize/image/global/product/product_8_20200709150733_5f06c235a6b04.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"
                    description="Ce watercooling fera refroidir vos processeurs les plus performants !"
                    price={119}
                    addToCart={addToCart}
                />
                <Product
                    title="BOÎTIER CRYSTAL SEA"
                    image="https://www.m-red.com/Images/Produits/40/Bo%C3%AEtier_PC_Gamer_RGB_Crystal_Sea_1.png"
                    description="Vous ne ferez que regarder ce boîter à cause de ses couleurs rayonnantes."
                    price={129}
                    addToCart={addToCart}
                />
                <Product
                    title="CORSAIR VENGEANCE RAM 32GO"
                    image="https://assets.corsair.com/image/upload/f_auto,q_auto/v1/akamai/pdp/vengeance-rgb-pro/Content/Vengeance_RGB_Pro_PDP_Black_04.png"
                    description="Ces barrettes de ram sont cadencés à une fréquence de 3600MHZ !"
                    price={99}
                    addToCart={addToCart}
                />
                <Product
                    title="ALIMENTATION CORSAIR RM 750W"
                    image="https://assets.corsair.com/image/upload/f_auto,q_auto/content/CP-9020179-NA-RM750x-PSU-01.png"
                    description="Cette alimentation corsair modulaire de 750w pourra alimenter la quasi totalité de vos composants les plus performants !"
                    price={129}
                    addToCart={addToCart}
                />
            </div>
            <Cart cartItems={cartItems} totalPrice={totalPrice} />
            <button className="boutton-panier" onClick={clearCart}>Vider le panier</button>
        </div>
    );
};

export default Shop;


