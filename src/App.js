import React, { useState } from "react";
import Products from "./Products";
import TakeAwayOrders from "./TakeAwayOrders";
import HomeDeliveryOrders from "./HomeDeliveryOrders";
import "./App.css"; // Import the CSS file

function App() {
  const [view, setView] = useState("products");

  return (
    <div className="app-container">
      <h1 className="app-title">Online Shopping Store</h1>
      <nav className="navbar">
        <button onClick={() => setView("products")} className="nav-button">
          Products
        </button>
        <button onClick={() => setView("takeaway")} className="nav-button">
          Take-Away Orders
        </button>
        <button onClick={() => setView("homedelivery")} className="nav-button">
          Home Delivery Orders
        </button>
      </nav>

      <div className="view-container">
        {view === "products" && <Products />}
        {view === "takeaway" && <TakeAwayOrders />}
        {view === "homedelivery" && <HomeDeliveryOrders />}
      </div>
    </div>
  );
}

export default App;