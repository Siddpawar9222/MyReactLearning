import React from 'react';

const Blog = () => {
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
        <h2>Blog</h2>
        <p>Here you'll find our latest blog posts and articles.</p>
        <p>Stay tuned for interesting updates!</p>
      </div>
    </div>
  );
};

export default Blog;
