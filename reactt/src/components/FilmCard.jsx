import React from 'react';
import StarRating from './Star';


const FilmCard = ({ name, writer, image }) => {
    return (
        <div className="courses-card">
            <div className="title">
                <div className="image-container">
                    <img src={image} alt="Film Image" className={"img"} />
                </div>
                <div className="text-container">
                    <div className={"titlee"}>
                        <div className="new">
                            <h2>{name}</h2>
                            <p className={"writer"}>{writer}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"a"}>
                <StarRating />
            </div>
        </div>
    );
};

export default FilmCard;
