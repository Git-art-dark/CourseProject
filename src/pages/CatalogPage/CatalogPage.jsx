import { useState, useEffect } from "react";
import { itemsCart, productsData } from "../../data";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { ToastContainer, toast } from 'react-toastify';

const CatalogPage = () => {
  const [products, setProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    inStock: false,
  });
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Состояние для хранения товаров в корзине
  const [cartItems, setCartItems] = useState([]);

  // Фильтрация товаров
  useEffect(() => {
    let filtered = productsData.filter((product) => {
      return (
        (filters.category === "" || product.category === filters.category) &&
        (filters.minPrice === "" || product.price >= filters.minPrice) &&
        (filters.maxPrice === "" || product.price <= filters.maxPrice) &&
        (!filters.inStock || product.inStock)
      );
    });

    // Сортировка
    switch (sortOption) {
      case "priceAsc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setProducts(filtered);
    setCurrentPage(1);
  }, [filters, sortOption]);

  // Пагинация
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Обработчик добавления товара в корзину
  const handleAddToCart = (product) => {
    toast.success(`${product.name} добавлен в корзину!`, {
      position: "top-right",
      autoClose: 4000,
      className: "toast"
    });
    setCartItems((prevItems) => [...prevItems, product]);
    itemsCart.push(product);
  };

  return (
    <div className="catalog arsenal-sc-bold">
      <div className="catalog-header">
        <div className="controls">
          <div className="filters">
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
            >
              <option value="">Все товары</option>
              <option value="Холодильники">Холодильники</option>
            </select>

            <input
              type="number"
              name="minPrice"
              placeholder="Цена от"
              value={filters.minPrice}
              onChange={handleFilterChange}
            />

            <input
              type="number"
              name="maxPrice"
              placeholder="Цена до"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
          </div>

          <div className="sort">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">По умолчанию</option>
              <option value="priceAsc">Цена по возрастанию</option>
              <option value="priceDesc">Цена по убыванию</option>
              <option value="rating">По рейтингу</option>
            </select>
          </div>
        </div>
      </div>

      <ProductGrid products={currentProducts} onAddToCart={handleAddToCart} />

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`select-page ${currentPage === i + 1 ? "active" : ""}`}
            >
              {i + 1}
            </button>
            
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default CatalogPage;
