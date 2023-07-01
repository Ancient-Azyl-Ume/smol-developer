import React from 'react';
import Link from 'next/link';
import '../styles/index.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="hidden w-full text-gray-600 md:flex md:items-center">
            <Link href="/">
              <a className="mx-1 hover:text-gray-500">Home</a>
            </Link>
            <Link href="/products">
              <a className="mx-1 hover:text-gray-500">Products</a>
            </Link>
          </div>
          <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
            Modern Woman's Clothing Store
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;