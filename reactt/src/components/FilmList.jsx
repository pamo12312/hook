// FilmList.jsx
import React from 'react';
import FilmCard from './FilmCard';

const FilmList = ({ filmData }) => {
    return (
        <div className="courses-container">
            {filmData.map((film, index) => (
                <FilmCard key={index} {...film} />
            ))}
        </div>
    );
};

export default FilmList;
