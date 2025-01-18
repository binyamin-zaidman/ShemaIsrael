import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/images/logo.jpg"
            alt="Bootstrap"
            width="30"
            height="24"
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
              <a className="nav-link active text-primary" href="#">
                קצת עלינו
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-primary" href="#">
                לתרומה
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
