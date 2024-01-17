// StarRating.jsx
import React, { useState } from 'react';


const Star = ({ selected = false, onSelect = () => {}, onMouseEnter = () => {} }) => (
    <span
        className="star"
        onClick={onSelect}
        onMouseEnter={onMouseEnter}
    >
    {selected ? '★' : '☆'}
  </span>
);

const StarRating = ({ totalStars = 5 }) => {
    const [selectedStars, setSelectedStars] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(null);

    const handleStarSelect = (index) => {
        setSelectedStars(index + 1);
    };

    return (
        <div>
            {[...Array(totalStars)].map((_, index) => (
                <Star
                    key={index}
                    selected={index < selectedStars}
                    onMouseEnter={() => setHoveredStar(index + 1)}
                    onSelect={() => handleStarSelect(index)}
                />
            ))}

        </div>
    );
};

export default StarRating;
