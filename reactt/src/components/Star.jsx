import React, { useState } from 'react';
const Star = ({ selected, onClick }) => (
    <span className={`star ${selected ? 'selected' : ''}`} onClick={onClick}>
        {selected ? '★' : '☆'}
    </span>
);

const StarRating = ({ totalStars = 5 }) => {
    const [selectedStars, setSelectedStars] = useState(0);

    const handleStarClick = (index) => {
        setSelectedStars(index + 1);
    };

    return (
        <div>
            {[...Array(totalStars)].map((_, index) => (
                <Star
                    key={index}
                    selected={index < selectedStars}
                    onClick={() => handleStarClick(index)}
                />
            ))}
        </div>
    );
};

export default StarRating;
