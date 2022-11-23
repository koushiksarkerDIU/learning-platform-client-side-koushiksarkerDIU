import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetailsCard = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>

        </div>
    );
};

export default CourseDetailsCard; 