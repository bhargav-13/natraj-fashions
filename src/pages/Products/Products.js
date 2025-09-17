import React, { useState } from 'react';
import './Products.css';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Elegant Summer Dress",
      price: "$89.99",
      category: "dresses",
      image: "https://via.placeholder.com/300x400/FF6B6B/FFFFFF?text=Summer+Dress",
      rating: 4.5
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: "$129.99",
      category: "outerwear",
      image: "https://via.placeholder.com/300x400/4ECDC4/FFFFFF?text=Denim+Jacket",
      rating: 4.8
    },
    {
      id: 3,
      name: "Premium Cotton Shirt",
      price: "$59.99",
      category: "tops",
      image: "https://via.placeholder.com/300x400/45B7D1/FFFFFF?text=Cotton+Shirt",
      rating: 4.3
    },
    {
      id: 4,
      name: "Stylish Leather Bag",
      price: "$199.99",
      category: "accessories",
      image: "https://via.placeholder.com/300x400/96CEB4/FFFFFF?text=Leather+Bag",
      rating: 4.7
    },
    {
      id: 5,
      name: "Comfortable Jeans",
      price: "$79.99",
      category: "bottoms",
      image: "https://via.placeholder.com/300x400/F39C12/FFFFFF?text=Comfortable+Jeans",
      rating: 4.6
    },
    {
      id: 6,
      name: "Elegant Blouse",
      price: "$69.99",
      category: "tops",
      image: "https://via.placeholder.com/300x400/E74C3C/FFFFFF?text=Elegant+Blouse",
      rating: 4.4
    },
    {
      id: 7,
      name: "Winter Coat",
      price: "$159.99",
      category: "outerwear",
      image: "https://via.placeholder.com/300x400/9B59B6/FFFFFF?text=Winter+Coat",
      rating: 4.9
    },
    {
      id: 8,
      name: "Casual Sneakers",
      price: "$89.99",
      category: "footwear",
      image: "https://via.placeholder.com/300x400/1ABC9C/FFFFFF?text=Casual+Sneakers",
      rating: 4.5
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'tops', name: 'Tops' },
    { id: 'bottoms', name: 'Bottoms' },
    { id: 'outerwear', name: 'Outerwear' },
    { id: 'footwear', name: 'Footwear' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-page">
      <div className="container">
        <div className="products-header">
          <h1>Our Products</h1>
          <p>Discover our latest collection of trendy fashion items</p>
        </div>

        <div className="products-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filter">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="products-count">
          <p>Showing {filteredProducts.length} products</p>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="quick-view-btn">Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
                  <span className="rating-number">({product.rating})</span>
                </div>
                <p className="product-price">{product.price}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
