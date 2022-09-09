import { Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";

const NotFound = () => {
  return (
    <div className="alertBar" style={{ color: "white" }}>
      <h1 style={{ color: "white" }}>Sorry </h1>
      <br />
      <h2 style={{ color: "white" }}> Page Not Found</h2>
      <Link to="/" className="fancy_link">
        Back to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
