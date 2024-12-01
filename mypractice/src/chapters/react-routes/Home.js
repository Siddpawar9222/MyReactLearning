import React from 'react';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const contentStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2>Welcome to Our Website</h2>
        <p>This is the homepage of our website.</p>
        <p>Feel free to explore and learn more about us!</p>
      </div>
    </div>
  );
};

export default Home;
