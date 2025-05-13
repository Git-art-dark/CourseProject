import React, { useState } from "react";
import { itemsCart } from "../../data";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // Массив товаров в корзине
  const [items, setItems] = useState([]); // Массив всех доступных товаров

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const addItemToItems = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItemsToTrash = () => {
    itemsCart.splice(0, itemsCart.length);
    setCartItems([]);
  };

  return (
    <div>
      <h2>Корзина</h2>
      {itemsCart.length > 0 ? (
        ""
      ) : (
        <p className="cart-empty">Пока тут пусто :(</p>
      )}
      {itemsCart.length > 0 && <p>Товаров в корзине: {itemsCart.length}</p>}
      <ul>
        {itemsCart.map((item, index) => (
          <li key={index} className="cart-item">
            <span>
              <img src={item.image[0]} alt="" />
              <p>{item.name} </p>
              <p>Цена: {item.price}</p>
            </span>
          </li>
        ))}
      </ul>
      {itemsCart.length > 0 && (
        <button className="claer-list-cart" onClick={removeItemsToTrash}>
          Очистить
        </button>
      )}
    </div>
  );
};

export default Cart;
