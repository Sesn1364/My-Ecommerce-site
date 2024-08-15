import React from 'react';
import { useAppSelector } from '../store/store';

const ProductList: React.FC = () => {
  const products = useAppSelector((state) => state.products.items);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
