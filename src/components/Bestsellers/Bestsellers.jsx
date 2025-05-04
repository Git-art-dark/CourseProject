import { useState } from "react";
import { productsData, itemsCart } from "../../data";
import ProductGrid from "../ProductGrid/ProductGrid";
import { ToastContainer, toast } from "react-toastify";

export default function Bestsellers() {
  const [products, setProducts] = useState(productsData || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const productsPerPage = 10;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = Array.isArray(products)
    ? products.slice(indexOfFirstProduct, indexOfLastProduct)
    : [];

  // const handleAddToCart = (product) => {
  //   toast.success(`${product.name} добавлен в корзину!`, {
  //     position: "top-right",
  //     autoClose: 4000,
  //     className: "toast",
  //   });
  //   setCartItems((prevItems) => [...prevItems, product]);
  //   itemsCart.push(product);
  // };
  return (
    <>
      <div className="solid-stick"></div>
      <h1 className="new-h1 arsenal-sc-bold">Хиты продаж</h1>
      <ProductGrid products={currentProducts} />
    </>
  );
}
