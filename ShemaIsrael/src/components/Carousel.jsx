import React from "react";
import "../styles/colors.css";
import "../styles/carousel.css";

const Carousel = () => {
  return (
    <div className="mt-2 d-flex flex-column justify-content-center align-items-center">
      <a href="https://docs.google.com/forms/d/1TcC48PyccB1fzKGKCm3QeqfLbDSYJgkxgtnVh8GO48E" target="_blank"><h2 className="ExplanatoryTitle rounded bg-color-gradient text-white p-2 mb-4 grow-shrink">
        בואו לראות – סיורים שמשאירים חותם{" "}
      </h2>
      </a>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide w-75"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./images/IMG_0215.JPG"
              className="d-block w-100"
              alt="visitImage"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/IMG_1901.JPG"
              className="d-block w-100"
              alt="visitImage"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/IMG_9341.JPG"
              className="d-block w-100"
              alt="visitImage"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/IMG_0220.JPG"
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
