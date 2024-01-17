import React from 'react';
import StarRating from "./rating.jsx";

const coursesData = [
    {
        "name": "Course 1",
        "speaker": "Dr. Smith",
        "star": "Los Angeles",


    },
    {
        "name": "Course 2",
        "speaker": "Prof. Johnson",
        "star": "Los Angeles",

    },
    {
        "name": "Course 3",
        "speaker": "Dr. Brown",
        "star": "Chicago",

    },

];

const Course = ({ course }) => {
    const { name, speaker, star} = course;

    return (
        <div className="courses-card">
            <div className={"title"}>
                <div>
                    <img src={".src/assets/react.svg"}/>
                    <div className={"titlee"}>
                        <div className="new">
                            <h2>{name}</h2>
                            <p> {speaker}</p>
                        </div>
                    </div>
                </div>
                <div className={"a"}>


<StarRating/>
                </div>
            </div>


        </div>
    );
};

export const CourseList = () => {
    return (

        <div className="courses-container">
            {coursesData.map((course, index) => (
                <Course key={index} course={course} />
            ))}
        </div>

    );
};
