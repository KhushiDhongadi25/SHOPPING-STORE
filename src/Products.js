import React from "react";
import "./Products.css"; // Import the CSS file

const products = [
  { id: 1, name: "MAC Lipstick", price: 1999 },
  { id: 2, name: "Maybelline Foundation", price: 749 },
  { id: 3, name: "Huda Eyeshadow", price: 5499 },
  { id: 4, name: "Lakmé Compact", price: 899 },
  { id: 5, name: "Bobbi Eyeliner", price: 3200 },
  { id: 6, name: "Estee Foundation", price: 4000 },
  { id: 7, name: "L'Oréal Mascara", price: 650 },
  { id: 8, name: "Clinique Moisturizer", price: 3800 },
  { id: 9, name: "Dior Lip Glow", price: 3900 },
  { id: 10, name: "Charlotte Powder", price: 4500 },
];

function Products() {
  return (
    <div className="products-container">
      <h2 className="products-title">Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
