import { useState, useEffect } from "react";
import { svgProps } from "../../data";
import Navbar from "./LinkPages/Navbar";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { itemsCart } from "../../data";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay arsenal-sc-bold" onClick={onClose}>
      <button className="close-modal" onClick={onClose}>
        X
      </button>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [city, setCity] = useState("Загрузка...");
  const [cartItems, setCartItems] = useState(itemsCart);

  useEffect(() => {
    setCartItems([...itemsCart]);
  }, [itemsCart]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Используем OpenStreetMap Nominatim для обратного геокодирования
          fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          )
            .then((response) => response.json())
            .then((data) => {
              const cityName =
                data.address.village ||
                data.address.town ||
                data.address.city ||
                "Город не найден";
              setCity(cityName); // Сохраняем город в состоянии
            })
            .catch((error) => {
              console.error("Ошибка при получении данных о городе:", error);
              setCity("Ошибка получения города");
            });
        },
        (error) => {
          console.error("Ошибка получения местоположения:", error);
          setCity("Ошибка получения местоположения");
        }
      );
    } else {
      setCity("Геолокация не поддерживается этим браузером.");
    }
  }, []);

  return (
    <header>
      <div id="right-navbar">
        <Navbar />
      </div>

      <div id="left-navbar">
        <h1 className="current-region arsenal-sc-regular">
          Ваш город:{" "}
          <a href="#" className="arsenal-sc-bold header-nav-text">
            {city}
          </a>
        </h1>

        <button className="button-nav-search">
          <svg
            width="45"
            height="45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={svgProps[0].d} fill={svgProps[0].fill} />
          </svg>
        </button>

        <Link to={"/login"}>
          <button className="button-nav arsenal-sc-bold">Войти</button>
        </Link>

        <button
          className={
            cartItems.length > 0
              ? "button-nav-search-cart active-cart"
              : "button-nav-search-cart" // (
          }
          onClick={toggleModal}
        >
          <svg
            width="45"
            height="45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={svgProps[1].d} fill={svgProps[1].fill} />
          </svg>
        </button>

        {/* Модальное окно корзины */}
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <Cart />
        </Modal>
      </div>
    </header>
  );
}
