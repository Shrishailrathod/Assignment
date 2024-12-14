import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetailsByBarcode } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductDetailsByBarcode(id);
      setProduct(data);
    };
    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="container mt-4">
      <h1>{product.product_name}</h1>
      <img 
        src={product.image_url || 'https://via.placeholder.com/300'} 
        alt={product.product_name} 
        className="img-fluid mb-4"
      />
      <h3>Ingredients</h3>
      <p>{product.ingredients_text || 'Not available'}</p>

      <h3>Nutritional Information</h3>
      <ul>
        <li><strong>Energy:</strong> {product.nutriments.energy || 'N/A'} kcal</li>
        <li><strong>Fat:</strong> {product.nutriments.fat || 'N/A'} g</li>
        <li><strong>Carbohydrates:</strong> {product.nutriments.carbohydrates || 'N/A'} g</li>
        <li><strong>Proteins:</strong> {product.nutriments.proteins || 'N/A'} g</li>
      </ul>

      <h3>Labels</h3>
      <p>{product.labels || 'No labels available'}</p>
    </div>
  );
};

export default ProductDetail;
