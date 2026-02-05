import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg"
      style={{ backgroundColor: "#333" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#" style={{ color: "whiteSmoke" }}>
          Newsopia
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-left">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "whiteSmoke" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/business"
                style={{ color: "whiteSmoke" }}
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/entertainment"
                style={{ color: "whiteSmoke" }}
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/health"
                style={{ color: "whiteSmoke" }}
              >
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/science"
                style={{ color: "whiteSmoke" }}
              >
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/sports"
                style={{ color: "whiteSmoke" }}
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/technology"
                style={{ color: "whiteSmoke" }}
              >
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{ color: "whiteSmoke" }}
              >
                About
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search News"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
