import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="card m-2" style={{ width: '18rem' }}>
    <img 
      src={product.image_url || 'https://via.placeholder.com/150'} 
      className="card-img-top" 
      alt={product.product_name} 
    />
    <div className="card-body">
      <h5 className="card-title">{product.product_name}</h5>
      <p className="card-text">
        <strong>Category:</strong> {product.categories_tags?.[0] || 'N/A'}
      </p>
      <p className="card-text">
        <strong>Nutrition Grade:</strong> {product.nutrition_grades || 'N/A'}
      </p>
      {/* View Details Button */}
      <Link to={`/product/${product.id}`} className="btn btn-primary">
        View Details
      </Link>
    </div>
  </div>
);

export default ProductCard;
