import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const CourseDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  };

  const goBackFun = () => {
    // navigate(-1);
    navigate("/");
  };
  return (
    <div style={containerStyle}>
      <p>This is the {name} course.</p>
      <button onClick={() => goBackFun()} style={buttonStyle}>
        Go Back
      </button>
    </div>
  );
};

export default CourseDetail;
