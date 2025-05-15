import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { productsData, itemsCart } from "../../data";
import "./ProductPage.css";

import Reviews from "../../components/Reviews/Reviews";

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id));

  // Автопереключение изображений (если у товара несколько изображений)
  useEffect(() => {
    if (product?.images?.length > 1) {
      const interval = setInterval(() => {
        setActiveImageIndex(
          (prevIndex) => (prevIndex + 1) % product.images.length
        );
      }, 5000); // Переключение каждые 5 секунд

      return () => clearInterval(interval);
    }
  }, [product]);

  const handleAddToCart = (product) => {
    toast.success(`${product.name} добавлен в корзину!`, {
      position: "top-right",
      autoClose: 4000,
      className: "toast",
    });
    setCartItems((prevItems) => [...prevItems, product]);
    itemsCart.push(product);
  };

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Товар не найден</h2>
        <Link to="/catalog" className="button-main">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  // Предполагаем, что у товара есть массив images, если нет - используем основное изображение
  const images = product.image || [product.image];
  const activeImage = images[activeImageIndex];

  function ImageIndicator({ index }) {
    const handleClick = () => {
      setActiveImageIndex(index);
    };

    return (
      <button
        className={`carousel-button-product ${
          activeImageIndex === index ? "active" : ""
        }`}
        onClick={handleClick}
        aria-label={`Показать изображение ${index + 1}`}
      >
        <svg
          width="25"
          height="25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="19"
            height="20"
            rx="3.5"
            fill="#fff"
            stroke="#000"
            strokeWidth="2"
            className={activeImageIndex === index ? "active" : ""}
          />
        </svg>
      </button>
    );
  }

  return (
    <>
      <div className="product-page arsenal-sc-bold">
        <ToastContainer />
        <div className="product-container">
          <div className="product-image">
            <div className="product-carousel">
              <img src={activeImage} alt={product.name} />

              {images.length > 1 && (
                <div className="carousel-indicators">
                  {images.map((_, index) => (
                    <ImageIndicator key={index} index={index} />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="product-details">
            <h1>{product.name}</h1>
            <div className="price">{product.price.toLocaleString()} ₽</div>

            <div className="availability">
              {product.inStock ? (
                <span className="in-stock">В наличии</span>
              ) : (
                <span className="out-of-stock">Нет в наличии</span>
              )}
            </div>

            <div className="rating">Рейтинг: ★ {product.rating}</div>

            {product.inStock && (
              <button
                className="button-main"
                onClick={() => handleAddToCart(product)}
              >
                Добавить в корзину
              </button>
            )}

            <div className="description">
              <h3>Описание</h3>
              <p>{product.description || "Описание отсутствует"}</p>
            </div>
            <div className="description">
              <h3>Возможности</h3>
              {product.features && product.features.length > 0 ? (
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <p>Возможности отсутствует</p>
              )}
            </div>

            <Link to="/catalog" className="back-link">
              <img
                src="../../../public/icons/right-arrow.png"
                alt="exit"
                className="exit"
              />
            </Link>
          </div>
        </div>
      </div>
      <Reviews></Reviews>
    </>
  );
};

export default ProductPage;
