import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => (
  <div className="d-flex flex-wrap justify-content-center">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
