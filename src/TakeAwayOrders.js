import React, { useState } from "react";

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
    { id: 1, name: "Sony FX30", price: 45500 },
    { id: 2, name: "Sony FR7", price: 175000 },
    { id: 3, name: "Canon EOS 90D", price: 289000 },
    { id: 4, name: "Nikon D6", price: 155700 },
    { id: 5, name: "Panasonic Lumix G10", price: 75000 },
    { id: 6, name: "Canon EOS 250D", price: 210000 },
    { id: 7, name: "Sony Alpha 7", price: 199999 },
    { id: 8, name: "Nikon D750", price: 100000 },
    { id: 9, name: "Panasonic Lumix GH5", price: 45000 },
    { id: 10, name: "Canon EOS 5D Mark", price: 500000 },
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
    <div className="p-4 max-w-4xl mx-auto border rounded-lg shadow-md flex">
      {/* Left Section - Available Products */}
      <div className="w-1/3 p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Available Products</h2>
        <ul className="border rounded p-2 mb-4">
          {products.map((product) => (
            <li key={product.id} className="border-b p-2">
              {`${product.id}. ${product.name} - Rs. ${product.price}`}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section - Order Operations */}
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-bold mb-4">Place Takeaway Order</h2>
        <input className="w-full p-2 mb-2 border rounded" type="text" placeholder="Customer Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="w-full p-2 mb-2 border rounded" type="number" placeholder="Product Number" value={productNumber} onChange={(e) => setProductNumber(e.target.value)} />
        <input className="w-full p-2 mb-2 border rounded" type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <input className="w-full p-2 mb-2 border rounded" type="number" placeholder="Order ID (0-9)" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={placeOrder}>Place Order</button>
        {placeOrderError && <p className="text-red-500 mt-2">{placeOrderError}</p>}
        {placeOrderMessage && <p className="text-green-500 mt-2">{placeOrderMessage}</p>}

        <h2 className="text-xl font-bold mt-6">Display All Takeaway Orders</h2>
        <ul className="border rounded p-2">
          {orders.length === 0 ? <p>No orders placed.</p> : orders.map((order, index) => (
            <li key={index} className="border-b p-2">{`ID: ${order.orderId}, Name: ${order.name}, Product: ${order.productNumber}, Quantity: ${order.quantity}`}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mt-6">Get Order from Warehouse</h2>
        <input className="w-full p-2 mb-2 border rounded" type="number" placeholder="Enter Order ID" value={fetchOrderId} onChange={(e) => setFetchOrderId(e.target.value)} />
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600" onClick={fetchOrder}>Fetch Order</button>
        {fetchedOrder && <p className="text-blue-500 mt-2">Order ready: {JSON.stringify(fetchedOrder)}</p>}
        {fetchOrderError && <p className="text-red-500 mt-2">{fetchOrderError}</p>}
        {fetchOrderMessage && <p className="text-blue-500 mt-2">{fetchOrderMessage}</p>}
      </div>
    </div>
  );
};

export default TakeawayOrders;
