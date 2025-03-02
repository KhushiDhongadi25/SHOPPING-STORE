import React, { useState } from "react";
import "./TakeawayOrders.css";

const TakeawayOrders = () => {
  const [name, setName] = useState("");
  const [productNumber, setProductNumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderId, setOrderId] = useState("");
  const [orders, setOrders] = useState([]);
  const [placeOrderMessage, setPlaceOrderMessage] = useState("");
  const [fetchOrderMessage, setFetchOrderMessage] = useState("");
  const [fetchOrderId, setFetchOrderId] = useState("");
  const [fetchedOrder, setFetchedOrder] = useState(null);
  const [placeOrderError, setPlaceOrderError] = useState("");
  const [fetchOrderError, setFetchOrderError] = useState("");

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
  
  
  
  const placeOrder = () => {
    if (quantity <= 0 || productNumber <= 0 || orderId <= 0) {
      setPlaceOrderError("Invalid input: Ensure product number, quantity, and order ID are greater than 0.");
      setPlaceOrderMessage("");
      return;
    }
    setPlaceOrderError("");
    const newOrder = { name, productNumber, quantity, orderId };
    setOrders([...orders, newOrder]);
    setPlaceOrderMessage("Your order has been placed successfully.");
    setName("");
    setProductNumber("");
    setQuantity("");
    setOrderId("");
  };

  const fetchOrder = () => {
    const order = orders.find((o) => o.orderId === fetchOrderId);
    if (order) {
      setFetchedOrder(order);
      setFetchOrderMessage("Order is ready for collection.");
      setFetchOrderError("");
    } else {
      setFetchedOrder(null);
      setFetchOrderMessage("");
      setFetchOrderError("No such order is in the Warehouse.");
    }
  };

  return (
    <div className="container">
      {/* Left Section - Available Products */}
      <div className="left-section">
        <h2>Available Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {`${product.id}. ${product.name} - Rs. ${product.price}`}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section - Order Operations */}
      <div className="right-section">
        <h2>Place Takeaway Order</h2>
        <input className="input-field" type="text" placeholder="Customer Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="input-field" type="number" placeholder="Product Number" value={productNumber} onChange={(e) => setProductNumber(e.target.value)} />
        <input className="input-field" type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <input className="input-field" type="number" placeholder="Order ID (0-9)" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
        <button className="button place" onClick={placeOrder}>Place Order</button>
        {placeOrderError && <p className="message error">{placeOrderError}</p>}
        {placeOrderMessage && <p className="message success">{placeOrderMessage}</p>}

        <h2>Display All Takeaway Orders</h2>
        <ul className="orders-list">
          {orders.length === 0 ? <p>No orders placed.</p> : orders.map((order, index) => (
            <li key={index}>{`ID: ${order.orderId}, Name: ${order.name}, Product: ${order.productNumber}, Quantity: ${order.quantity}`}</li>
          ))}
        </ul>

        <h2>Get Order from Warehouse</h2>
        <input className="input-field" type="number" placeholder="Enter Order ID" value={fetchOrderId} onChange={(e) => setFetchOrderId(e.target.value)} />
        <button className="button fetch" onClick={fetchOrder}>Fetch Order</button>
        {fetchedOrder && <p className="message info">Order ready: {JSON.stringify(fetchedOrder)}</p>}
        {fetchOrderError && <p className="message error">{fetchOrderError}</p>}
        {fetchOrderMessage && <p className="message info">{fetchOrderMessage}</p>}
      </div>
    </div>
  );
};

export default TakeawayOrders;
