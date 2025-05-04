import { useState, useEffect } from "react";
import { itemsCart, productsData } from "../../data";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { ToastContainer, toast } from "react-toastify";

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
  const [cartItems, setCartItems] = useState([]);

  // Категории для фильтров-тегов
  const categories = [
    { id: 1, name: "Все товары", value: "" },
    { id: 2, name: "Холодильники", value: "Холодильники" },
    { id: 3, name: "Стиральные машины", value: "Стиральные машины" },
  ];

  // Фильтрация товаров
  useEffect(() => {
    let filtered = productsData.filter((product) => {
      return (
        (filters.category === "" || product.category === filters.category) &&
        (filters.minPrice === "" ||
          product.price >= Number(filters.minPrice)) &&
        (filters.maxPrice === "" ||
          product.price <= Number(filters.maxPrice)) &&
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

  // Обработчики фильтров
  const handleCategoryChange = (categoryValue) => {
    setFilters((prev) => ({ ...prev, category: categoryValue }));
  };

  const handlePriceFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleStockFilterChange = (e) => {
    setFilters((prev) => ({ ...prev, inStock: e.target.checked }));
  };

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
    <div className="catalog arsenal-sc-bold">
      <div className="catalog-header">
        <div className="controls">
          <div className="filters-container">
            <div className="category-filters">
              <h3>Категории:</h3>
              <div className="category-tags">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    className={`category-tag arsenal-sc-bold ${
                      filters.category === category.value ? "active" : ""
                    }`}
                    onClick={() => handleCategoryChange(category.value)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="price-filters">
              <h3>Цена:</h3>
              <div className="price-inputs">
                <input
                  type="number"
                  name="minPrice"
                  placeholder="От"
                  value={filters.minPrice}
                  onChange={handlePriceFilterChange}
                  min="0"
                />
                <span>-</span>
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="До"
                  value={filters.maxPrice}
                  onChange={handlePriceFilterChange}
                  min="0"
                />
              </div>
            </div>

            <div className="stock-filter">
              <label>
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={handleStockFilterChange}
                />
                Только в наличии
              </label>
            </div>
          </div>

          <div className="sort">
            <label>Сортировка:</label>
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
