import productList from "../assets/products.json";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { useState } from "react";

function Products() {
    const [cartItems, setCartItems] = useState([]);

    const products = productList;

    function handleAddToCart(product) {
        setCartItems([...cartItems, product]);
    }

    return (
        <div className="columns">
            <div className="column">
                <ProductList
                    products={products}
                    onAddToCart={handleAddToCart}
                />
            </div>
            <div className="column">
                <Cart cartItems={cartItems} />
            </div>
        </div>
    );
}

export default Products;
