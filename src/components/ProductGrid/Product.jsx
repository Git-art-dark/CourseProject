import { Link } from "react-router-dom";


const ProductGrid = ({ products, onAddToCart }) => {
  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </Link>
            <div className="product-info">
              <div className="price">{product.price.toLocaleString()} ₽</div>
              <div className="rating">
                ★ {product.rating}{" "}
                {product.inStock ? (
                  <div className="in-stock">В наличии</div>
                ) : (
                  <div className="out-of-stock">Нет в наличии</div>
                )}
              </div>

              {/* Кнопка добавления товара в корзину */}
              {product.inStock && (
                <button
                  className="button-main"
                  onClick={() => onAddToCart(product)}
                >
                  В корзину
                </button>
              )}

            </div>
          </div>
        ))
      ) : (
        <div className="no-results">Товары не найдены</div>
      )}
    </div>
  );
};

export default ProductGrid;