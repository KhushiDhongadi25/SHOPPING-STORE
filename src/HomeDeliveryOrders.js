import React, { useState } from "react";
import "./OrderForm.css";

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

const cities = [
  { id: 1, name: "Bangalore", areas: ["Whitefield", "Koramangala", "Indiranagar", "Jayanagar", "Malleshwaram"] },
  { id: 2, name: "Mysore", areas: ["Vijayanagar", "Gokulam", "Lakshmipuram", "Saraswathipuram", "Jayalakshmipuram"] },
  { id: 3, name: "Hubli", areas: ["Vidyanagar", "Keshwapur", "Gokul Road", "Deshpande Nagar", "Navanagar"] },
  { id: 4, name: "Mangalore", areas: ["Bejai", "Kadri", "Kankanady", "Lalbagh", "Urwa"] },
];


const OrderForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [orders, setOrders] = useState([]);
  const [lastOrder, setLastOrder] = useState(null);

  const handleSubmit = () => {
    if (!customerName || !selectedProduct || !selectedCity || !selectedArea) {
      alert("Please enter all details");
      return;
    }

    const deliveryCharges = 20 * Math.floor(Math.random() * 10 + 1);

    const newOrder = {
      customerName,
      product: selectedProduct,
      quantity,
      address: `${selectedCity.name}, ${selectedArea}`,
      total: quantity * selectedProduct.price + deliveryCharges,
    };

    setLastOrder(newOrder);
    setOrders([...orders, newOrder]);
  };

  return (
    <div className="order-form-container">
      <h1 className="order-form-title">HOME DELIVERY</h1>
      <input
        type="text"
        placeholder="Customer Name"
        className="input-field"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <select className="select-field" onChange={(e) => setSelectedProduct(products[e.target.value])}>
        <option value="">Select Product</option>
        {products.map((product, index) => (
          <option key={product.id} value={index}>
            {product.name} - Rs. {product.price}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Quantity"
        className="input-field"
        value={quantity}
        min={1}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <select className="select-field" onChange={(e) => setSelectedCity(cities[e.target.value])}>
        <option value="">Select City</option>
        {cities.map((city, index) => (
          <option key={city.id} value={index}>
            {city.name}
          </option>
        ))}
      </select>
      {selectedCity && (
        <select className="select-field" onChange={(e) => setSelectedArea(e.target.value)}>
          <option value="">Select Area</option>
          {selectedCity.areas.map((area, index) => (
            <option key={index} value={area}>
              {area}
            </option>
          ))}
        </select>
      )}
      <button className="button place" onClick={handleSubmit}>
        Place Order
      </button>
      <button className="button view" onClick={() => setLastOrder(null)}>
        View All Orders
      </button>

      <h2 className="order-form-title">{lastOrder ? "Last Order" : "All Orders"}</h2>
      {lastOrder ? (
        <div className="order-item last-order">
          <p><strong>{lastOrder.customerName}</strong></p>
          <p>{lastOrder.product.name} x {lastOrder.quantity}</p>
          <p>Address: {lastOrder.address}</p>
          <p>Total: Rs. {lastOrder.total}</p>
        </div>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-item">
            <p><strong>{order.customerName}</strong></p>
            <p>{order.product.name} x {order.quantity}</p>
            <p>Address: {order.address}</p>
            <p>Total: Rs. {order.total}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderForm;
