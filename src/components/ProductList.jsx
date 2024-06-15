import ProductItem from "./ProductItem";

function ProductList({ products, onAddToCart }) {
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductItem
                    key={index}
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    onAddToCart={() => onAddToCart(product)}
                />
            ))}
        </div>
    );
}

export default ProductList;
