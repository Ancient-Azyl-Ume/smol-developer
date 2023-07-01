import React from 'react';
import Link from 'next/link';
import { Product } from '../api/pocketbase';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>
        <a>
          <img src={product.image} alt={product.title} />
          <div className="card-body">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="card-footer">
              <span className="price">${product.price}</span>
            </div>
          </a>
        </Link>
    </div>
  );
};

export default ProductCard;