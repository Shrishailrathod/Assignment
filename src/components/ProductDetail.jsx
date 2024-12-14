import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(response => {
        setProduct(response.data.product);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [barcode]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>{product.product_name}</h2>
      <img src={product.image_url} alt={product.product_name} className="img-fluid" />
      <h4>Ingredients:</h4>
      <p>{product.ingredients_text || 'N/A'}</p>
      <h4>Nutrition:</h4>
      <ul>
        <li><strong>Energy:</strong> {product.nutriments?.energy_kcal || 'N/A'} kcal</li>
        <li><strong>Fat:</strong> {product.nutriments?.fat || 'N/A'} g</li>
        <li><strong>Carbs:</strong> {product.nutriments?.carbohydrates || 'N/A'} g</li>
        <li><strong>Proteins:</strong> {product.nutriments?.proteins || 'N/A'} g</li>
      </ul>
    </div>
  );
}

export default ProductDetail;
