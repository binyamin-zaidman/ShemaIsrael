import React from "react";
import "../styles/colors.css";
// import "../styles/carousel.css";

const Carousel = () => {
  return (
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide w-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../public/images/IMG_0197.JPG"
              className="d-block w-100"
              alt="visitImage"
            />
          </div>
          <div className="carousel-item">
            <img
              src="../public/images/IMG_0211.JPG"
              className="d-block w-100"
              alt="visitImage"
            />
          </div>
          <div className="carousel-item">
            <img
              src="../public/images/IMG_0215.JPG"
              className="d-block w-100"
              alt="visitImage"
            />
          </div>
          <div className="carousel-item">
            <img
              src="../public/images/IMG_0220.JPG"
              className="d-block w-100 " 
              alt="visitImage"
            />
          </div>
        </div>
      </div>
  );
};

export default Carousel;
