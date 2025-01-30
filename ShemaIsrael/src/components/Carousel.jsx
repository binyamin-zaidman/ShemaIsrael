import React from "react";
import "../styles/colors.css";
import "../styles/carousel.css";

const Carousel = () => {
  return (
    <div className="mt-2 d-flex flex-column justify-content-center align-items-center">
      <h2 className="ExplanatoryTitle rounded bg-color-gradient text-white p-2">
        בואו לראות – סיורים שמשאירים חותם{" "}
      </h2>
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
    </div>
  );
};

export default Carousel;
