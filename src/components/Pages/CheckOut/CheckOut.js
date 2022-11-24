import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const checkoutCourse = useLoaderData();
    const handleSuccess = () => {
        toast.success('Purchase successfully');
    }
    const { img, name, price, course_duration } = checkoutCourse;
    return (
        <div className='h-80'>
            <div className="font-bold card mx-auto mt-10 w-96 bg-base-200 shadow-2xl image-full">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Course Duration: {course_duration}</p>
                    <p>Price : ${price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleSuccess} className="btn btn-info">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;