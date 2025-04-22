import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Моковые данные товаров
const productsData = [
  {
    id: 1,
    name: 'Холодильник Samsung RB37A52N0SA',
    category: 'Холодильники',
    price: 58990,
    rating: 4.7,
    image: '/images/product_1.png',
    inStock: true,
    features: ['No Frost', 'Диагностика SmartThings', 'Инверторный компрессор']
  },
  {
    id: 2,
    name: 'Стиральная машина LG F2J3NS0W',
    category: 'Стиральные машины',
    price: 32990,
    rating: 4.5,
    image: 'https://via.placeholder.com/300x300?text=LG+Washing',
    inStock: true,
    features: ['Загрузка 6 кг', 'Паровая обработка', 'AI Direct Drive']
  },
  // Добавьте другие товары по аналогии
];

const Catalog = () => {
  const [products, setProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    inStock: false
  });
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Фильтрация товаров
  useEffect(() => {
    let filtered = productsData.filter(product => {
      return (
        (filters.category === '' || product.category === filters.category) &&
        (filters.minPrice === '' || product.price >= filters.minPrice) &&
        (filters.maxPrice === '' || product.price <= filters.maxPrice) &&
        (!filters.inStock || product.inStock)
      );
    });

    // Сортировка
    switch(sortOption) {
      case 'priceAsc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
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
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="catalog">
      <div className="catalog-header">
        <h1>Каталог бытовой техники</h1>
        <div className="controls">
          <div className="filters">
            <select 
              name="category" 
              value={filters.category}
              onChange={handleFilterChange}
            >
              <option value="">Все категории</option>
              <option value="Холодильники">Холодильники</option>
              <option value="Стиральные машины">Стиральные машины</option>
              {/* Добавьте другие категории */}
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

            <label>
              <input
                type="checkbox"
                name="inStock"
                checked={filters.inStock}
                onChange={handleFilterChange}
              />
              Только в наличии
            </label>
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

      <div className="product-grid">
        {currentProducts.length > 0 ? (
          currentProducts.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
              </Link>
              <div className="product-info">
                <div className="price">{product.price.toLocaleString()} ₽</div>
                <div className="rating">★ {product.rating}</div>
                {product.inStock ? (
                  <div className="in-stock">В наличии</div>
                ) : (
                  <div className="out-of-stock">Нет в наличии</div>
                )}
                <button className="add-to-cart">В корзину</button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">Товары не найдены</div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;