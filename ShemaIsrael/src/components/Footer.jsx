import React from "react";
import "../styles/colors.css";

const Footer = () => {
  return (
    <div className="text-center bg-color-gradient w-100 mt-5">
      <a
        href="https://docs.google.com/forms/d/1TcC48PyccB1fzKGKCm3QeqfLbDSYJgkxgtnVh8GO48E"
        target="_blank"
        title="מעבר לטופס גוגל פורם"
        className="d-inline-block p-3 text-white text-decoration-underline"
      >
        למעבר להשארת פרטים ליצירת קשר
      </a>
    </div>
  );
};

export default Footer;
