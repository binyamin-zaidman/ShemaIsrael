import React from "react";
import "../styles/colors.css";

const Carousel = () => {
  return (
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner object-fit-scale ratio ratio-16x9">
          <div className="carousel-item active">
            <img src="/images/בארי.jpg" className="w-25" alt="First Slide" />
          </div>
          <div className="carousel-item">
            <img src="/images/רעים.webp" className="w-25" alt="Second Slide" />
          </div>
          <div className="carousel-item">
            <img src="/images/בארי.jpg" className="w-25" alt="Third Slide" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
};

export default Carousel;
