import React from "react";
import "../styles/Navbar.css";
import "../styles/colors.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-color-gradient mb-1">
      <div className="container-fluid">
        <img src="/images/logo.jpg" alt="logo" width="65" className="rounded" />
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
              <a
                className="nav-link active text-white m-3"
                href="https://www.guidestar.org.il/organization/580809119"
                target="_blank"
              >
                אודות
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white m-3"
                href="https://docs.google.com/forms/d/1TcC48PyccB1fzKGKCm3QeqfLbDSYJgkxgtnVh8GO48E"
                target="_blank"
              >
                ליצירת קשר
              </a>
            </li>
          </ul>
      <img src="/images/yizkor-22.jpg" className="yizkorImg rounded" alt="yizkor"/>
        </div>
      </div>
    </nav>
  );  
};

export default Navbar;
