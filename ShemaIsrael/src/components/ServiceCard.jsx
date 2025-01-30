import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ title, description }) => (
  <div className="col-8 col-md-6 col-lg-6 p-3" data-aos="flip-down">
    <div className="rounded p-3 h-100 bg-white shadow bg-color-gradient" > 
      <h2 className="text-white">{title}</h2>
      {description && <p className="text-white">{description}</p>}
    </div>
  </div>
);

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ServiceCard;
