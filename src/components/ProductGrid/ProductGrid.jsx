import { Link } from "react-router-dom";
import { itemsCart } from "../../data";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ProductGrid = ({ products }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
      toast.success(`${product.name} добавлен в корзину!`, {
        position: "top-right",
        autoClose: 4000,
        className: "toast",
      });
      setCartItems((prevItems) => [...prevItems, product]);
      itemsCart.push(product);
    };
  

  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image[0]} alt={product.name} />
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
                  className="button-main arsenal-sc-bold"
                  onClick={() => handleAddToCart(product)}
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