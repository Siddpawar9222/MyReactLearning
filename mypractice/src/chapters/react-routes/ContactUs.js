import React from "react";

const ContactUs = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const contentStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or inquiries, feel free to reach out to us!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
