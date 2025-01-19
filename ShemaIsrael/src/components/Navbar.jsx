import React from "react";
import "../styles/Navbar.css";
import "../styles/colors.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-color-gradient mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/images/logo.jpg"
            alt="Bootstrap"
            width="50"
          />
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" href="#">
                קצת עלינו
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" href="#">
                לתרומה
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img src="/images/yizkor-22.jpg" className="yizkorImg" alt="yizkor" />
    </nav>
  );
};

export default Navbar;
