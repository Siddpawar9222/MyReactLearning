import React from 'react';

const NoPage = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    color: '#333',
    fontSize: '24px',
  };

  const contentStyle = {
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2>Error Page</h2>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <p>Please navigate back to the home page or contact support for assistance.</p>
      </div>
    </div>
  );
};

export default NoPage;
