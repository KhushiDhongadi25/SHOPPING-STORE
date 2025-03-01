import React from "react";

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

function Products() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-600">Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;