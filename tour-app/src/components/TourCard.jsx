import React, { useState } from "react";

const TourCard = ({ id, name, info, image, price, onRemoveTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>${price}</h4>
      <p>
        {/* Show all information if readMore is true */}
        {readMore ? info : `${info.substring(0, 80)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </button>
      </p>
      
      {/* Button to remove tour */}
      <button className="btn-remove" onClick={() => onRemoveTour(id)}>
        Remove tour
      </button>
    </article>
  );
};

export default TourCard;