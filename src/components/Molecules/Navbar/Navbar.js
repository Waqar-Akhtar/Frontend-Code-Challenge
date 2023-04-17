import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [length, setLength] = useState(0);
  const cartProducts = useSelector((state) => {
    return state?.AddToCart?.data;
  });
  useEffect(() => {
    setLength(cartProducts.length);
  });
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          RandoStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addproducts">
                Add Products
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/checkout">
                Cart{" "}
                <span style={{ color: "red", fontSize: 12 }}>{length}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
