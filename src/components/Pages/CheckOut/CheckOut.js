import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkoutCourse = useLoaderData();
    console.log(checkoutCourse);
    return (
        <div>
            <h1>Hi from checkOut {checkoutCourse.name}</h1>
        </div>
    );
};

export default CheckOut;