import React, { useState } from "react";

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

const cities = [
  { id: 1, name: "Karachi", areas: ["Bahria Town", "North Nazimabad", "Defence", "Clifton", "Liyari"] },
  { id: 2, name: "Islamabad", areas: ["G-9", "F-10", "I-8", "G-5", "Blue Area"] },
  { id: 3, name: "Lahore", areas: ["DHA", "Gulberg", "Johar Town", "Model Town", "Iqbal Town"] },
  { id: 4, name: "Abbotabad", areas: ["Mandian", "Supply", "Jinnah Road", "Sarai Saleh", "Mansehra Road"] },
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
    if (!customerName || !selectedProduct) {
      alert("Please enter all details");
      return;
    }
    
    if (!selectedCity || !selectedArea) {
      alert("Please select a city and area for delivery");
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
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">HOME DELIVERY</h1>
      <input
        type="text"
        placeholder="Customer Name"
        className="border p-2 w-full mb-2"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <select className="border p-2 w-full mb-2" onChange={(e) => setSelectedProduct(products[e.target.value])}>
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
        className="border p-2 w-full mb-2"
        value={quantity}
        min={1}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <select className="border p-2 w-full mb-2" onChange={(e) => setSelectedCity(cities[e.target.value])}>
        <option value="">Select City</option>
        {cities.map((city, index) => (
          <option key={city.id} value={index}>
            {city.name}
          </option>
        ))}
      </select>
      {selectedCity && (
        <select className="border p-2 w-full mb-2" onChange={(e) => setSelectedArea(e.target.value)}>
          <option value="">Select Area</option>
          {selectedCity.areas.map((area, index) => (
            <option key={index} value={area}>
              {area}
            </option>
          ))}
        </select>
      )}
      <button className="bg-blue-500 text-white p-2 w-full mb-2" onClick={handleSubmit}>
        Place Order
      </button>
      <button className="bg-gray-500 text-white p-2 w-full" onClick={() => setLastOrder(null)}>
        View All Orders
      </button>

      <h2 className="text-lg font-bold mt-4">{lastOrder ? "Last Order" : "All Orders"}</h2>
      {lastOrder ? (
        <div className="border p-2 mb-2">
          <p><strong>{lastOrder.customerName}</strong></p>
          <p>{lastOrder.product.name} x {lastOrder.quantity}</p>
          <p>Address: {lastOrder.address}</p>
          <p>Total: Rs. {lastOrder.total}</p>
        </div>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border p-2 mb-2">
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
