import React, { useState } from 'react';

// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    price: 79.99,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Smartphone Stand",
    price: 15.99,
    category: "Accessories",
  },
  {
    id: 4,
    name: "Portable Charger",
    price: 39.99,
    category: "Electronics",
  },
  {
    id: 5,
    name: "Bluetooth Headphones",
    price: 120.0,
    category: "Electronics",
  },
];

const App = () => {
  // State to hold selected categories (multiple can be selected)
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Handle checkbox changes
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      // Add the selected category to the state
      setSelectedCategories([...selectedCategories, category]);
    } else {
      // Remove the unselected category from the state
      setSelectedCategories(
        selectedCategories.filter((selectedCategory) => selectedCategory !== category)
      );
    }
  };

  // Filter products based on selected categories
  const filteredProducts = products.filter((product) => {
    // If no category is selected, return all products
    if (selectedCategories.length === 0) return true;
    return selectedCategories.includes(product.category);
  });

  return (
    <div>
      <h1>Product List</h1>

      {/* Filter Section */}
      <div style={{ marginBottom: '20px' }}>
        <label>Filter by Category:</label>
        <div>
          <input
            type='checkbox'
            value='Electronics'
            onChange={handleCategoryChange}
          />
          <label>Electronics</label>
        </div>
        <div>
          <input
            type='checkbox'
            value='Accessories'
            onChange={handleCategoryChange}
          />
          <label>Accessories</label>
        </div>
      </div>

      {/* Display filtered products */}
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
            </li>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </div>
  );
};

export default App;