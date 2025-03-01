import React, { useState } from "react";
import Products from "./Products";
import TakeAwayOrders from "./TakeAwayOrders";
import HomeDeliveryOrders from "./HomeDeliveryOrders";

function App() {
  const [view, setView] = useState("products");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Online Shopping Store
      </h1>
      <nav className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setView("products")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Products
        </button>
        <button
          onClick={() => setView("takeaway")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Take-Away Orders
        </button>
        <button
          onClick={() => setView("homedelivery")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Home Delivery Orders
        </button>
      </nav>

      {view === "products" && <Products />}
      {view === "takeaway" && <TakeAwayOrders />}
      {view === "homedelivery" && <HomeDeliveryOrders />}
    </div>
  );
}

export default App;