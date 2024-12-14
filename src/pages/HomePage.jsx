import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import SortOptions from '../components/SortOptions';
import { fetchProductsByCategory, searchProductsByName } from '../services/api';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories] = useState(['beverages', 'dairy', 'snacks']);

  useEffect(() => {
    fetchInitialProducts();
  }, []);

  const fetchInitialProducts = async () => {
    const initialProducts = await fetchProductsByCategory(categories[0]);
    setProducts(initialProducts);
  };

  const handleSearch = async (query) => {
    const results = await searchProductsByName(query);
    setProducts(results);
  };

  const handleFilter = async (category) => {
    const filteredProducts = await fetchProductsByCategory(category);
    setProducts(filteredProducts);
  };

  const handleSort = (criteria) => {
    const sortedProducts = [...products];
    if (criteria === 'name') {
      sortedProducts.sort((a, b) => a.product_name.localeCompare(b.product_name));
    } else if (criteria === 'nutrition') {
      sortedProducts.sort((a, b) => (a.nutrition_grades || '').localeCompare(b.nutrition_grades || ''));
    }
    setProducts(sortedProducts);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Food Product Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      <Filters categories={categories} onSelectCategory={handleFilter} />
      <SortOptions onSort={handleSort} />
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
